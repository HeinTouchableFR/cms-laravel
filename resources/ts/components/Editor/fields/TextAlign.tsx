import React, { FunctionComponent } from 'react'
import { FieldComponent } from '@/components/Editor/types'
import { useUniqId } from '@/functions/hooks'
import { AlignmentButtons } from '@/components/Editor/fields/shared/AlignmentButtons'
import {
  Field,
  IconTextCenter,
  IconTextLeft,
  IconTextRight,
} from '@/components/Editor/components/ui'
import { AlignmentButton } from '@/components/Editor/fields/shared/AlignmentButton'
import { defineField } from '@/components/Editor/fields/utils'

const AlignmentIcons = {
  left: IconTextLeft,
  center: IconTextCenter,
  right: IconTextRight,
}

type FieldValue = keyof typeof AlignmentIcons

type FieldArgs = {
  label?: string
  default?: FieldValue
}

const Component: FieldComponent<FieldArgs, string> = ({
  value,
  onChange,
  options,
}) => {
  const alignements = Object.keys(AlignmentIcons) as FieldValue[]
  const id = useUniqId()
  return (
    <Field label={options.label}>
      <AlignmentButtons>
        {alignements.map(alignment => (
          <AlignmentButton<FieldValue>
            key={alignment}
            name={id}
            value={alignment}
            checked={value === alignment}
            onChange={onChange}
            icon={AlignmentIcons[alignment] as FunctionComponent}
          />
        ))}
      </AlignmentButtons>
    </Field>
  )
}

export const TextAlign = defineField<FieldArgs, string>({
  defaultOptions: {
    default: 'left' as FieldValue,
  },
  render: Component,
})
