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
  const id = useUniqId('textinput')
  return (
    <Field
      label={options.label}
      type={options.multiline ? 'textarea' : 'text'}
      id={id}
      value={value}
      onInput={e => onChange((e.target as HTMLTextAreaElement).value)}
      help={options.help}
    />
  )
}

export const Text = defineField<FieldArgs, string>({
  defaultOptions: {
    default: '',
  },
  render: Component,
})
