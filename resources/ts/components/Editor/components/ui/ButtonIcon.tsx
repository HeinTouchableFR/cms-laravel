import { Tooltip } from './Tooltip'
import { CSSProperties } from 'react'

type ButtonProps = JSX.IntrinsicElements['button'] & {
  danger?: boolean
  success?: boolean
  rotate?: number
  title?: string
  additionalStyle?: CSSProperties | undefined
}

export function ButtonIcon({
  danger,
  success,
  rotate,
  title,
  additionalStyle,
  ...props
}: ButtonProps) {
  const style = rotate
    ? { transform: `rotate(${rotate}deg)`, ...additionalStyle }
    : additionalStyle
  const button = (
    <button
      className={`editor__button-icon ${danger && 'danger'} ${
        success && 'success'
      }`}
      {...props}
      aria-label={title}
      style={style}
    />
  )
  if (title) {
    return (
      <Tooltip content={title} trigger='focus'>
        {button}
      </Tooltip>
    )
  }

  return button
}
