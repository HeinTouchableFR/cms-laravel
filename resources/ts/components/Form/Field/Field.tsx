import {
  PropsWithChildren,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { FieldTextarea } from './Textarea/Textarea'
import { FieldCheckbox } from './Checkbox/Checkbox'
import { FieldInput } from './Input/Input'
import { FieldSelect } from './Select/Select'
import { useAutofocus } from '@/functions/hooks'

type FieldProps = PropsWithChildren<{
  name?: string
  onInput?: (e: any) => void
  onKeyDown?: (e: any) => void
  value?: string | number | readonly string[]
  error?: string
  type?: string
  className?: string
  wrapperClass?: string
  component?: any
  autofocus?: boolean
  placeholder?: string
  readOnly?: boolean
  required?: boolean
  options?: any
}>

export function Field({
  name,
  onInput,
  value,
  error,
  children,
  type = 'text',
  className = '',
  wrapperClass = '',
  component = null,
  autofocus = false,
  placeholder,
  ...props
}: FieldProps) {
  // Hooks
  const [dirty, setDirty] = useState(false)
  const ref = useRef(null)
  useAutofocus(ref, autofocus)
  const showError = error && !dirty

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (!dirty) {
      setDirty(true)
    }
    if (onInput) {
      onInput(e)
    }
  }

  // Si le champ a une erreur et n'a pas été modifié
  if (showError) {
    className += ` is-invalid`
  }

  // Les attributs à passer aux champs
  const attr = {
    name,
    id: name,
    className,
    onInput: handleInput,
    type,
    ...(value === undefined ? {} : { value }),
    ...props,
  }

  // On trouve le composant à utiliser
  const FieldComponent = useMemo(() => {
    if (component) {
      return component
    }
    switch (type) {
      case 'textarea':
        return FieldTextarea
      case 'select':
        return FieldSelect
      case 'checkbox':
        return FieldCheckbox
      default:
        return FieldInput
    }
  }, [component, type])

  // Si l'erreur change on considère le champ comme "net"
  useLayoutEffect(() => {
    setDirty(false)
  }, [error])

  if (FieldComponent === FieldCheckbox) {
    return (
      <div className={`form-check ${wrapperClass}`}>
        <FieldComponent {...attr} />
        {children && (
          <label htmlFor={name} className={'form-check-label'}>
            {children}
          </label>
        )}
        {showError && <div className={'invalid-feedback'}>{error}</div>}
      </div>
    )
  }

  return (
    <div className={`form-group ${wrapperClass}`} ref={ref}>
      {children && <label htmlFor={name}>{children}</label>}
      <FieldComponent {...attr} />
      {showError && <div className={'invalid-feedback'}>{error}</div>}
    </div>
  )
}
