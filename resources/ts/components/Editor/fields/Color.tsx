import React, { CSSProperties, useState } from 'react'
import * as Popover from '@radix-ui/react-popover'
import { FieldComponent } from '@/components/Editor/types'
import { Field } from '@/components/Editor/components/ui'
import { prevent } from '@/functions/functions'
import { colorToProperty } from '@/functions/css'
import { defineField } from '@/components/Editor/fields/utils'

type FieldArgs = {
  label?: string
  default?: string
  colors: string[]
}

const Component: FieldComponent<FieldArgs, string | null> = ({
  value,
  onChange,
  options,
}) => {
  const [isOpen, setOpen] = useState(false)
  const changeHandler = (color: string) =>
    prevent(() => {
      onChange(color)
      setOpen(false)
    })

  return (
    <Field>
      <div className={'editor__field color'}>
        <label>{options.label}</label>
        <Popover.Root open={isOpen} onOpenChange={() => setOpen(v => !v)}>
          <Popover.Trigger asChild>
            <button
              className={`button ${value === null ? 'transparent' : ''}`}
              style={
                value
                  ? ({
                      '--selected-color': colorToProperty(value),
                    } as CSSProperties)
                  : undefined
              }
            />
          </Popover.Trigger>
          <Popover.Content className={'tooltip'} side='top'>
            <div
              className={'palette'}
              style={
                { '--children': options.colors.length + 1 } as CSSProperties
              }
            >
              <button
                className={'item-transparent'}
                onClick={prevent(() => onChange(null))}
              />
              {options.colors.map(color => (
                <button
                  className={'item'}
                  key={color}
                  style={
                    {
                      '--color-button': colorToProperty(color),
                    } as CSSProperties
                  }
                  onClick={changeHandler(color)}
                />
              ))}
            </div>
          </Popover.Content>
        </Popover.Root>
      </div>
    </Field>
  )
}

export const Color = defineField<FieldArgs, string | null>({
  defaultOptions: {
    default: '',
    colors: [] as string[],
  },
  render: Component,
})
