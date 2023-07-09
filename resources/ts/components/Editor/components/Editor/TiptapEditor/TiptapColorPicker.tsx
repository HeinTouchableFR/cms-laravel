import { Editor } from '@tiptap/react'
import { CSSProperties, useEffect, useMemo } from 'react'
import { colorToProperty } from '@/functions/css'
import { useToggle } from '@/functions/hooks'
import { prevent } from '@/functions/functions'
import { Button } from '@/components/Editor/components/ui'

type Props = {
  editor: Editor
  colors: string[]
}

export function TiptapColorPicker({ editor, colors }: Props) {
  const currentColor = editor?.getAttributes('textStyle').color
  const cssColors = useMemo(
    () => colors.map(colorToProperty),
    [colors],
  ) as string[]
  const [expanded, toggleExpanded, setExpanded] = useToggle()

  const handleChange = (color: string) => {
    toggleExpanded()
    editor.chain().focus().setColor(color).run()
  }

  useEffect(() => {
    if (editor.isFocused) {
      setExpanded(false)
    }
  }, [editor.isFocused])

  if (colors.length === 0) {
    return null
  }

  return (
    <div className={'tiptap-color-picker'}>
      <Button onClick={prevent(toggleExpanded)}>
        <svg
          width={16}
          height={16}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M15.246 14H8.754L7.154 18H5L11 3H13L19 18H16.846L15.246 14ZM14.446 12L12 5.885L9.554 12H14.446Z'
            fill='currentColor'
          />
          <path d='M3 20H21V22H3V20Z' fill={currentColor || 'currentColor'} />
        </svg>
      </Button>
      {expanded && <Palette colors={cssColors} onChange={handleChange} />}
    </div>
  )
}

export function Palette({
  colors,
  onChange,
}: {
  colors: string[]
  onChange: (v: string) => void
}) {
  const changeHandler = (color: string) => prevent(() => onChange(color))
  return (
    <div
      className={'palette'}
      style={{ '--size': Math.ceil(colors.length / 3) } as CSSProperties}
    >
      {colors.map(color => (
        <div
          className={'item'}
          key={color}
          onClick={changeHandler(color)}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  )
}
