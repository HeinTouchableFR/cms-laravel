import { FieldComponent } from '@/components/Editor/types'
import { useUniqId } from '@/functions/hooks'
import { Field } from '@/components/Editor/components/ui'
import { defineField } from '@/components/Editor/fields/utils'

type FieldArgs = {
  label: string
  help?: string
  default?: boolean
}

const Component: FieldComponent<FieldArgs, boolean> = ({
  value,
  onChange,
  options,
}) => {
  const id = useUniqId('checkbox')
  return (
    <Field help={options.help}>
      <div className={`editor__field checkbox`}>
        <input
          className={`editor-checkbox-input`}
          type='checkbox'
          id={id}
          checked={value}
          onChange={() => onChange(!value)}
        />
        <label htmlFor={id}>{options.label}</label>
      </div>
    </Field>
  )
}

export const Checkbox = defineField<FieldArgs, boolean>({
  defaultOptions: {
    label: '',
    default: false,
  },
  render: Component,
})
