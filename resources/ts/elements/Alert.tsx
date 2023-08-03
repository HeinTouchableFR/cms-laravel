import { createRoot } from 'react-dom/client'
import { Alert as AlertComponent } from '@/components/Alert'

export default class Alert {
  /**
   * Défini le custom élément
   */
  static defineElement(name: string = 'alert-message') {
    type Props = {
      type?: string
    }

    class AlertElement extends HTMLElement {
      type: any

      constructor({ type }: Props = {}) {
        super()
        this.type = type
      }

      connectedCallback() {
        const message = this.innerHTML
        const duration = this.getAttribute('duration') || '3'
        const floating = this.getAttribute('is-floating')
        this.type = this.type || this.getAttribute('type')
        const root = createRoot(this)
        root.render(
          <AlertComponent
            type={this.type}
            message={message}
            duration={parseInt(duration, 10)}
            isFloating={!!floating}
          />,
        )
      }
    }

    customElements.define(name, AlertElement)
  }

  /**
   * Affiche un message flash flottant sur la page
   */
  static flash(
    message: string,
    type: string = 'success',
    duration: number = 3,
  ) {
    if (!customElements.get('alert-message')) {
      this.defineElement('alert-message')
    }
    const alert = document.createElement('alert-message')
    if (duration) {
      alert.setAttribute('duration', duration.toString())
    }
    alert.setAttribute('type', type)
    alert.setAttribute('is-floating', 'true')
    alert.innerText = message
    document.body.appendChild(alert)
  }
}
