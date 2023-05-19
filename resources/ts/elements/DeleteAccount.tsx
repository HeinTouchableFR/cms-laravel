import { createRoot } from 'react-dom/client'
import { Button, Form, AlertElement, Icon, Modal } from '@heintouchable/ui'
import { Stack } from '@components/Layout'
import { useToggle } from '@functions/hooks'
import { redirect } from '@functions/url'

function DeleteAccountComponent({ url, csrf, days }) {
  const [modal, toggleModal] = useToggle(false)

  const handleSuccess = async ({ message }) => {
    toggleModal()
    await redirect('/')
    AlertElement.flash(message, 'success')
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

export default class DeleteAccount extends HTMLElement {
  private days: string | null | undefined
  private csrf: string | null | undefined
  private url: string | null | undefined
  constructor() {
    super()
  }

  connectedCallback() {
    this.days = this.getAttribute('days')
    this.csrf = this.getAttribute('csrf')
    this.url = this.getAttribute('url')
    createRoot(this).render(
      <DeleteAccountComponent
        days={this.days}
        csrf={this.csrf}
        url={this.url}
      />,
    )
  }
}
