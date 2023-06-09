import { redirect } from '@/functions/url'

export default class Switch {
  /**
   * Défini le custom élément
   */
  static defineElement(name: string = 'input-switch') {
    class SwitchElement extends HTMLInputElement {
      switch: any

      connectedCallback() {
        if (
          this.nextElementSibling === null ||
          this.nextElementSibling.tagName !== 'LABEL'
        ) {
          console.error('Impossible de greffer le switch')
          return
        }
        if (this.parentElement) {
          this.parentElement.classList.add('form-switch')
          this.parentElement.classList.remove('form-check')
        }
        this.switch = document.createElement('span')
        this.switch.classList.add('switch')
        this.nextElementSibling.prepend(this.switch)
        this.addEventListener('change', this.onChange.bind(this))
      }

      onChange() {
        if (this.dataset.redirect === undefined) {
          return
        }
        const params = new URLSearchParams(window.location.search)
        if (this.checked) {
          params.set(this.name, this.value)
        } else {
          params.delete(this.name)
        }
        if (params.has('page')) {
          params.delete('page')
        }
        redirect(`${location.pathname}?${params}`)
      }

      disconnectedCallback() {
        if (this.parentElement) {
          this.parentElement.classList.remove('form-switch')
        }
        this.switch.parentElement.remove(this.switch)
      }
    }

    customElements.define(name, SwitchElement, { extends: 'input' })
  }
}
