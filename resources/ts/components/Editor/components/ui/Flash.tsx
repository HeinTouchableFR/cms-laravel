import type {
  EventHandler,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
} from 'react'
import { AnimatePresence } from './Animation/AnimatedPresence'
import { Alert } from '@/components/Alert'

type FlashProps = PropsWithChildren<{
  action?: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  onHide?: EventHandler<any>
  onExit?: Function
  duration?: number
}>

export function Flash({
  children,
  action,
  onClick,
  duration,
  onHide,
}: FlashProps) {
  return (
    <AnimatePresence in={null} out={null}>
      {children && (
        <Alert
          duration={duration}
          isFloating
          message={children.toString()}
          type={'success'}
        />
      )}
    </AnimatePresence>
  )
}
