import { EditorContent, useEditor } from '@tiptap/react'
import { Node } from '@tiptap/core'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
import Paragraph from '@tiptap/extension-paragraph'
// @ts-ignore
import OrderedList from '@tiptap/extension-ordered-list'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import TextAlign from '@tiptap/extension-text-align'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import HardBreak from '@tiptap/extension-hard-break'
import History from '@tiptap/extension-history'
import Blockquote from '@tiptap/extension-blockquote'
import { CSSProperties, useEffect, useRef, useState } from 'react'
import { TiptapToolbar } from '@/components/Editor/components/Editor/TiptapEditor/TiptapToolbar'

const SingleDocument = Node.create({
  name: 'doc',
  topNode: true,
  group: 'block',
  content: 'inline*',
})

type TiptapEditorProps = {
  value: string
  onChange: (v: string) => void
  colors?: string[]
  backgroundColor?: string
  color?: string
  multiline?: boolean
  defaultAlign?: 'left' | 'right' | 'center' | 'justify'
}

export function TiptapEditor({
  value,
  onChange,
  multiline = false,
  colors = [],
  defaultAlign = 'left',
  backgroundColor,
  color,
}: TiptapEditorProps) {
  const [isFocused, setFocus] = useState(false)
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange
  const editor = useEditor({
    extensions: [
      ...(multiline ? [Document] : [SingleDocument]),
      Paragraph,
      OrderedList,
      BulletList,
      ListItem,
      Text,
      Bold,
      Italic,
      Highlight,
      Underline,
      TextStyle,
      Color,
      HardBreak,
      History,
      Blockquote,
      Link.configure({ openOnClick: false }),
      Heading.configure({ levels: [2, 3, 4, 5, 6] }),
      TextAlign.configure({
        types: [
          'heading',
          'bulletList',
          'listItem',
          'orderedList',
          'blockquote',
          'paragraph',
        ],
        defaultAlignment: defaultAlign,
      }),
    ],
    onUpdate: ({ editor }) =>
      onChangeRef.current(cleanHTML(editor.getHTML(), multiline)),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    content: value,
  })

  // Update the default alignment for the TextAlign extension
  useEffect(() => {
    if (editor) {
      editor.extensionManager.extensions.find(
        e => e.name === 'textAlign',
      )!.options.defaultAlignment = defaultAlign
      // Reset the content to reset the default alignment
      editor.commands.setContent(value)
    }
  }, [defaultAlign])

  return (
    <div
      className={`editor__field tiptap-editor ${isFocused && 'focused'}`}
      style={
        {
          textAlign: defaultAlign,
          color,
          backgroundColor,
        } as CSSProperties
      }
    >
      <EditorContent editor={editor} />
      {editor && <TiptapToolbar editor={editor} colors={colors} />}
    </div>
  )
}

/**
 * Tiptap output <p> inside <li>, we need to do some cleanup
 */
const cleanHTML = (str: string, multiline: boolean) => {
  let content = str.replaceAll(
    /(<[uo]l[^>]*>)(.*?)(<\/[uo]l>)/gi,
    (_, openingTag, inner, closingTag) =>
      `${openingTag}${removeParagraphs(inner)}${closingTag}`,
  )
  if (!multiline) {
    content = removeParagraphs(content)
  }
  return content.trim()
}

function removeParagraphs(str: string) {
  return str
    .replaceAll(/<\/p><p[^>]*>/gi, '<br>')
    .replaceAll(/<p[^>]*>/gi, '')
    .replaceAll(/<\/p>/gi, '')
}
