export default class NavTabs {
  /**
   * Défini le custom élément
   */
  static defineElement(name: string = 'nav-tabs') {
    class NavTabsElement extends HTMLElement {
      constructor() {
        super()
        this.onHashChange = this.onHashChange.bind(this)
      }

      connectedCallback() {
        this.setAttribute('role', 'tablist')
        const tabs = Array.from(this.children)
        const hash = window.location.hash.replace('#', '')
        let currentTab = tabs[0]

        tabs.forEach((tab, i) => {
          const id =
            tab.tagName === 'A'
              ? tab.getAttribute('href')?.replace('#', '')
              : tab.getAttribute('aria-controls')
          const tabPanel = document.getElementById(id || '')

          // Should the element be the current element ?
          if (tab.getAttribute('aria-selected') === 'true' && hash === '') {
            currentTab = tab
          }
          if (id === hash) {
            currentTab = tab
          }

          // Extra attributes to improve accessibility
          tab.setAttribute('role', 'tab')
          tab.setAttribute('aria-selected', 'false')
          tab.setAttribute('tabindex', '-1')
          tab.setAttribute('aria-controls', id || '')
          tab.getAttribute('id') || tab.setAttribute('id', 'tab-' + id)
          tabPanel?.setAttribute('role', 'tabPanel')
          tabPanel?.setAttribute(
            'aria-labelledby',
            tab.getAttribute('id') || '',
          )
          tabPanel?.setAttribute('hidden', 'hidden')
          tabPanel?.setAttribute('tabindex', '0')

          // Keyboard navigation (for accessibility purpose)
          tab.addEventListener('keyup', e => {
            let index: number | null = null
            if ((e as KeyboardEvent).key === 'ArrowRight') {
              index = i === tabs.length - 1 ? 0 : i + 1
            } else if ((e as KeyboardEvent).key === 'ArrowLeft') {
              index = i === 0 ? tabs.length - 1 : i - 1
            } else if ((e as KeyboardEvent).key === 'Home') {
              index = 0
            } else if ((e as KeyboardEvent).key === 'End') {
              index = tabs.length - 1
            }
            if (index !== null) {
              this.activate(tabs[index])
              ;(tabs[index] as HTMLElement)?.focus()
            }
          })
          // Mouse control
          tab.addEventListener('click', e => {
            e.preventDefault()
            this.activate(tab, tab.tagName === 'A')
          })
        })

        window.addEventListener('hashchange', this.onHashChange)

        this.activate(currentTab, false)
        if (currentTab?.getAttribute('aria-controls') === hash) {
          window.requestAnimationFrame(() => {
            currentTab?.scrollIntoView({
              behavior: 'smooth',
            })
          })
        }
      }

      disconnectedCallback() {
        window.removeEventListener('hashchange', this.onHashChange)
      }

      onHashChange() {
        const tab = Array.from(this.children).find(
          tab => tab.getAttribute('href') === window.location.hash,
        )
        if (tab !== undefined) {
          this.activate(tab)
          document.querySelector(window.location.hash)?.scrollIntoView({
            behavior: 'smooth',
          })
        }
      }

      activate(tab: Element | undefined, changeHash = true) {
        const currentTab = this.querySelector('[aria-selected="true"]')
        if (currentTab !== null) {
          const tabPanel = document.getElementById(
            currentTab.getAttribute('aria-controls') || '',
          )
          currentTab.setAttribute('aria-selected', 'false')
          currentTab.setAttribute('tabindex', '-1')
          tabPanel?.setAttribute('hidden', 'hidden')
        }
        const id = tab?.getAttribute('aria-controls')
        const tabPanel = document.getElementById(id || '')
        tab?.setAttribute('aria-selected', 'true')
        tab?.setAttribute('tabindex', '0')
        tabPanel?.removeAttribute('hidden')
        if (changeHash) {
          window.history.replaceState({}, '', '#' + id)
        }
      }
    }

    customElements.define(name, NavTabsElement)
  }
}
