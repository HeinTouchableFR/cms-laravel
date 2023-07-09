import { UnstyledButton } from '@/components/Editor/components/ui'
import { PropsWithChildren } from 'react'

export const TiptapToolbarButton = ({
  active,
  onClick,
  title,
  children,
}: PropsWithChildren<{
  active?: boolean
  onClick?: (e?: any) => void
  title?: string
  type?: string
}>) => {
  return (
    <UnstyledButton
      onClick={onClick}
      title={title}
      additionalClass={active ? 'active' : ''}
    >
      {children}
    </UnstyledButton>
  )
}
