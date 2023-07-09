import { FieldComponent } from '@/components/Editor/types'
import { useUniqId } from '@/functions/hooks'
import {
  ButtonIcon,
  Field,
  IconFolder,
} from '@/components/Editor/components/ui'
import { prevent } from '@/functions/functions'
import { defineField } from '@/components/Editor/fields/utils'

type FieldArgs = {
  label?: string
  help?: string
  default?: string
  onBrowse?: (url?: string) => Promise<string>
}

const Component: FieldComponent<FieldArgs, string> = ({
  value,
  onChange,
  options,
}) => {
  const id = useUniqId('imageinput')
  const handleBrowse = () => {
    options.onBrowse!(value)
      .then(v => {
        onChange(v)
      })
      .catch(e => {})
  }

  return (
    <Field
      id={id}
      label={options.label}
      help={options.help}
      value={value}
      tooltip={
        value ? (
          <img className={`editor__field image-url`} src={value} alt='' />
        ) : undefined
      }
      onChange={e => onChange((e.target as HTMLInputElement).value)}
      icon={
        options.onBrowse ? (
          <ButtonIcon
            additionalStyle={{
              width: '32px',
              height: '32px',
            }}
            onClick={prevent(handleBrowse)}
          >
            <IconFolder size={16} />
          </ButtonIcon>
        ) : undefined
      }
    />
  )
}

export const ImageUrl = defineField<FieldArgs, string>({
  defaultOptions: {
    default: '',
  },
  render: Component,
})
