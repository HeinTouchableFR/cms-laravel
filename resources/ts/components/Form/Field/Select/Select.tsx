type Option = {
  value: string
  label: string
}

type Props = {
  options: Option[]
}

export function FieldSelect({ options, ...props }: Props) {
  return (
    <select {...props}>
      {options.map((option: Option, key) => {
        return (
          <option value={option.value} key={key}>
            {option.label}
          </option>
        )
      })}
    </select>
  )
}
