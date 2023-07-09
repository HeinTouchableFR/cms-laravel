import { useState } from 'react'
import { Form } from '@/components/Form/Form/Form'

type Props = {
  content: string
  buttonClass: string
}

export function ContactForm({ content, buttonClass }: Props) {
  const [success, setSuccess] = useState(false)
  const [fields] = useState(JSON.parse(content))

  if (success) {
    return (
      <alert-message type={'success'} className='full' duration={3}>
        Votre mail a bien été envoyé, vous recevrez une réponse dans les plus
        bref délais.
      </alert-message>
    )
  }

  return (
    <Form.FetchForm
      action='/api/contact'
      onSuccess={() => setSuccess(true)}
      className='grid two'
    >
      {fields.map((field: any) => (
        <Form.FormField
          key={field.name}
          type={field.type}
          name={field.name}
          wrapperClass={field.full ? 'full' : ''}
          required={field.required}
        >
          {field.label}
        </Form.FormField>
      ))}
      <div className='full m-top-2'>
        <Form.FormButton className={buttonClass}>Envoyer</Form.FormButton>
      </div>
    </Form.FetchForm>
  )
}
