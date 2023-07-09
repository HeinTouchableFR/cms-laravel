type ButtonProps = Omit<JSX.IntrinsicElements['button'], 'icon'> & {
  secondary?: boolean
  outline?: boolean
  icon?: (...args: any) => JSX.Element
  size?: 'small' | 'default'
}

export function Button({
  children,
  icon: IconElement,
  size = 'default',
  secondary = false,
  outline = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`editor__button ${secondary && 'secondary'} ${
        outline && 'outline'
      } ${size === 'small' && 'small'}`}
      {...props}
    >
      {IconElement && <IconElement size={20} />}
      {children}
    </button>
  )
}
