import { AlertElement } from '@heintouchable/ui'
import {
  useEffect,
  useState,
  useCallback,
  useRef,
  useMemo,
  RefObject,
} from 'react'
import { ApiError, jsonFetch } from './api'
import { strToDom } from './dom'
import { debounce } from './timers'
import { uniqId } from './string'

/**
 * Alterne une valeur
 */
export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue)
  return [value, useCallback(() => setValue(v => !v), []), setValue] as const
}

/**
 * Valeur avec la possibilité de push un valeur supplémentaire
 */
export function usePrepend(initialValue = []) {
  const [value, setValue] = useState(initialValue)
  return [
    value,
    // @ts-ignore
    useCallback(item => {
      // @ts-ignore
      setValue(v => [item, ...v])
    }, []),
  ]
}

/**
 * Hook d'effet pour détecter le clique en dehors d'un élément
 */
export function useClickOutside(ref: any, cb: () => void) {
  useEffect(() => {
    if (cb === null) {
      return
    }
    const escCb = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && ref.current) {
        cb()
      }
    }
    const clickCb = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target)) {
        cb()
      }
    }
    document.addEventListener('click', clickCb)
    document.addEventListener('keyup', escCb)
    return function cleanup() {
      document.removeEventListener('click', clickCb)
      document.removeEventListener('keyup', escCb)
    }
  }, [ref, cb])
}

/**
 * Focus le premier champs dans l'élément correspondant à la ref
 */
export function useAutofocus(ref: any, focus: boolean) {
  useEffect(() => {
    if (focus && ref.current) {
      const input = ref.current.querySelector('input, textarea')
      if (input) {
        input.focus()
      }
    }
  }, [focus, ref])
}

/**
 * Hook faisant un appel fetch et flash en cas d'erreur / succès
 * @return {{data: Object|null, fetch: fetch, loading: boolean, done: boolean}}
 */
export function useJsonFetchOrFlash(url: string, params = {}) {
  const [state, setState] = useState({
    loading: false,
    data: null,
    done: false,
  })
  const fetch = useCallback(
    async (localUrl: string, localParams: string) => {
      setState(s => ({ ...s, loading: true }))
      try {
        const response = await jsonFetch(localUrl || url, localParams || params)
        setState(s => ({ ...s, loading: false, data: response, done: true }))
        return response
      } catch (e) {
        const result = (e as Error).message
        if (e instanceof ApiError) {
          AlertElement.flash(e.name, 'danger', 4)
        } else {
          AlertElement.flash(result, 'danger', 4)
        }
      }
      setState(s => ({ ...s, loading: false }))
    },
    [url, params],
  )
  return { ...state, fetch }
}

/**
 * useEffect pour une fonction asynchrone
 */
export function useAsyncEffect(fn: () => void, deps: any[] = []) {
  useEffect(() => {
    fn()
  }, deps)
}

export const PROMISE_PENDING = 0
export const PROMISE_DONE = 1
export const PROMISE_ERROR = -1

/**
 * Décore une promesse et renvoie son état
 */
export function usePromiseFn<Args extends any[]>(fn: (...args: Args) => void) {
  const [state, setState] = useState(-10)
  const resetState = useCallback(() => {
    setState(-10)
  }, [])

  const wrappedFn = useCallback(
    async <Args extends any[]>(...args: Args) => {
      setState(PROMISE_PENDING)
      try {
        // @ts-ignore
        await fn(...args)
        setState(PROMISE_DONE)
      } catch (e) {
        setState(PROMISE_ERROR)
        throw e
      }
    },
    [fn],
  )

  return [state, wrappedFn, resetState]
}

/**
 * Hook permettant de détecter quand un élément devient visible à l'écran
 *
 * @export
 * @returns {object} visibility
 */
export function useVisibility(node: any, once = true, options = {}) {
  const [visible, setVisibilty] = useState(false)
  const isIntersecting = useRef()

  // @ts-ignore
  const handleObserverUpdate = entries => {
    const ent = entries[0]

    if (isIntersecting.current !== ent.isIntersecting) {
      setVisibilty(ent.isIntersecting)
      isIntersecting.current = ent.isIntersecting
    }
  }

  const observer =
    once && visible
      ? null
      : new IntersectionObserver(handleObserverUpdate, options)

  useEffect(() => {
    const element = node instanceof HTMLElement ? node : node.current

    if (!element || observer === null) {
      return
    }

    observer.observe(element)

    return function cleanup() {
      observer.unobserve(element)
    }
  })

  return visible
}

let favIconBadge: HTMLElement | ChildNode | null = null

export function useNotificationCount(n: never) {
  useAsyncEffect(async () => {
    if (favIconBadge === null) {
      if (n === 0) {
        return
      }
      // @ts-ignore
      //await import('favicon-badge')
      // @ts-ignore
      favIconBadge = strToDom(
        `<favicon-badge src="${document
          .querySelector('link[rel=icon]')
          ?.getAttribute('href')}" badge="true" badgeSize="6"/>`,
      )
      // @ts-ignore
      document.head.appendChild(favIconBadge)
      return
    }
    // @ts-ignore
    favIconBadge.setAttribute('badge', n === 0 ? 'false' : 'true')
  }, [n])
}

export function useEffectDebounced(
  callback: Function,
  deps: any[],
  time: number,
) {
  const callbackRef = useRef<Function>(callback)
  const debouncedCallback = useMemo(() => {
    return debounce((...args: any[]) => callbackRef.current(...args), time)
  }, [])
  callbackRef.current = callback

  useEffect(() => {
    debouncedCallback()
  }, deps)
}

/**
 * Delay the visibility change for a component
 */
export function useStateDelayed(
  originalState: boolean,
  duration = 700,
  onlyOnFalse = true,
): boolean {
  const [delayedState, setDelayedState] = useState(originalState)
  useEffect(() => {
    if (originalState && onlyOnFalse) {
      setDelayedState(originalState)
    } else {
      const timer = window.setTimeout(() => setDelayedState(originalState), 700)
      return () => window.clearTimeout(timer)
    }
  }, [originalState])

  return delayedState
}

type EventNames = keyof HTMLElementEventMap

const stopPropagation = (e: Event) => e.stopPropagation()

export function useStopPropagation(
  ref: RefObject<HTMLElement>,
  eventNames: EventNames[],
) {
  useEffect(() => {
    if (!ref.current) {
      return
    }
    eventNames.map(eventName => {
      ref.current!.addEventListener(eventName, stopPropagation)
    })
    return () => {
      if (!ref.current) {
        return
      }
      eventNames.map(eventName => {
        ref.current!.removeEventListener(eventName, stopPropagation)
      })
    }
  })
}

export function useUniqId(prefix: string = ''): string {
  return useMemo(() => prefix + uniqId(), [])
}

export function useUpdateEffect(cb: Function, deps: any[]): void {
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    return cb()
  }, deps)
}
