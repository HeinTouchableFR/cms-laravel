import { TranslationKey } from '@/components/Editor/types'
import { Editor } from '@/elements/Editor'

export function t(key: TranslationKey): string {
  //@ts-ignore
  return Editor.i18n[key]
}
