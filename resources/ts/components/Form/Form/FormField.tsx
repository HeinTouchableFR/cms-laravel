import { useContext } from 'preact/hooks'
import { Field } from '../Field/Field'
import { FormContext } from './Form'
import { PropsWithChildren } from 'preact/compat'

type Props = PropsWithChildren<{
  name: string
  type?: string
  required?: boolean
  wrapperClass?: string
  className?: string
  value?: string
  is?: string
  placeholder?: string
}>

export function FormField({ type = 'text', name, children, ...props }: Props) {
  const { errors, emptyError, loading } = useContext(FormContext)
  const error = errors[name] || ''
  return (
    <Field
      type={type}
      name={name}
      error={error}
      onInput={() => emptyError(name)}
      readOnly={loading}
      {...props}
    >
      {children}
    </Field>
  )
}
