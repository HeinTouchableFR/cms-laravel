import { closest } from '@functions/dom'
import { jsonFetch } from '@functions/api'

export default class AjaxDelete {
  /**
   * Défini le custom élément
   */
  static defineElement(name: string = 'ajax-delete') {
    class AjaxDeleteElement extends HTMLElement {
      connectedCallback() {
        this.addEventListener('click', async e => {
          e.preventDefault()

          if (
            this.getAttribute('noconfirm') === null &&
            !confirm('Voulez vous vraiment effectuer cette action ?')
          ) {
            return
          }

          // On affiche le loader
          const target = this.getAttribute('target')
          const parent = target ? closest(this, target) : this.parentNode
          const loader = document.createElement('loader-overlay')
          parent.style.position = 'relative'
          parent.appendChild(loader)

          // On fait l'appel
          try {
            const url = this.getAttribute('url')
            if (url) {
              await jsonFetch(url, {
                method: 'DELETE',
              })
              //@ts-ignore
              loader.hide()
              parent.remove()
            }
          } catch (e) {
            //@ts-ignore
            loader.hide()
            const alert = document.createElement('alert-floating')
            //@ts-ignore
            alert.innerHTML = e.detail
            document.body.appendChild(alert)
          }
        })
      }
    }
    customElements.define(name, AjaxDeleteElement)
  }
}
