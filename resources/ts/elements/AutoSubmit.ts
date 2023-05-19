export default class AutoSubmit {
  /**
   * Défini le custom élément
   */
  static defineElement(name: string = 'auto-submit') {
    class AutoSubmitElement extends HTMLFormElement {
      connectedCallback() {
        Array.from(this.querySelectorAll('input, select')).forEach(input => {
          input.addEventListener('change', () => {
            this.submit()
          })
        })
      }
    }

    customElements.define(name, AutoSubmitElement, { extends: 'form' })
  }
}
