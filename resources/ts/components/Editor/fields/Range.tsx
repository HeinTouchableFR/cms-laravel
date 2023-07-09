import * as Slider from '@radix-ui/react-slider'
import { FieldComponent } from '@/components/Editor/types'
import { Field } from '@/components/Editor/components/ui'
import { defineField } from '@/components/Editor/fields/utils'

type FieldArgs = {
  label?: string
  help?: string
  default?: number
  min?: number
  max?: number
  step?: number
}

const Component: FieldComponent<FieldArgs, number> = ({
  value,
  onChange,
  options,
}) => {
  return (
    <Field help={options.help}>
      <label>
        {options.label} <small>({value})</small>
      </label>
      <Slider.Root
        className={`editor__field range`}
        min={options.min}
        max={options.max}
        value={[value === undefined ? options.default || 0 : value]}
        step={options.step}
        onValueChange={(v: any) => onChange(v[0] || 0)}
      >
        <Slider.Track className={'track'}>
          <Slider.Range className={'track-selected'} />
        </Slider.Track>
        <Slider.Thumb className={'thumb'} />
      </Slider.Root>
    </Field>
  )
}

export const Range = defineField<FieldArgs, number>({
  defaultOptions: {
    default: 0,
    min: 0,
    max: 100,
    step: 1,
  },
  render: Component,
})
