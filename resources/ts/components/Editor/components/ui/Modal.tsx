import type { ReactNode } from 'react'
import { Root } from '@radix-ui/react-dialog'
import { prevent } from '@/functions/functions'
import { IconCross } from '@/components/Editor/components/ui/Icons'

type ModalProps = {
  children: ReactNode
  visible: boolean
  onVisibilityChange: (visibility: boolean) => void
  title: ReactNode
}

export function Modal({
  children,
  title,
  visible,
  onVisibilityChange,
}: ModalProps) {
  return (
    <Root open={visible} onOpenChange={onVisibilityChange}>
      <div className={'editor__modal-overlay'} />
      <div className={'editor__modal-content'}>
        <div className={'editor__modal-content-title'}>{title}</div>
        <div>{children}</div>
        <div
          className={'editor__modal-content-close'}
          onClick={prevent(() => onVisibilityChange(false))}
        >
          <IconCross size={16} />
        </div>
      </div>
    </Root>
  )
}
