type Options = {
  expires?: number
  domain?: string
  path?: string
}

export function cookie(
  name: string,
  value: string = '',
  options: Options = {},
) {
  // On veut lire le cookie
  if (value === undefined) {
    const cookies = document.cookie.split(';')
    for (const cookie of cookies) {
      const [k, v] = cookie.split('=')
      if (k === name) {
        return v
      }
    }
    return null
  }

  // On veut écrire le cookie
  if (value === '') {
    options.expires = -365
  } else {
    value = escape(value)
  }
  if (options.expires) {
    const d = new Date()
    d.setDate(d.getDate() + options.expires)
    value += '; expires=' + d.toUTCString()
  }
  if (options.domain) {
    value += '; domain=' + options.domain
  }
  if (options.path) {
    value += '; path=' + options.path
  }
  document.cookie = name + '=' + value
}
