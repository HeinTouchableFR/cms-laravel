import { Key } from 'react'

type Option = {
  value: string
  label: string
}

export function FieldSelect(props: object) {
  return (
    <select {...props}>
      {
        // @ts-ignore
        props.options.map((option: Option, key: Key) => {
          return (
            <option value={option.value} key={key}>
              {option.label}
            </option>
          )
        })
      }
    </select>
  )
}
