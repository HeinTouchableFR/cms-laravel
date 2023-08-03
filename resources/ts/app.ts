import '../css/app.scss'
import '@/elements/index'

import Turbolinks from 'turbolinks'
import '@/modules/scrollreveal'
import { registerWindowHeightCSS } from '@/modules/window'
import { clearAllBodyScrollLocks } from 'body-scroll-lock'
import { registerCarousel } from '@/modules/Carousel'
import { registerSlider } from '@/modules/Slider'
import { Lightbox } from '@/modules/Lightbox'
import { $ } from '@/functions/dom'
import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'time-ago': TimeAgoProps
      'alert-message': AlertMessageProps
      'skeleton-box': SkeletonBoxProps
      'lottie-player': LottiePlayerProps
      'modal-dialog': ModalDialogProps
    }
  }

  interface Window {
    plausible: any
    cms: any
    hljs: any
    editor: any
  }
}

interface TimeAgoProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  time: number
}

interface AlertMessageProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  type?: string
  message?: string
  duration?: number
  isFloating?: boolean
  onClose?: () => void
  className?: string
}

interface SkeletonBoxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  text?: string
  width?: string
  height?: string
  rounded?: boolean
  className?: string
}

interface LottiePlayerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  src?: string
  autoplay?: boolean
  loop?: boolean
}

interface ModalDialogProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  onClose?: () => void
  'overlay-close'?: boolean
}

registerWindowHeightCSS()
let isFirstRender = true

function isInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

document.addEventListener('turbolinks:load', () => {
  if (!isFirstRender && window.plausible) {
    window.plausible('pageview')
  }
  isFirstRender = false
})

document.addEventListener('turbolinks:load', () => {
  // Blocs
  registerCarousel()
  registerSlider()
  Lightbox.init('.gallery')

  const header = $('#header')
  if (header) {
    const burgerButton = $('#js-burger')
    burgerButton?.addEventListener('click', () => {
      const lists = header.querySelectorAll('ul')
      const currentState = burgerButton.getAttribute('data-state')

      if (!currentState || currentState === 'closed') {
        burgerButton.setAttribute('data-state', 'opened')
        burgerButton.setAttribute('aria-expanded', 'true')
        lists.forEach(ul => {
          ul.setAttribute('data-state', 'opened')
          ul.setAttribute('aria-expanded', 'true')
        })
      } else {
        burgerButton.setAttribute('data-state', 'closed')
        burgerButton.setAttribute('aria-expanded', 'false')
        lists.forEach(ul => {
          ul.setAttribute('data-state', 'closed')
          ul.setAttribute('aria-expanded', 'false')
        })
      }
    })
  }
  const items = document.querySelectorAll('img')
  items.forEach(image => {
    if (isInViewport(image)) {
      image.removeAttribute('loading')
    }

    if (image.complete) {
      image.width = image.offsetWidth
      image.height = image.offsetHeight
    }
  })

  clearAllBodyScrollLocks()
  const darkToggle = document.querySelector('#dark-toggle')
  if (darkToggle) {
    darkToggle.addEventListener('click', e => {
      e.stopPropagation()
      e.preventDefault()
      document.body.classList.toggle('dark')
    })
  }
})

document.addEventListener('turbolinks:click', e => {
  const anchorElement = e.target

  const isSamePageAnchor = // @ts-ignore
    anchorElement.hash && // @ts-ignore
    anchorElement.origin === window.location.origin && // @ts-ignore
    anchorElement.pathname === window.location.pathname

  if (isSamePageAnchor) {
    // @ts-ignore
    Turbolinks.controller.pushHistoryWithLocationAndRestorationIdentifier(
      // @ts-ignore
      e.data.url,
      Turbolinks.uuid(),
    )
    e.preventDefault()
    window.dispatchEvent(new Event('hashchange'))
  }
})

Turbolinks.start()
