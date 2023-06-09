export default class LoaderOverlay {
  /**
   * Défini le custom élément
   */
  static defineElement(name: string = 'loader-overlay') {
    class LoaderOverlayElement extends HTMLElement {
      constructor() {
        super()
      }

      connectedCallback() {
        this.style.position = 'absolute'
        this.style.left = '0'
        this.style.right = '0'
        this.style.bottom = '0'
        this.style.top = '0'
        this.style.margin = '0'
        this.style.padding = '0'
        this.style.zIndex = '10'
        this.style.display = 'flex'
        this.style.alignItems = 'center'
        this.style.justifyContent = 'center'
        this.style.transition = 'opacity .3s'
        this.style.background = 'rgba(255,255,255,.8)'
        // On crée le loader
        if (!customElements.get('loader-element')) {
          // preactCustomElement('loader-element', Loader, null, null)
        }
        const loader = document.createElement('loader-element')
        loader.style.width = '20px'
        loader.style.height = '20px'

        this.appendChild(loader)
      }

      hide() {
        this.style.opacity = '0'
      }
    }

    customElements.define(name, LoaderOverlayElement)
  }
}
