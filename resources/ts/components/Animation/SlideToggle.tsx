import { useRef, useState } from 'preact/hooks'
import { useAsyncEffect } from '@/functions/hooks'
import { CSSProperties, PropsWithChildren } from 'preact/compat'

type SlideToggleProps = PropsWithChildren<{
  visible: boolean
  className: string
}>

export default function SlideToggle({
  visible,
  className = '',
  children,
}: SlideToggleProps) {
  const [height, setHeight] = useState(0)
  const [showChildren, setShowChildren] = useState(visible)
  const duration = 500
  const containerRef = useRef<HTMLDivElement | null>(null)
  const style: CSSProperties = {
    height: height !== null ? `${height}px` : undefined,
    transition: `${duration}ms`,
    overflow: 'hidden',
  }

  useAsyncEffect(() => {
    if (visible) {
      if (!showChildren) {
        setShowChildren(true)
        return
      }
      if (containerRef.current) {
        containerRef.current.style.height = ''
        const height = containerRef.current.getBoundingClientRect().height
        containerRef.current.style.height = '0px'
        containerRef.current.getBoundingClientRect()
        setHeight(height)
        window.setTimeout(() => {
          setHeight(0)
        }, duration)
      }
    } else if (showChildren) {
      if (containerRef.current) {
        const height = containerRef.current.getBoundingClientRect().height
        containerRef.current.style.height = `${height}px`
        containerRef.current.getBoundingClientRect()
        setHeight(0)
      }
      window.setTimeout(() => {
        setShowChildren(false)
      }, duration)
    }
  }, [visible, showChildren])

  return (
    <>
      {showChildren && (
        <div className={className} ref={containerRef} style={{ ...style }}>
          {children}
        </div>
      )}
    </>
  )
}
