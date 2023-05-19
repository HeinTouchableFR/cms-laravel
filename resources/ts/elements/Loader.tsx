import { createRoot } from 'react-dom/client'
import Loader from '@components/Loader'

export default class Loader {
  /**
   * Défini le custom élément
   */
  static defineElement(name: string = 'loader-element') {
    class LoaderElement extends HTMLElement {
      constructor() {
        super()
      }

      connectedCallback() {
        const dots = parseInt(this.getAttribute('dots') || '8')
        const strokeWidth = parseInt(this.getAttribute('strokeWidth') || '4')
        const root = createRoot(this)
        root.render(<Loader dots={dots} strokeWidth={strokeWidth} />)
      }
    }
    customElements.define(name, LoaderElement)
  }
}
