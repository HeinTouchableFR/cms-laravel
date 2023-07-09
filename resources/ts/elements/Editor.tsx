import {
  EditorComponentData,
  EditorComponentDefinition,
  EditorComponentDefinitions,
  EditorComponentTemplate,
  Translation,
} from '@/components/Editor/types'
import { Translations as EN } from '@/components/Editor/langs/en'
import { Translations as FR } from '@/components/Editor/langs/fr'
import { indexify } from '@/functions/object'
import { fillDefaults } from '@/components/Editor/functions/fields'
import { EditorComponent } from '@/components/Editor/editor'
import React from 'react'
import { StoreProvider } from '@/components/Editor/store'
import { InsertPosition } from '@/components/Editor/enum'
import { createRoot } from 'react-dom/client'
import { jsonFetchOrFlash } from '@/functions/api'
// Components
import { Text } from '@/components/Editor/fields/Text'
import { Field } from '@/components/Editor/components/ui'
import { Checkbox } from '@/components/Editor/fields/Checkbox'
import { Repeater } from '@/components/Editor/fields/Repeater'
import { ImageUrl } from '@/components/Editor/fields/ImageUrl'
import { HTMLText } from '@/components/Editor/fields/HTMLText'
import { Color } from '@/components/Editor/fields/Color'
import { Row } from '@/components/Editor/fields/Row'
import { Alignment } from '@/components/Editor/fields/Alignment'
import { Select } from '@/components/Editor/fields/Select'
import { Number } from '@/components/Editor/fields/Number'
import { Range } from '@/components/Editor/fields/Range'
import { Tabs } from '@/components/Editor/fields/Tabs'
import { DatePicker } from '@/components/Editor/fields/DatePicker'
import { TextAlign } from '@/components/Editor/fields/TextAlign'

const components: EditorComponentDefinitions = {}
const templates: EditorComponentTemplate[] = []

export class Editor {
  static i18n: Translation = EN
  jsonFetchOrFlash = jsonFetchOrFlash

  constructor(options: { lang?: Translation } = {}) {
    Editor.i18n = options.lang || EN
  }

  toFrench() {
    Editor.i18n = FR
  }

  toEnglish() {
    Editor.i18n = EN
  }

  onBrowse = async () => {
    function setAttachment(attachment: any) {
      const changeEvent = document.createEvent('HTMLEvents')
      changeEvent.initEvent('change', false, true)
      return attachment.id
    }

    return new Promise(function (resolve) {
      const modal = document.createElement('modal-dialog')
      modal.style.zIndex = '20000'
      modal.setAttribute('overlay-close', 'overlay-close')
      const fm = document.createElement('file-manager')
      fm.setAttribute('data-endpoint', '/admin/attachment')
      modal.appendChild(fm)
      fm.addEventListener('file', (e: any) => {
        resolve(setAttachment(e.detail))
      })
      document.body.appendChild(modal)
    })
  }

  defineElement(elementName: string = 'editor-builder') {
    // We only declare the class in this function to avoid any problem with SSR
    class EditorElement extends HTMLElement {
      static changeEventName = 'change'
      private _mounted: boolean = false
      private _data: EditorComponentData[] | null = null

      static get observedAttributes() {
        return ['hidden', 'value']
      }

      private _value = ''

      get value(): string {
        return this._value
      }

      set value(v: string) {
        if (v === this._value) {
          return
        }
        this._value = v
        this._data = null
        this.renderComponent()
      }

      connectedCallback() {
        this._value = this.getAttribute('value') || '[]'
        this.renderComponent()
        this._mounted = true
      }

      attributeChangedCallback(
        name: string,
        oldValue?: string,
        newValue?: string,
      ) {
        if (!this._mounted) {
          return false
        }
        // Si la valeur change, on réinitialise la version traduite du JSON
        if (name === 'value') {
          // Saute le nouveau rendu si la valeur n'est pas nouvelle
          if (newValue === this._value) {
            return
          }
          this._value = newValue!
        }
        this.renderComponent()
      }

      disconnectedCallback() {
        this._mounted = false
      }

      private parseValue(value: string): EditorComponentData[] {
        if (this._data === null) {
          try {
            const json = JSON.parse(value)
            this._data = indexify(json).map((value: EditorComponentData) => {
              return fillDefaults(value, components[value._name]?.fields ?? [])
            })
          } catch (e) {
            console.error('Impossible de parser les données', value, e)
            alert("Impossible de parser les données de l'éditeur visuel")
            this._data = []
          }
        }
        return this._data!
      }

      private renderComponent() {
        const data = this.parseValue(this._value)
        const hiddenCategories =
          this.getAttribute('hidden-categories')?.split(';') ?? []
        createRoot(this).render(
          <StoreProvider
            data={data}
            definitions={components}
            templates={templates}
            hiddenCategories={hiddenCategories}
            rootElement={this}
            insertPosition={
              (this.getAttribute('insertPosition') ??
                InsertPosition.Start) as InsertPosition
            }
          >
            <EditorComponent
              element={this}
              value={data}
              previewUrl={this.getAttribute('preview') ?? ''}
              iconsUrl={this.getAttribute('iconsUrl') ?? '/'}
              name={this.getAttribute('name') ?? ''}
              visible={this.getAttribute('hidden') === null}
              onChange={(value: string) => {
                if (this._value === value) {
                  return
                }
                this._value = value
                this.dispatchEvent(
                  new CustomEvent('change', {
                    detail: value,
                  }),
                )
              }}
            />
          </StoreProvider>,
        )
      }
    }

    customElements.define(elementName, EditorElement)
  }

  registerComponent(name: string, definition: EditorComponentDefinition) {
    components[name] = { label: 'title', ...definition }
  }

  registerTemplate(template: EditorComponentTemplate) {
    templates.push(template)
  }

  fields() {
    return {
      Text,
      Field,
      Checkbox,
      Repeater,
      ImageUrl,
      HTMLText,
      Color,
      Row,
      Alignment,
      Select,
      Number,
      Range,
      Tabs,
      DatePicker,
      TextAlign,
    }
  }
}
