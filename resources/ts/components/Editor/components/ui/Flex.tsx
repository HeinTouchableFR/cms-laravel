import { CSSProperties, ElementType, forwardRef } from 'react'

type FlexProps = {
  between?: boolean
  column?: boolean
  gap?: number
  style?: CSSProperties
  as?: ElementType<any>
} & JSX.IntrinsicElements['div']

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ between, column, gap, ...props }, ref) => {
    return (
      <div
        className={`editor__flex ${between && 'between'} ${column && 'column'}`}
        style={{ '--flex-gap': gap ? `${gap}em` : '1em' } as CSSProperties}
        {...props}
        ref={ref}
      />
    )
  },
)

Flex.displayName = 'Flex'
