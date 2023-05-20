export default class ModalDialog {
  /**
   * Défini le custom élément
   */
  static defineElement(name: string = 'modal-dialog') {
    class ModalDialogElement extends HTMLElement {
      private previouslyFocusedElement: Element | null
      private trapElements: any[]

      constructor() {
        super()
        this.close = this.close.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
        this.previouslyFocusedElement = null
        this.trapElements = []
      }

      static get observedAttributes() {
        return ['hidden']
      }

      connectedCallback() {
        this.setAttribute('aria-modal', 'true')
        this.setAttribute('role', 'dialog')
        this.addEventListener('click', e => {
          if (
            (e.target === this &&
              this.getAttribute('overlay-close') !== null) ||
            (e.target as HTMLElement)?.dataset.dismiss !== undefined ||
            (e.target as HTMLElement)?.closest('[data-dismiss]') !== null
          ) {
            this.close()
          }
        })
        this.createTrapFocusElement('afterbegin')
        this.createTrapFocusElement('beforeend')
        document.addEventListener('keydown', this.onKeyDown)
      }

      disconnectedCallback() {
        document.removeEventListener('keydown', this.onKeyDown)
        this.trapElements.forEach(element =>
          element.parentElement.removeChild(element),
        )
        this.trapElements = []
      }

      attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string,
      ) {
        if (name === 'hidden' && newValue === null) {
          this.previouslyFocusedElement = document.activeElement
          const firstInput = this.getFocusableElements()[0]
          if (firstInput) {
            ;(firstInput as HTMLElement).focus()
          }
          document.addEventListener('keydown', this.onKeyDown)
          this.removeAttribute('aria-hidden')
        }
        if (name === 'hidden' && newValue === 'hidden') {
          if (this.previouslyFocusedElement) {
            ;(this.previouslyFocusedElement as HTMLElement).focus()
          }
          this.previouslyFocusedElement = null
          this.setAttribute('aria-hidden', 'true')
          document.removeEventListener('keydown', this.onKeyDown)
        }
      }

      onKeyDown(e: KeyboardEvent) {
        if (e.key === 'Escape') {
          this.close()
        }
      }

      close() {
        const event = new CustomEvent('close', {
          detail: { close: true },
          cancelable: true,
        })
        this.dispatchEvent(event)
        if (!event.defaultPrevented) {
          this.setAttribute('hidden', 'hidden')
        }
      }

      createTrapFocusElement(position: InsertPosition) {
        const element = document.createElement('div')
        element.setAttribute('tabindex', '0')
        element.addEventListener('focus', () => {
          const focusableElements = this.getFocusableElements()
          if (focusableElements.length > 0) {
            ;(
              focusableElements[
                position === 'afterbegin' ? focusableElements.length - 1 : 0
              ] as HTMLElement
            ).focus()
          }
        })
        this.trapElements.push(element)
        this.insertAdjacentElement(position, element)
      }

      getFocusableElements() {
        const selector = `[href],
                                  button:not([disabled]),
                                  input:not([disabled]),
                                  select:not([disabled]),
                                  textarea:not([disabled]),
                                  [tabindex]:not([tabindex="-1"]`
        return Array.from(this.querySelectorAll(selector)).filter(element => {
          const rect = element.getBoundingClientRect()
          return rect.width > 0 && rect.height > 0
        })
      }
    }

    customElements.define(name, ModalDialogElement)
  }
}
