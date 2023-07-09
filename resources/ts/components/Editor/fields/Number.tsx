import { FieldComponent } from '@/components/Editor/types'
import { useUniqId } from '@/functions/hooks'
import { Field } from '@/components/Editor/components/ui'
import { defineField } from '@/components/Editor/fields/utils'

type FieldArgs = {
  label?: string
  multiline?: boolean
  help?: string
  default?: string
}

const Component: FieldComponent<FieldArgs, string> = ({
  value,
  onChange,
  options,
}) => {
  const id = useUniqId('numberinput')
  return (
    <Field
      label={options.label}
      type='number'
      id={id}
      value={value}
      onInput={e => onChange((e.target as HTMLTextAreaElement).value)}
      help={options.help}
    />
  )
}

export const Number = defineField<FieldArgs, string>({
  defaultOptions: {
    default: '',
  },
  render: Component,
})
