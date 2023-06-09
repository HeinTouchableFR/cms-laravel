import { FunctionComponent } from 'react'
import { IconAlign } from './TiptapIcons'
import { Editor } from '@tiptap/core'
import { TiptapToolbarButton as Button } from './TiptapToolbarButton'
import { TiptapDropdown as Dropdown } from './TiptapDropdown'
import { capitalize } from '@/functions/string'
import { prevent } from '@/functions/functions'

export const TiptapToolbarAlign: FunctionComponent<{ editor: Editor }> = ({
  editor,
}) => {
  const alignments = ['left', 'center', 'right', 'justify'] as const
  const currentAlign = alignments.filter(align =>
    editor.isActive({ textAlign: align }),
  )[0]!

  if (!editor.can().setParagraph()) {
    return null
  }

  return (
    <Dropdown size={alignments.length}>
      <Button title={capitalize(currentAlign)} type='button'>
        <IconAlign size={16} direction={currentAlign} />
      </Button>
      {alignments
        .filter(align => align !== currentAlign)
        .map(align => (
          <Button
            key={align}
            onClick={prevent(() =>
              editor.chain().focus().setTextAlign(align).run(),
            )}
            title={capitalize(align)}
          >
            <IconAlign size={16} direction={align} />
          </Button>
        ))}
    </Dropdown>
  )
}
