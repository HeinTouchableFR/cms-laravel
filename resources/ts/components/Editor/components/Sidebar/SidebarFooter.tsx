import Icon from '@/components/Icon'
import { Button } from '@/components/Button'
import { t } from '@/components/Editor/functions/i18n'

export function SidebarFooter() {
  return (
    <div className='editor__sidebar-footer'>
      <Button type={'submit'}>
        <Icon additionalClass={`m-right-1`} name={'save'} size={20} />
        {t('save')}
      </Button>
    </div>
  )
}
