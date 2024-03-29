import React, { PropsWithChildren, ReactNode } from 'react'
import Tippy, { TippyProps } from '@tippyjs/react'

type TooltipProps = {
  content: ReactNode
  children: ReactNode
  visible?: boolean
  trigger?: 'click' | 'focus'
}

export function Tooltip({ content, children, visible, trigger }: TooltipProps) {
  const tippyProps: TippyProps = {}
  if (trigger === 'click') {
    tippyProps.trigger = trigger
    tippyProps.hideOnClick = true
    tippyProps.interactive = true
  }

  const Render = React.forwardRef<HTMLDivElement, PropsWithChildren>(
    (props, ref) => <div ref={ref}>{props.children}</div>,
  )

  return (
    <Tippy
      className={'editor__tooltip'}
      content={content}
      visible={visible}
      {...tippyProps}
    >
      <Render children={children} />
    </Tippy>
  )
}
