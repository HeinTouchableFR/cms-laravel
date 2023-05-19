/**
 * Debounce un callback
 */
export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  wait: number,
) => {
  let timeout: ReturnType<typeof setTimeout> | null = null

  const debounced = (...args) => {
    if (timeout !== null) {
      clearTimeout(timeout)
      timeout = null
    }
    timeout = setTimeout(() => func(...args), wait)
  }

  return debounced as (...args) => ReturnType<F>
}

/**
 * Throttle un callback
 */
export function throttle<Args extends unknown[]>(
  fn: (...args: Args) => void,
  cooldown: number,
) {
  let lastArgs: Args | undefined

  const run = () => {
    if (lastArgs) {
      fn(...lastArgs)
      lastArgs = undefined
    }
  }

  const throttled = (...args: Args) => {
    const isOnCooldown = !!lastArgs

    lastArgs = args

    if (isOnCooldown) {
      return
    }

    window.setTimeout(run, cooldown)
  }

  return throttled
}

/**
 * Version asynchrone du timeout
 */
export function wait(duration: number) {
  return new Promise(resolve => {
    window.setTimeout(resolve, duration)
  })
}
