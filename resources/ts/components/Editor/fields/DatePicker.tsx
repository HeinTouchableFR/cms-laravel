import ReactDatePicker from 'react-datepicker'
import { useState } from 'react'
import { FieldComponent } from '@/components/Editor/types'
import { useUniqId } from '@/functions/hooks'
import {
  ButtonIcon,
  Field,
  IconCalendar,
} from '@/components/Editor/components/ui'
import { prevent } from '@/functions/functions'
import { defineField } from '@/components/Editor/fields/utils'
import { Field as FieldUi } from '@/components/Form/Field/Field'

type FieldArgs = {
  label?: string
  help?: string
  default?: string
  time?: boolean
}

const Component: FieldComponent<FieldArgs, number> = ({
  value,
  onChange,
  options,
}) => {
  const date = value ? new Date(value * 1000) : null
  const [open, setOpen] = useState(false)
  const formattedDate = date
    ? new Intl.DateTimeFormat(undefined, {
        dateStyle: 'long',
        timeStyle: options.time ? 'short' : undefined,
      }).format(date)
    : ''
  const handleChange = (date: Date) => {
    onChange(date.getTime() / 1000)
    if (!options.time) {
      setOpen(false)
    }
  }
  // Fix an issue with the import not using the default by default
  const ReactDatePickerComponent =
    typeof ReactDatePicker === 'function'
      ? ReactDatePicker
      : (ReactDatePicker as any).default
  const id = useUniqId('datepickerinput')
  return (
    <Field
      id={id}
      help={options.help}
      icon={
        <ButtonIcon
          additionalStyle={{
            width: '32px',
            height: '32px',
          }}
          onClick={prevent(() => setOpen(true))}
        >
          <IconCalendar size={16} />
        </ButtonIcon>
      }
    >
      <div className={`editor__field date-picker`}>
        <FieldUi
          //@ts-ignore
          id={id}
          children={options.label}
          onFocus={() => setOpen(true)}
          value={formattedDate}
          readOnly
        />
        {open && (
          <div style={{ position: 'absolute', zIndex: 4 }}>
            <ReactDatePickerComponent
              selected={date}
              showTimeInput={options.time}
              inline
              onChange={handleChange}
              onClickOutside={() => setOpen(false)}
            />
          </div>
        )}
      </div>
    </Field>
  )
}

export const DatePicker = defineField<FieldArgs, number>({
  defaultOptions: {
    default: '',
    time: false,
  },
  render: Component,
})
