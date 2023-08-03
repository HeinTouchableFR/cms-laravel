export default class InputAttachment {
  /**
   * Défini le custom élément
   */
  static defineElement(name: string = 'input-attachment') {
    class InputAttachmentElement extends HTMLInputElement {
      container: any
      preview: any
      overwrite: boolean | undefined

      get attachmentId() {
        return this.value
      }

      connectedCallback() {
        const preview = this.getAttribute('preview')
        this.insertAdjacentHTML(
          'afterend',
          `
                <div class="input-attachment">
                <div class="input-attachment__preview" style="background-image:url(${
                  preview || ''
                })"></div>
                </div>
                `,
        )
        this.style.display = 'none'
        this.container = this.parentElement?.querySelector('.input-attachment')
        this.container.addEventListener(
          'dragenter',
          this.onDragEnter.bind(this),
        )
        this.container.addEventListener(
          'dragleave',
          this.onDragLeave.bind(this),
        )
        this.container.addEventListener('dragover', this.onDragOver)
        this.container.addEventListener('drop', this.onDrop.bind(this))
        this.container.addEventListener('click', this.onClick.bind(this))
        this.preview = this.container.querySelector(
          '.input-attachment__preview',
        )
        this.overwrite = this.getAttribute('overwrite') !== null
      }

      onDragEnter(e: Event) {
        e.preventDefault()
        this.container.classList.add('is-hovered')
      }

      onDragLeave(e: Event) {
        e.preventDefault()
        this.container.classList.remove('is-hovered')
      }

      onDragOver(e: Event) {
        e.preventDefault()
      }

      async onDrop(e: any) {
        e.preventDefault()
        this.container.classList.add('is-hovered')
        const loader = document.createElement('loader-element')
        loader.classList.add('input-attachment__loader')
        this.container.appendChild(loader)
        const files = e.dataTransfer.files
        if (files.length === 0) return false
        const data = new FormData()
        data.append('file', files[0])
        let url = this.getAttribute('data-endpoint')
        if (this.attachmentId !== '' && this.overwrite) {
          url = `${url}/${this.attachmentId}`
        }
        if (url) {
          const response = await fetch(url || '', {
            method: 'POST',
            body: data,
          })
          const responseData = await response.json()
          if (response.ok) {
            this.setAttachment(responseData)
          } else {
            const alert = document.createElement('alert-message')
            alert.innerHTML = "Impossible d'envoyer l'image"
            document.querySelector('.dashboard')?.appendChild(alert)
          }
        }
        this.container.removeChild(loader)
        this.container.classList.remove('is-hovered')
      }

      onClick(e: any) {
        e.preventDefault()
        const modal = document.createElement('modal-dialog')
        modal.setAttribute('overlay-close', 'overlay-close')
        const fm = document.createElement('file-manager')
        const endpoint = this.getAttribute('data-endpoint')
        if (endpoint) fm.setAttribute('data-endpoint', endpoint)
        modal.appendChild(fm)
        fm.addEventListener('file', (e: any) => {
          this.setAttachment(e.detail)
          modal.close()
        })
        document.body.appendChild(modal)
      }

      setAttachment(attachment: { url: any; id: string }) {
        this.preview.style.backgroundImage = `url(${attachment.url})`
        this.value = attachment.id
        const changeEvent = document.createEvent('HTMLEvents')
        changeEvent.initEvent('change', false, true)
        this.dispatchEvent(changeEvent)
        this.dispatchEvent(
          new CustomEvent('attachment', { detail: attachment }),
        )
      }
    }

    customElements.define(name, InputAttachmentElement, { extends: 'input' })
  }
}
