import { TranslationKey } from '@/components/Editor/types'
import { EditorComponent } from '@/components/Editor/editor'

export function t(key: TranslationKey): string {
  //@ts-ignore
  return EditorComponent.i18n[key]
}
