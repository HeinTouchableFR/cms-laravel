export default class Dropdown {
  /**
   * Défini le custom élément
   */
  static defineElement(name: string = 'drop-down') {
    class DropdownElement extends HTMLElement {
      ul: HTMLUListElement | null
      button: HTMLButtonElement | null
      index: number
      isOpen: boolean

      constructor() {
        super()
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.onKeyUp = this.onKeyUp.bind(this)
        this.onKeyDown = this.onKeyDown.bind(this)
        this.onBlur = this.onBlur.bind(this)
        this.ul = null
        this.button = null
        this.index = 0
        this.isOpen = false
      }

      connectedCallback() {
        const button = this.querySelector('button')
        const ul = this.querySelector('ul')
        const id = this.getAttribute('id')

        if (button) {
          button.setAttribute('aria-haspopup', 'listbox')
          button.setAttribute('id', `${id}button`)
          button.setAttribute('aria-controls', `${id}list`)
          button.addEventListener('click', this.toggleMenu)
        }

        if (ul) {
          ul.setAttribute('id', `${id}list`)
          ul.setAttribute('aria-labelledby', `${id}label`)
          ul.setAttribute('tabindex', '-1')
          ul.setAttribute('role', 'listbox')
          ul.addEventListener('keydown', this.onKeyDown)
          ul.addEventListener('blur', this.onBlur)
          ul.querySelectorAll('a').forEach(a =>
            a.setAttribute('tabindex', '-1'),
          )
          Array.from(ul.children).forEach((li, index) => {
            li.setAttribute('role', 'option')
            li.setAttribute('id', `${id}-index${index}`)
            if (li.getAttribute('aria-selected') === 'true') {
              this.index = index
            }
          })
        }

        document.addEventListener('keyup', this.onKeyUp)

        this.ul = ul
        this.button = button
        this.close()
      }

      disconnectedCallback() {
        document.removeEventListener('keyup', this.onKeyUp)
      }

      toggleMenu(e: Event) {
        e.preventDefault()
        if (this.isOpen) {
          this.close()
        } else {
          this.open()
        }
      }

      onKeyUp(e: KeyboardEvent) {
        if (e.key === 'Escape' && this.isOpen && this.button) {
          this.button.focus()
          this.close()
        }
      }

      onKeyDown(e: KeyboardEvent) {
        if (e.key === 'ArrowDown' && this.isOpen) {
          e.preventDefault()
          this.select(this.index + 1)
        }
        if (e.key === 'ArrowUp' && this.isOpen) {
          e.preventDefault()
          this.select(this.index - 1)
        }
        if (e.key === 'Home' && this.isOpen) {
          e.preventDefault()
          this.select(0)
        }
        if (e.key === 'End' && this.isOpen && this.ul) {
          e.preventDefault()
          this.select(this.ul.children.length - 1)
        }
        if (e.key === 'Enter' && this.ul) {
          const li = this.ul.children[this.index]
          if (!li) {
            return
          }
          const a = li.querySelector('a')
          if (a) {
            window.location.href = a.getAttribute('href') || '#'
          }
        }
      }

      onBlur(e: any) {
        if (this.ul && !this.ul.contains(e.relatedTarget)) {
          this.close()
        } else {
          e.preventDefault()
          e.stopPropagation()
        }
      }

      open() {
        this.button?.setAttribute('aria-expanded', 'true')
        this.ul?.removeAttribute('aria-hidden')
        this.ul?.removeAttribute('hidden')
        this.isOpen = true
        this.ul?.focus()
        this.select(this.index || 0)
      }

      close() {
        this.button?.removeAttribute('aria-expanded')
        this.ul?.setAttribute('aria-hidden', 'true')
        this.ul?.setAttribute('hidden', 'hidden')
        this.isOpen = false
      }

      select(index: number) {
        if (this.index !== undefined) {
          const current = this.ul?.children[this.index]
          current && current.removeAttribute('aria-selected')
        }
        if (index < 0 && this.ul) {
          index = this.ul.children.length - 1
        } else if (this.ul && index >= this.ul.children.length) {
          index = 0
        }
        const current = this.ul?.children[index]
        if (current) {
          current.setAttribute('aria-selected', 'true')
          this.ul?.setAttribute('aria-activedescendant', current.id)
        }
        this.index = index
      }
    }

    customElements.define(name, DropdownElement)
  }
}
