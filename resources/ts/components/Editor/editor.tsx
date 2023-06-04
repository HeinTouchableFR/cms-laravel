import { Button } from '@/components/Button'
import Icon from '@/components/Icon'
import { Preview } from '@/components/Editor/components/Preview/Preview'
import { EditorComponentData } from '@/components/Editor/types'
import { useData, useUpdateData } from '@/components/Editor/store'
import {
  useStateDelayed,
  useStopPropagation,
  useUpdateEffect,
} from '@/functions/hooks'
import { stringifyFields } from '@/functions/object'
import { useEffect, useMemo, useRef, useState } from 'preact/hooks'
import { useClipboardPaste } from '@/components/Editor/hooks/useClipboardPaste'

type Props = {
  value: EditorComponentData[]
  previewUrl: string
  name: string
  iconsUrl: string
  visible: boolean
  element: Element
  onChange: (v: string) => void
}

export function EditorComponent({
  value,
  previewUrl,
  name,
  element,
  iconsUrl,
  visible: visibleProps,
  onChange,
}: Props) {
  const [skipNextChange, setSkipNextChange] = useState(true) // Skip emitting a change event on the next update (usefull for external changes)
  const updateData = useUpdateData()
  const data = useData()

  const visible = useStateDelayed(visibleProps)
  const handleClose = () => {
    element.dispatchEvent(new Event('close'))
  }
  const doNothing = () => null // React wants handler :(
  // JSON nettoyé
  const cleanedData = useMemo(() => stringifyFields(data), [data])
  // Synchronise l'état du composant avec la prop value
  useUpdateEffect(() => {
    setSkipNextChange(true)
    updateData(value)
  }, [value])

  useClipboardPaste(visible)
  useEffect(() => {
    if (skipNextChange) {
      setSkipNextChange(false)
    } else {
      onChange(cleanedData)
    }
  }, [cleanedData])
  // We want to avoid bubbling change & close event
  const div = useRef<HTMLDivElement>(null)
  useStopPropagation(div, ['change', 'close'])

  if (!visible) {
    return (
      <textarea hidden name={name} value={cleanedData} onChange={doNothing} />
    )
  }

  return (
    <div>
      <div className={`editor`}>
        <div className='editor__sidebar'>
          <div className='editor__sidebar-header'>
            <button
              className='editor__sidebar-header-icon-button'
              type={'button'}
            >
              <Icon name={'cross'} />
            </button>
            <div className='editor__sidebar-header-actions'>
              <button
                className='editor__sidebar-header-icon-button'
                type={'button'}
                aria-label='Utilisez un template'
              >
                <Icon name={'template'} />
              </button>
              <button
                className='editor__sidebar-header-icon-button'
                type={'button'}
                aria-label='Copier le contenu de la page'
              >
                <Icon name={'copy'} />
              </button>
              <button
                className='editor__sidebar-header-icon-button'
                type={'button'}
                aria-label='Vue responsive'
              >
                <Icon name={'responsive'} />
              </button>
              <Button type={'button'}>
                <Icon additionalClass={`m-right-1`} name={'plus'} size={20} />
                Ajouter un bloc
              </Button>
            </div>
          </div>
          <div className='editor__sidebar-header-content'></div>
          <div className='editor__sidebar-footer'>
            <Button type={'submit'}>
              <Icon additionalClass={`m-right-1`} name={'save'} size={20} />
              Sauvegarder
            </Button>
          </div>
        </div>
        {previewUrl && <Preview data={data} previewUrl={previewUrl} />}
        <div className='editor__resize-bar'></div>
      </div>
      <textarea hidden name={name}></textarea>
    </div>
  )
}
