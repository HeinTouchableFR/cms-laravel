import { PropsWithChildren, useEffect, useState, AnimationEvent } from 'react'

type SlideInProps = PropsWithChildren<{
  show: boolean
}>

export function SlideIn ({ show, children, ...props }: SlideInProps) {
  const [shouldRender, setRender] = useState(show)

  useEffect(() => {
    if (show) setRender(true)
  }, [show])

  const onAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (!show && e.animationName === 'slideOut') setRender(false)
  }

  return (
    shouldRender && (
      <div
        style={{ animation: `${show ? 'slideIn' : 'slideOut'} .3s both` }}
        onAnimationEnd={onAnimationEnd}
        {...props}
      >
        {children}
      </div>
    )
  )
}
