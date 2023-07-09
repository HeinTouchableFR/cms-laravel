import { Preview } from '@/components/Editor/components/Preview/Preview'
import { EditorComponentData } from '@/components/Editor/types'
import {
  useData,
  useSetSidebarWidth,
  useSidebarWidth,
  useUpdateData,
} from '@/components/Editor/store'
import {
  useStopPropagation,
  useToggle,
  useUpdateEffect,
} from '@/functions/hooks'
import { stringifyFields } from '@/functions/object'
import React, {
  SyntheticEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useClipboardPaste } from '@/components/Editor/hooks/useClipboardPaste'
import { Sidebar } from '@/components/Editor/components/Sidebar/Sidebar'
import { BlocSelector } from '@/components/Editor/components/Blocs/BlocSelector'

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

  //const visible = useStateDelayed(visibleProps)
  const [visible, toggleVisible] = useToggle(false)
  const handleClose = () => {
    toggleVisible()
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

  const sidebarWidth = useSidebarWidth()
  const [sidebarCollapsed, toggleSidebar] = useToggle(false)
  const showResizeControl = !sidebarCollapsed
  const [drag, setDrag] = useState(false)
  const setSidebarWidth = useSetSidebarWidth()
  const handleMouseDown = (e: SyntheticEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setDrag(true)
    const listener = (e: MouseEvent) => {
      setSidebarWidth(Math.round((100 * e.clientX) / window.innerWidth))
    }
    document.documentElement.addEventListener('mousemove', listener)
    document.documentElement.addEventListener(
      'mouseup',
      () => {
        setDrag(false)
        document.documentElement.removeEventListener('mousemove', listener)
      },
      { once: true },
    )
  }

  return (
    <div>
      <button
        className={'btn primary-outlined m-top-3'}
        type={'button'}
        onClick={toggleVisible}
      >
        Éditer le contenu
      </button>
      {visible && (
        <div
          className={`editor`}
          style={{ '--sidebar': `${sidebarWidth}vw` } as React.CSSProperties}
        >
          <Sidebar data={data} onClose={handleClose} />
          {previewUrl && <Preview data={data} previewUrl={previewUrl} />}
          {showResizeControl && (
            <div className='editor__resize-bar' onMouseDown={handleMouseDown}>
              {drag && <div className='editor__resize-bar-overlay'></div>}
            </div>
          )}
          <BlocSelector iconsUrl={iconsUrl} />
        </div>
      )}
      <textarea hidden name={name} value={cleanedData} onChange={doNothing} />
    </div>
  )
}

// Exporte les champs
export { Text } from '@/components/Editor/fields/Text'
export { Field } from '@/components/Editor/components/ui'
export { Checkbox } from '@/components/Editor/fields/Checkbox'
export { Repeater } from '@/components/Editor/fields/Repeater'
export { ImageUrl } from '@/components/Editor/fields/ImageUrl'
export { HTMLText } from '@/components/Editor/fields/HTMLText'
export { Color } from '@/components/Editor/fields/Color'
export { Row } from '@/components/Editor/fields/Row'
export { Alignment } from '@/components/Editor/fields/Alignment'
export { Select } from '@/components/Editor/fields/Select'
export { Number } from '@/components/Editor/fields/Number'
export { Range } from '@/components/Editor/fields/Range'
export { Tabs } from '@/components/Editor/fields/Tabs'
export { DatePicker } from '@/components/Editor/fields/DatePicker'
export { TextAlign } from '@/components/Editor/fields/TextAlign'
export { Translations as FR } from '@/components/Editor/langs/fr'
export { Translations as EN } from '@/components/Editor/langs/en'
export { defineField, defineFieldGroup } from '@/components/Editor/fields/utils'
export { FieldsRenderer } from '@/components/Editor/components/Sidebar/FieldsRenderer'
export { React }
