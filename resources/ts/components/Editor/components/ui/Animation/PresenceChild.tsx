import * as React from 'react'
import { useMemo } from 'react'
import { useConstant } from './hooks'

interface PresenceChildProps {
  children: React.ReactElement<any>
  isPresent: boolean
  onExitComplete?: () => void
  in: CSSKeyframesRule
  out: CSSKeyframesRule
}

export const PresenceChild = ({
  children,
  isPresent,
  onExitComplete,
  in: inKeyframes,
  out: outKeyframes,
}: PresenceChildProps) => {
  const presenceChildren = useConstant(newChildrenMap)
  const animationName = isPresent ? inKeyframes : outKeyframes

  useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false))
  }, [isPresent])

  return (
    <div>
      {React.cloneElement(children, {
        onAnimationEnd: isPresent ? null : onExitComplete,
      })}
    </div>
  )
}

function newChildrenMap(): Map<number, boolean> {
  return new Map()
}
