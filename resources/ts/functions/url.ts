import Turbolinks from 'turbolinks'

/**
 * @return {URLSearchParams}
 */
export function objToSearchParams(obj: { [key: string]: string }) {
  if (obj === undefined || obj === null) {
    return new URLSearchParams()
  }
  const params = new URLSearchParams()
  Object.keys(obj).forEach(k => {
    //@ts-ignore
    params.append(k.toString(), obj[k])
  })
  return params
}

/**
 * Redirect to a specific url using turbolink
 */
export function redirect(url: string) {
  return new Promise(resolve => {
    const onLoad = function () {
      resolve(true)
      document.removeEventListener('turbolinks:load', onLoad)
    }
    document.addEventListener('turbolinks:load', onLoad)
    Turbolinks.visit(url)
  })
}
