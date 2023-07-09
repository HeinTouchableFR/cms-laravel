import type { FunctionComponent } from 'react'
import {
  Field,
  IconAlignBottom,
  IconAlignLeft,
  IconAlignRight,
  IconAlignTop,
} from '@/components/Editor/components/ui'
import { FieldComponent } from '@/components/Editor/types'
import { AlignmentButtons } from '@/components/Editor/fields/shared/AlignmentButtons'
import { AlignmentButton } from '@/components/Editor/fields/shared/AlignmentButton'
import { defineField } from '@/components/Editor/fields/utils'

type FieldArgs = {
  label?: string
  vertical?: boolean
  default?: FieldValue
}

type FieldValue = 'top' | 'right' | 'bottom' | 'left'

const AlignmentIcons = {
  top: IconAlignTop,
  left: IconAlignLeft,
  bottom: IconAlignBottom,
  right: IconAlignRight,
} as Record<FieldValue, FunctionComponent>

const Component: FieldComponent<FieldArgs, FieldValue> = ({
  value,
  onChange,
  options,
}) => {
  const alignements = [
    'left',
    'right',
    ...(options.vertical ? ['top', 'bottom'] : []),
  ] as FieldValue[]
  return (
    <Field label={options.label}>
      <AlignmentButtons>
        {alignements.map(alignment => (
          <AlignmentButton<FieldValue>
            key={alignment}
            value={alignment}
            checked={value === alignment}
            onChange={onChange}
            icon={AlignmentIcons[alignment]}
          />
        ))}
      </AlignmentButtons>
    </Field>
  )
}

export const Alignment = defineField<FieldArgs, FieldValue>({
  defaultOptions: {
    default: 'left' as FieldValue,
  },
  render: Component,
})
