import { FieldComponent } from '@/components/Editor/types'
import { useUniqId } from '@/functions/hooks'
import { Field } from '@/components/Editor/components/ui'
import { defineField } from '@/components/Editor/fields/utils'

type Option = {
  value: string
  label: string
}

type FieldArgs = {
  label?: string
  options: Option[]
  help?: string
  default?: string
}

const Component: FieldComponent<FieldArgs, string> = ({
  value,
  onChange,
  options,
}) => {
  const id = useUniqId('selectinput')
  return (
    <Field
      id={id}
      label={options.label}
      help={options.help}
      options={options.options}
      value={value}
      onInput={e => onChange((e.target as HTMLSelectElement).value)}
    />
  )
}

export const Select = defineField<FieldArgs, string>({
  defaultOptions: {
    default: '',
    options: [],
  },
  render: Component,
})
