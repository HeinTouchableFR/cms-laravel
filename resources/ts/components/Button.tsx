import { classNames } from '@/functions/dom'
import Loader from '@/components/Loader'
import { PropsWithChildren } from 'preact/compat'

type Props = PropsWithChildren<{
  className?: string
  size?: string
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
}>

export function Button({
  children,
  className = 'primary',
  loading = false,
  size,
  ...props
}: Props) {
  className = classNames('btn', `${className}`, size ? `btn-${size}` : '')
  return (
    <button className={className} disabled={loading} {...props}>
      {loading && <Loader className='icon' />}
      {children}
    </button>
  )
}
