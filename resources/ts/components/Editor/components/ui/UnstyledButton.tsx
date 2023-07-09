import { PropsWithChildren } from 'react'

export const UnstyledButton = ({
  type = 'button',
  title,
  onClick,
  additionalClass,
  children,
}: PropsWithChildren<{
  onClick?: (e: any) => void
  additionalClass?: string
  type?: 'button' | 'reset' | 'submit' | undefined
  title?: string
}>) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`editor__unstyled-button ${additionalClass}`}
      title={title}
    >
      {children}
    </button>
  )
}
