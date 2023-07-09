import { CSSProperties, PropsWithChildren } from 'react'

const baseHeight = 40

export const TiptapDropdown = ({
  size,
  children,
}: PropsWithChildren<{
  size?: number
}>) => {
  return (
    <div
      className={'tiptap-dropdown'}
      style={
        { '--size': `${size}px`, '--base': `${baseHeight}px` } as CSSProperties
      }
    >
      {children}
    </div>
  )
}
