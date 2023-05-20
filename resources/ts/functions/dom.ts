import htm from "htm/mini";

/**
 * Trouve la position de l'élément par rapport au haut de la page de manière recursive
 */
export function offsetTop(element: any, parent: HTMLElement | null = null) {
  let top = element.offsetTop
  while ((element = element.offsetParent)) {
    if (parent === element) {
      return top
    }
    top += element.offsetTop
  }
  return top
}

type Attibutes = {
  [key: string]: any
}

/**
 * Crée un élément HTML
 * Cette fonction ne couvre que les besoins de l'application, jsx-dom pourrait remplacer cette fonction
 * @return HTMLElement
 */
export function createElement(
  tagName: string | ((attributes: Attibutes) => {}),
  attributes: Attibutes = {},
  ...children: any[]
) {
  if (typeof tagName === 'function') {
    return tagName(attributes)
  }

  const svgTags = ['svg', 'use', 'path', 'circle', 'g']
  // On construit l'élément
  const e = !svgTags.includes(tagName)
    ? document.createElement(tagName)
    : document.createElementNS('http://www.w3.org/2000/svg', tagName)

  // On lui associe les bons attributs
  for (let k of Object.keys(attributes || {})) {
    if (typeof k === 'number') {
      k = k.toString()
    }
    if (typeof attributes[k] === 'function' && k.startsWith('on')) {
      e.addEventListener(k.substr(2).toLowerCase(), attributes[k])
    } else if (k === 'xlink:href') {
      e.setAttributeNS('http://www.w3.org/1999/xlink', 'href', attributes[k])
    } else {
      e.setAttribute(k, attributes[k])
    }
  }

  // On aplatit les enfants
  children = children.reduce((acc, child) => {
    return Array.isArray(child) ? [...acc, ...child] : [...acc, child]
  }, [])

  // On ajoute les enfants à l'élément
  for (const child of children) {
    if (typeof child === 'string') {
      e.appendChild(document.createTextNode(child))
    } else if (child instanceof HTMLElement || child instanceof SVGElement) {
      e.appendChild(child)
    } else {
      console.error("Impossible d'ajouter l'élément", child, typeof child)
    }
  }
  return e
}

/**
 * CreateElement version Tagged templates
 * @type {(strings: TemplateStringsArray, ...values: any[]) => (HTMLElement[] | HTMLElement)}
 */
export const html = htm.bind(createElement)

/**
 * Transform une chaine en élément DOM
 */
export function strToDom(str: string) {
  return document.createRange().createContextualFragment(str.trim())
    .firstChild as HTMLElement
}

/**
 * @return {null|HTMLElement}
 */
export function closest(element: any, selector: string) {
  for (; element && element !== document; element = element.parentNode) {
    if (element.matches(selector)) return element
  }
  return null
}

/**
 * @return {HTMLElement}
 */
export function $(selector: string) {
  return document.querySelector(selector)
}

/**
 * @return {HTMLElement[]}
 */
export function $$(selector: string) {
  return Array.from(document.querySelectorAll(selector))
}

/**
 * Génère une classe à partir de différentes variables
 */
export function classNames(...classnames: string[]) {
  return classnames.filter(classname => classname !== null).join(' ')
}

/**
 * Convertit les données d'un formulaire en objet JavaScript
 * @return {{[p: string]: string}}
 */
export function formDataToObj(form: HTMLFormElement) {
  return Object.fromEntries(new FormData(form))
}
