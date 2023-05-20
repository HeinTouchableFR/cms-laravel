import { useContext } from 'preact/hooks'
import { Button } from '../../Button'
import { FormContext } from './Form'
import { PropsWithChildren } from 'preact/compat'

export function FormButton({
  children,
  ...props
}: PropsWithChildren<{ className?: string }>) {
  const { loading, errors } = useContext(FormContext)
  const disabled =
    loading || Object.keys(errors).filter(k => k !== 'main').length > 0

  return (
    <Button loading={loading} disabled={disabled} {...props}>
      {children}
    </Button>
  )
}
