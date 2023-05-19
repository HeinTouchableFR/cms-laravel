import Sortable from 'sortablejs'
import { jsonFetch } from '@functions/api'

export default class ItemSorter {
  /**
   * Défini le custom élément
   */
  static defineElement(name: string = 'item-sorter') {
    type Item = {
      id: { toString: () => string }
      url: string | URL
      name: any
      children: any[]
    }

    class ItemSorterElement extends HTMLElement {
      sortables: any[]
      sortableOptions: {
        group: string
        animation: number
        fallbackOnBody: boolean
        swapThreshold: number
        preventOnFilter: boolean
        onEnd: (e: any) => Promise<void>
      }
      list: HTMLUListElement | undefined

      constructor() {
        super()
        this.sortables = []
        this.sortableOptions = {
          group: 'nested',
          animation: 150,
          fallbackOnBody: true,
          swapThreshold: 0.65,
          preventOnFilter: false,
          onEnd: this.persist.bind(this),
        }
      }

      connectedCallback() {
        this.list = this.renderList()
        this.appendChild(this.list)
        this.bindSortable()
      }

      renderList() {
        const items = JSON.parse(this.getAttribute('items') || '')
        const ul = document.createElement('ul')
        ul.setAttribute('class', 'sortable-items stack')
        items.forEach((i: Item) => ul.appendChild(createLi(i)))
        return ul
      }

      /**
       * Greffer le comportement sortablejs
       */
      bindSortable() {
        if (this.list)
          this.sortables = Array.from(this.list.querySelectorAll('ul')).map(
            u => {
              return new Sortable(u, this.sortableOptions)
            },
          )
        this.sortables.push(
          new Sortable(this.list, {
            ...this.sortableOptions,
          }),
        )
      }

      disconnectedCallback() {
        this.sortables.forEach(sortable => sortable.destroy())
        if (this.list?.parentElement) {
          this.list?.parentElement.removeChild(this.list)
        }
      }

      async persist(e: {
        to: {
          dataset: { parent: null }
          children: Iterable<unknown> | ArrayLike<unknown>
        }
        item: HTMLElement
      }) {
        const parentId = e.to.dataset.parent || null
        const positions = Array.from(e.to.children).map((li, k) => {
          return {
            //@ts-ignore
            id: li.dataset.id,
            position: k,
            parent: parentId,
          }
        })
        const loader = showLoader(e.item)
        await jsonFetch(this.getAttribute('endpoint') || '', {
          method: 'POST',
          body: JSON.stringify({
            positions,
          }),
        })
        hideLoader(loader)
      }
    }

    customElements.define(name, ItemSorterElement)

    function createLi(item: Item) {
      const li = document.createElement('li')
      li.classList.add('sortable-item')
      li.setAttribute('class', 'sortable-item')
      li.setAttribute('data-id', item.id.toString())
      li.innerHTML = `
    <a href="${item.url}">${item.name}</a>
    <button type="button" class="sortable-item__delete">
      <svg class="icon icon-add">
        <use xlink:href="/sprite.svg#delete"></use>
      </svg>
    </button>
  `
      li.querySelector('button')?.addEventListener('click', async e => {
        if (confirm('Sûr ?')) {
          e.preventDefault()
          const loader = showLoader(li)
          await jsonFetch(item.url, { method: 'DELETE' })
          hideLoader(loader)
          li.parentElement?.removeChild(li)
        }
      })
      const ul = document.createElement('ul')
      ul.setAttribute('data-parent', item.id.toString())
      if (item.children.length > 0) {
        item.children.forEach(i => ul.appendChild(createLi(i)))
      }
      li.appendChild(ul)
      return li
    }

    function showLoader(item: HTMLElement) {
      const loader = document.createElement('loader-element')
      loader.classList.add('sortable-item__loader')
      item.insertAdjacentElement('afterbegin', loader)
      return loader
    }

    function hideLoader(loader: HTMLElement) {
      loader.parentElement?.removeChild(loader)
    }
  }
}
