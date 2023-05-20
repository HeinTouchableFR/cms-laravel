import { Stack } from '@/components/Layout'
import { useToggle } from '@/functions/hooks'
import { redirect } from '@/functions/url'
import { Button } from '@/components/Button'
import Icon from '@/components/Icon'
import { Form } from '@/components/Form/Form/Form'
import { Modal } from '@/components/Modal'
import Alert from '@/elements/Alert'

type Props = {
  url: string
  csrf: string | null
  days: string
}

type SuccessProps = {
  message: string
}
export default function DeleteAccount({ url, csrf, days }: Props) {
  const [modal, toggleModal] = useToggle(false)

  const handleSuccess = async ({ message }: SuccessProps) => {
    toggleModal()
    await redirect('/')
    Alert.flash(message, 'success')
  }

  return (
    <>
      <Button className='btn danger' onClick={toggleModal}>
        <Icon name='trash' />
        Supprimer mon compte
      </Button>
      {modal && (
        <Modal padding={'5'} onClose={toggleModal}>
          <Form.FetchForm
            action={url}
            method='DELETE'
            onSuccess={handleSuccess}
            data={{ csrf }}
            floatingAlert
          >
            <Stack gap={3}>
              <h1 className='h1'>Confirmer la suppression</h1>
              <p className='small text-muted'>
                Vous êtes sur le point de supprimer votre compte.
                <br />
                Pour confirmer cette demande merci de rentrer votre mot de
                passe. Le compte sera automatiquement supprimé au bout de {
                  days
                }{' '}
                jours
              </p>
              <Form.FormField
                type='password'
                name='password'
                placeholder='Entrez votre mot de passer pour confirmer'
              />
              <Form.FormButton className='btn danger mla'>
                Confirmer la suppression
              </Form.FormButton>
            </Stack>
          </Form.FetchForm>
        </Modal>
      )}
    </>
  )
}
