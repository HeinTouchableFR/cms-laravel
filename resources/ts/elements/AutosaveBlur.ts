import { jsonFetchOrFlash } from '@/functions/api'
import preactCustomElement from '@/functions/preact'
import Loader from '@/components/Loader'

export default class AutosaveBlur {
  /**
   * Défini le custom élément
   */
  static defineElement(name: string = 'autosave-blur') {
    class AutosaveBlurElement extends HTMLFormElement {
      connectedCallback() {
        this.querySelectorAll('input, textarea, select').forEach(input => {
          if (
            input.hasAttribute('is') &&
            input.getAttribute('is') === 'input-attachment'
          ) {
            input.addEventListener('change', this.save.bind(this))
          } else {
            input.addEventListener('blur', this.save.bind(this))
          }
        })
      }

      save() {
        if (!customElements.get('loader-element')) {
          preactCustomElement('loader-element', Loader, null, null)
        }
        const loader = document.createElement('loader-element')
        this.style.position = 'relative'
        loader.style.position = 'absolute'
        loader.style.top = '8px'
        loader.style.color = 'var(--contrast)'
        loader.style.right = '8px'
        loader.style.height = '16px'
        loader.style.width = '16px'
        this.appendChild(loader)
        jsonFetchOrFlash(this.getAttribute('action') || '', {
          method: this.getAttribute('method') || 'POST',
          body: new FormData(this),
        })
          .catch(console.error)
          .finally(() => {
            this.removeChild(loader)
          })
      }

      disconnectedCallback() {}
    }

    customElements.define(name, AutosaveBlurElement, { extends: 'form' })
  }
}
