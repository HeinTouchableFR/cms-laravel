import { FieldComponent } from '@/components/Editor/types'
import { useUniqId } from '@/functions/hooks'
import {
  ButtonIcon,
  Field,
  IconFolder,
} from '@/components/Editor/components/ui'
import { prevent } from '@/functions/functions'
import { defineField } from '@/components/Editor/fields/utils'
import { ReactElement, useEffect, useState } from 'react'
import { jsonFetch } from '@/functions/api'

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

  const [preview, setPreview] = useState<string | null>(null)
  // @ts-ignore
  useEffect(() => {
    async function fetchData() {
      const data = await jsonFetch(`/admin/attachment/files/${value}`)
      setPreview(data.url)
    }

    fetchData()
  }, [value])

  const renderPreview = () => {
    if (!preview || preview.includes('.lottie')) {
      return 'Prévisualisation impossible'
    } else {
      return (
        <img className={`editor__field image-url`} src={preview} alt='' />
      ) as ReactElement
    }
  }

  return (
    <Field
      id={id}
      label={options.label}
      help={options.help}
      value={value}
      tooltip={value ? renderPreview() : undefined}
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
