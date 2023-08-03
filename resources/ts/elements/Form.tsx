import { createRoot } from 'react-dom/client'
import { Form as FormComponent } from '@/components/Form/Form/Form'

export default class Field {
  /**
   * Défini le custom élément
   */
  static defineElement(name: string = 'form-field') {
    type Props = {
      type?: string
    }

    class FieldElement extends HTMLElement {
      type: any

      constructor({ type }: Props = {}) {
        super()
        this.type = type
      }

      connectedCallback() {
        const label = this.innerHTML
        const name = this.getAttribute('name') || ''
        const required = this.getAttribute('is-required')
        const wrapperClass = this.getAttribute('wrapperClass') || ''
        this.type = this.type || this.getAttribute('type')
        const root = createRoot(this)
        root.render(
          <FormComponent.FormField
            type={this.type}
            name={name}
            required={!!required}
            wrapperClass={wrapperClass}
            children={label}
          />,
        )
      }
    }

    customElements.define(name, FieldElement)
  }
}
