import { useEffect, useRef } from 'react'
import { usePreview } from '@/components/Editor/hooks/usePreview'
import { useFieldFocused, useSetFocusIndex } from '@/components/Editor/store'
import { EditorComponentData } from '@/components/Editor/types'
import { offsetTop } from '@/functions/dom'
import Loader from '@/components/Loader'

type PreviewItemProps = {
  data: EditorComponentData
  initialHTML: string
  previewUrl: string
  title: string
}

export function PreviewItem({
  data,
  initialHTML,
  previewUrl,
  title,
}: PreviewItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { loading, html } = usePreview(data, previewUrl, initialHTML)
  const setFocusIndex = useSetFocusIndex()
  const isFocused = useFieldFocused(data._id)

  useEffect(() => {
    if (isFocused) {
      const top = offsetTop(ref.current!) - 40
      const root = ref.current!.closest('html')!
      root.scrollTop = top
    }
  }, [isFocused])

  return (
    <div
      className={`editor__preview-item ${isFocused ? 'focused' : ''}`}
      id={`previewItem${data._id}`}
      ref={ref}
      onClick={() => setFocusIndex(data._id)}
    >
      {loading && <Loader width={15} dots={6} />}
      <div
        className={`editor__preview-item-title ${isFocused ? 'focused' : ''}`}
      >
        {title}
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
