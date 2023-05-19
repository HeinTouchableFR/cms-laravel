import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export class Lightbox {
  element: HTMLDivElement
  images: string[]
  url: string | null
  static init(element: string) {
    const containers = document.querySelectorAll<HTMLElement>(element)
    containers.forEach(container => {
      const links = Array.from(container.querySelectorAll('.lightbox__link'))
      const gallery = links.map(link => link.getAttribute('href') ?? '#')
      links.forEach(link =>
        link.addEventListener('click', e => {
          e.preventDefault()
          const url =
            (e.currentTarget as HTMLElement).getAttribute('href') ?? ''
          new Lightbox(url, gallery)
        }),
      )
    })
  }

  constructor(url: string, images: string[]) {
    this.element = this.buildDOM(url)
    this.url = null
    this.images = images
    this.loadImage(url)
    this.onKeyUp = this.onKeyUp.bind(this)
    document.body.appendChild(this.element)
    disableBodyScroll(this.element)
    document.addEventListener('keyup', this.onKeyUp)
  }

  buildDOM(url: string) {
    const dom = document.createElement('div')
    dom.classList.add('lightbox')
    const lightboxClose = document.createElement('button')
    lightboxClose.classList.add('lightbox__close')
    const lightboxNext = document.createElement('button')
    lightboxNext.classList.add('lightbox__next')
    const lightboxPrev = document.createElement('button')
    lightboxPrev.classList.add('lightbox__prev')
    const lightboxContainer = document.createElement('div')
    lightboxContainer.classList.add('lightbox__container')

    lightboxClose.addEventListener('click', this.close.bind(this))
    lightboxNext.addEventListener('click', this.next.bind(this))
    lightboxPrev.addEventListener('click', this.prev.bind(this))

    dom.appendChild(lightboxClose)
    dom.appendChild(lightboxNext)
    dom.appendChild(lightboxPrev)
    dom.appendChild(lightboxContainer)

    return dom
  }

  loadImage(url: string) {
    this.url = null
    const image = new Image()
    const container = this.element.querySelector('.lightbox__container')
    if (!container) {
      return
    }
    const loader = document.createElement('loader-element')
    container.innerHTML = ''
    container.appendChild(loader)
    image.onload = () => {
      container.removeChild(loader)
      container.appendChild(image)
      this.url = url
    }
    image.src = url
  }

  onKeyUp(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this.close(e)
    } else if (e.key === 'ArrowLeft') {
      this.prev(e)
    } else if (e.key === 'ArrowRight') {
      this.next(e)
    }
  }

  close(e: MouseEvent | KeyboardEvent) {
    e.preventDefault()
    this.element.classList.add('fadeOut')
    enableBodyScroll(this.element)
    window.setTimeout(() => {
      if (!this.element.parentElement) {
        return
      }
      this.element.parentElement.removeChild(this.element)
    }, 500)
    document.removeEventListener('keyup', this.onKeyUp)
  }

  next(e: MouseEvent | KeyboardEvent) {
    e.preventDefault()
    let i = this.images.findIndex(image => image === this.url)
    if (i === this.images.length - 1) {
      i = -1
    }
    this.loadImage(this.images[i + 1])
  }

  prev(e: MouseEvent | KeyboardEvent) {
    e.preventDefault()
    let i = this.images.findIndex(image => image === this.url)
    if (i === 0) {
      i = this.images.length
    }
    this.loadImage(this.images[i - 1])
  }
}
