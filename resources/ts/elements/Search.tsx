import { createRoot } from 'react-dom/client'
import { SearchInput } from '@components/SearchInput'

export default class Search {
  /**
   * Défini le custom élément
   */
  static defineElement(inputName: string = 'search-input') {
    class SearchInputElement extends HTMLElement {
      constructor() {
        super()
      }

      connectedCallback() {
        const root = createRoot(this)
        root.render(<SearchInput />)
      }
    }

    customElements.define(inputName, SearchInputElement)
  }
}
