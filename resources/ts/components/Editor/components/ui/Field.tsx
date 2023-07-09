import type { ReactNode } from 'react'
import { Tooltip } from './Tooltip'
import { Field as FieldUi } from '@/components/Form/Field/Field'

type Option = {
  value: string
  label: string
}

type FieldProps = {
  label?: ReactNode
  help?: ReactNode
  options?: Option[]
  tooltip?: ReactNode
  icon?: ReactNode
} & JSX.IntrinsicElements['input'] &
  JSX.IntrinsicElements['textarea'] &
  JSX.IntrinsicElements['select']

export function Field({
  children,
  label,
  help,
  type = 'text',
  options,
  tooltip,
  icon,
  ...props
}: FieldProps) {
  if (!children) {
    if (options) {
      children = (
        <FieldUi
          children={label}
          type={'select'}
          options={options}
          {...props}
        />
      )
    } else if (['text', 'number', 'textarea'].includes(type)) {
      children = <FieldUi children={label} type={type} {...props} />
    } else {
      throw new Error('Cannot render this type of field : ' + type)
    }
  }

  if (tooltip) {
    children = <Tooltip content={tooltip}>{children}</Tooltip>
  }

  return (
    <div className={'editor__field'}>
      <div>
        {children}
        {icon && <div className={'icon'}>{icon}</div>}
      </div>
      {help && <div className={'help-message'}>{help}</div>}
    </div>
  )
}
