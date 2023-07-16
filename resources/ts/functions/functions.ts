import { SyntheticEvent } from 'react'
import { Folder } from '@/components/filemanager/types'

export function prevent(callback?: Function) {
  if (!callback) {
    return
  }
  return (e: SyntheticEvent) => {
    e.preventDefault()
    callback(e)
  }
}

export function preventPropagation(callback?: Function) {
  if (!callback) {
    return
  }
  return (e: SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
    callback(e)
  }
}

const ko = Math.pow(2, 10)

function ceil(n: number, decimals: number) {
  return Math.ceil(n * Math.pow(10, decimals)) / Math.pow(10, decimals)
}

/**
 * Convertit une taille de fichier en valeur humaine
 */
export function human(size: number) {
  let k = size / ko
  let unit = 'k'
  if (k > ko) {
    k = k / ko
    unit = 'M'
  }
  k = ceil(k, k > 10 ? 0 : 1)
  return `${k}${unit}`
}

export function uniq(arr: Folder[]) {
  return arr.filter((value, index) => arr.indexOf(value) === index)
}
