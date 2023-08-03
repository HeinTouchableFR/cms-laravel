import { CSSProperties, PropsWithChildren } from 'react'

type StyleType = {
  '--gap'?: number
  alignItems?: string
  flexWrap?: string
}

type StackProps = PropsWithChildren<{
  gap?: number
}>

export function Stack({ children, gap }: StackProps) {
  const style: StyleType = {}
  if (gap) {
    style['--gap'] = gap
  }
  return (
    <div className='stack' style={{ ...style } as CSSProperties}>
      {children}
    </div>
  )
}

type FlexProps = PropsWithChildren<{
  gap?: number
  center?: boolean
  nowrap?: boolean
  className?: string
}>

export function Flex({ children, gap, center, nowrap }: FlexProps) {
  const style: StyleType = {}
  if (gap) {
    style['--gap'] = gap
  }
  if (center) {
    style['alignItems'] = 'center'
  }
  if (nowrap) {
    style['flexWrap'] = 'nowrap'
  }
  return (
    <div className='hstack' style={{ ...style } as CSSProperties}>
      {children}
    </div>
  )
}
