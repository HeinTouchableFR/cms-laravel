import Icon from '@/components/Icon'
import { slideUp } from '@/functions/animation'
import { PropsWithChildren, useEffect, useRef, useState } from 'react'

type Props = PropsWithChildren<{
  type?: string
  message?: string
  duration?: number
  isFloating?: boolean
  onClose?: () => void
  className?: string
}>

export function Alert({
  type = 'success',
  message = '',
  duration = 3,
  isFloating = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [alertType, setAlertType] = useState(type)
  const [icon, setIcon] = useState('')
  const spanRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (type !== null || true) {
      setAlertType(type)
      setIcon(type)
    }
    if (type === 'error' || type === null) {
      setAlertType('danger')
      setIcon('warning')
    }
    if (type === 'success') {
      setIcon('check')
    }
  }, [type])

  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.innerHTML = message
    }
  }, [spanRef.current, message])

  const close = (e: any) => {
    if (ref.current) {
      const alertElement = ref.current as HTMLDivElement
      ref.current.classList.add('out')
      window.setTimeout(async () => {
        await slideUp(alertElement)
        alertElement.dispatchEvent(new CustomEvent('close'))
      }, 500)
    }
    e.preventDefault()
  }

  useEffect(() => {
    if (duration != 0) {
      const timer = window.setTimeout(close, duration * 1000)
      return () => clearTimeout(timer)
    }
  }, [duration])

  return (
    <div
      className={`alert alert-${alertType} ${isFloating ? 'is-floating' : ''}`}
      ref={ref}
    >
      <Icon name={icon} />
      <span ref={spanRef} />
      <button className='alert-close' onClick={close}>
        <Icon name={'cross'} />
      </button>
      {duration != 0 && (
        <div
          className='alert__progress'
          style={{ animationDuration: `${duration}s` }}
        ></div>
      )}
    </div>
  )
}
