import { prevent } from '@/functions/functions'
import { t } from '@/components/Editor/functions/i18n'
import { Button } from '@/components/Button'

type Props = {
  onAction: Function
}

export function SidebarEmpty(data: Props) {

    return (
        <div className='editor__sidebar-empty'>
            <p>{t('noContent')}</p>
            <div>
                <Button onClick={prevent(data.onAction)} size='small'>
                    {t('useTemplate')}
                </Button>
            </div>
        </div>
    )
}
