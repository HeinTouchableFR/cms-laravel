import scriptjs from 'scriptjs'

const lazylangs = [
  'typescript',
  'elixir',
  'less',
  'stylus',
  'scss',
  'sass',
  'yaml',
  'twig',
]

/**
 * Ajoute highlightjs sur les éléments sélectionnés
 *
 * @param {NodeList<HTMLElement>} $codes
 */
function highlight($codes: NodeListOf<HTMLElement>) {
  $codes.forEach(code => {
    if (code.parentNode) {
      ;(code.parentNode as HTMLElement).classList.add('with-syntax')
      let lazy = false
      let cls = code.getAttribute('class') ?? ''
      if (cls === '') {
        cls = 'bash'
      } else {
        cls = (code.getAttribute('class') ?? '').replace('markup', 'bash')
      }
      lazylangs.forEach(lang => {
        if (cls.endsWith(lang)) {
          lazy = true
          scriptjs(
            `//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/languages/${lang}.min.js`,
            () => {
              window.hljs.highlightBlock(code)
            },
          )
        }
      })
      if (lazy === false) {
        window.hljs.highlightBlock(code)
      }
    }
  })
}

/**
 * Détecte et ajoute la coloration syntaxique sur le site
 */
export function bindHighlight(root = document) {
  const $codes = root.querySelectorAll<HTMLElement>('pre code')
  if ($codes.length > 0) {
    if (window.hljs) {
      highlight($codes)
    } else {
      const link = document.createElement('link')
      link.setAttribute('rel', 'stylesheet')
      //@ts-ignore
      document.querySelector('head').appendChild(link)
      scriptjs(
        '//cdnjs.cloudflare.com/ajax/libs/highlight.ts/9.18.1/highlight.min.ts',
        () => {
          window.hljs.configure({ tabReplace: '    ' })
          highlight($codes)
        },
      )
    }
  }
}

document.addEventListener('turbolinks:load', () => {
  bindHighlight()
})
