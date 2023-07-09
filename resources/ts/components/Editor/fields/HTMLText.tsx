import { FieldComponent } from '@/components/Editor/types'
import { Field } from '@/components/Editor/components/ui'
import { colorToProperty } from '@/functions/css'
import { defaultFieldProperties } from '@/components/Editor/fields/utils'
import { TiptapEditor } from '@/components/Editor/components/Editor/TiptapEditor/TiptapEditor'

type FieldArgs = {
  label?: string
  multiline?: boolean
  help?: string
  // Allow headings (h1, h2...)
  allowHeadings?: boolean
  // A set of color for text (ex: ["--primary", "--secondary"]
  colors?: string[]
  default?: string
  backgroundColor?: string
  textColor?: string
  defaultAlign?: string
}

type ExtraParams = {
  backgroundColor?: string
  textColor?: string
  defaultAlign?: 'left' | 'right' | 'center' | 'justify'
}

const Component: FieldComponent<FieldArgs, string, ExtraParams> = ({
  value,
  onChange,
  options,
  backgroundColor,
  textColor,
  defaultAlign,
}) => {
  return (
    <Field help={options.help}>
      <label>{options.label}</label>
      <TiptapEditor
        value={value}
        onChange={onChange}
        backgroundColor={backgroundColor}
        color={textColor}
        colors={options.colors}
        multiline={options.multiline}
        defaultAlign={defaultAlign}
      />
    </Field>
  )
}

export const HTMLText = (name: string, options: FieldArgs = {}) => {
  return {
    name: name,
    options: {
      multiline: true,
      allowHeadings: false,
      default: '',
      ...options,
    },
    extraProps: (data: Record<string, unknown>) => ({
      backgroundColor: colorToProperty(
        options.backgroundColor && (data[options.backgroundColor] as string),
      ),
      textColor: colorToProperty(
        options.textColor && (data[options.textColor] as string),
      ),
      defaultAlign: options.defaultAlign
        ? data[options.defaultAlign]
        : undefined,
    }),
    render: Component,
    ...defaultFieldProperties(),
  }
}
