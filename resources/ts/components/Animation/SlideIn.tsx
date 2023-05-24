import { useEffect, useState } from 'preact/hooks'
import { CSSProperties, PropsWithChildren } from 'preact/compat'

type SlideInProps = PropsWithChildren<{
  className?: string
  show: boolean
  style?: CSSProperties | null
}>

export function SlideIn({ show, className, children, style }: SlideInProps) {
  const [shouldRender, setRender] = useState(show)

  useEffect(() => {
    if (show) {
      setRender(true)
    } else {
      setRender(false)
    }
  }, [show])

  const onAnimationEnd = (e: any) => {
    if (!show && e.animationName === 'slideOut') setRender(false)
  }

  return (
    <>
      {shouldRender && (
        <div
          className={className}
          style={{
            animation: `${show ? 'slideIn' : 'slideOut'} .3s both`,
            ...style,
          }}
          onAnimationEnd={onAnimationEnd}
        >
          {children}
        </div>
      )}
    </>
  )
}
