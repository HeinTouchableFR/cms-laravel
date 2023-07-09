import type { FunctionComponent } from 'react'
import { capitalize } from '@/functions/string'

type Props<T extends unknown> = {
  value: T
  checked: boolean
  icon: FunctionComponent
  onChange: (v: T) => void
  name?: string
}

export function AlignmentButton<T extends unknown>({
  value,
  onChange,
  icon: IconComponent,
  ...props
}: Props<T>) {
  return (
    <div className={'button'}>
      <input
        type='radio'
        value={value as string}
        onChange={() => onChange(value)}
        title={capitalize(value as string)}
        {...props}
      />
      <div>
        <IconComponent />
      </div>
    </div>
  )
}
