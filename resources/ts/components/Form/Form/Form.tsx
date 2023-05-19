import { createContext, PropsWithChildren, useState } from 'react'
import { Alert as AlertComponent } from '@components/Alert'
import Alert from '@elements/Alert'

import { FormButton } from './FormButton'
import { FormField } from './FormField'
import { ApiError, jsonFetch } from '@functions/api'

interface IError {
  [key: string]: string
}
type FormContextType = {
  errors: IError
  loading: boolean
  emptyError: (name: string) => void
}
export const FormContext = createContext<FormContextType>({
  errors: {},
  loading: false,
  emptyError: () => {},
})

type FetchFormType = PropsWithChildren<{
  data?: any
  action: string
  className?: string
  method?: string
  onSuccess?: (response: any) => void
  floatingAlert?: boolean
}>
function FetchForm({
  data = {},
  children,
  action,
  className,
  method = 'POST',
  onSuccess = (response: any) => {},
  floatingAlert = false,
}: FetchFormType) {
  interface IState {
    loading: boolean
    errors: IError
  }
  const [{ loading, errors }, setState] = useState<IState>({
    loading: false,
    errors: {},
  })
  const mainError = errors.main || null

  // Vide l'erreur associée à un champs donnée
  const emptyError = (name: string) => {
    if (!errors[name]) return null
    const newErrors: IError = { ...errors }
    delete newErrors[name]
    setState(s => ({ ...s, errors: newErrors }))
  }

  // On soumet le formulaire au travers d'une requête Ajax
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setState({ loading: true, errors: {} })
    const form = e.target as HTMLFormElement
    const formData = { ...data, ...Object.fromEntries(new FormData(form)) }
    try {
      const response = await jsonFetch(action, { method, body: formData })
      onSuccess(response)
      form.reset()
    } catch (e) {
      const result = (e as Error).message
      if (e instanceof ApiError) {
        const violations = (e as ApiError).violations
        //@ts-ignore
        setState(s => ({ ...s, errors: violations }))
        //@ts-ignore
      } else if (e.detail) {
        //@ts-ignore
        Alert.flash(e.detail, 'error', null)
      } else {
        Alert.flash(result, 'error')
        throw e
      }
    }
    setState(s => ({ ...s, loading: false }))
  }

  return (
    <FormContext.Provider value={{ loading, errors, emptyError }}>
      <form onSubmit={handleSubmit} className={className}>
        {mainError && (
          <AlertComponent
            type='danger'
            onClose={() => emptyError('main')}
            className={floatingAlert ? 'is-floating' : 'full'}
            message={mainError}
          />
        )}
        {children}
      </form>
    </FormContext.Provider>
  )
}

export function Form() {}
Form.FetchForm = FetchForm
Form.FormButton = FormButton
Form.FormField = FormField
