import { CSSProperties, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { classNames } from '@functions/dom'

type ModalProps = PropsWithChildren<{
  onClose: () => void
  padding?: string
  className?: string
  style?: CSSProperties
}>

export function Modal({
  children,
  onClose,
  padding = '',
  style,
  className = '',
}: ModalProps) {
  const bodyClassName = classNames(
    'modal-box',
    padding && `p${padding}`,
    className,
  )
  return createPortal(
    <modal-dialog overlay-close onClose={onClose}>
      <section className={bodyClassName} style={style}>
        {children}
      </section>
    </modal-dialog>,
    document.body,
  )
}
