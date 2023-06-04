import 'preact/debug'
import {
  EditorComponentData,
  EditorComponentDefinition,
  EditorComponentDefinitions,
  EditorComponentTemplate,
  Translation,
} from '@/components/Editor/types'
import { Translations as EN } from '@/components/Editor/langs/en'
import { indexify } from '@/functions/object'
import { fillDefaults } from '@/components/Editor/functions/fields'
import { EditorComponent } from '@/components/Editor/editor'
import React, { render } from 'preact/compat'
import { StoreProvider } from '@/components/Editor/store'
import { InsertPosition } from '@/components/Editor/enum'

const components: EditorComponentDefinitions = {}
const templates: EditorComponentTemplate[] = []

export default class Editor {
  static i18n: Translation = EN

  constructor(options: { lang?: Translation } = {}) {
    Editor.i18n = options.lang || EN
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
        render(
          <StoreProvider
            defaultData={data}
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
          this,
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
}
