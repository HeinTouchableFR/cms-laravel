import { PropsWithChildren } from 'react'
import {
  PreviewModes,
  useData,
  usePreviewMode,
  useSetBlockIndex,
  useTogglePreviewMode,
} from '@/components/Editor/store'
import { prevent } from '@/functions/functions'
import { t } from '@/components/Editor/functions/i18n'
import Icon from '@/components/Icon'
import { Button } from '@/components/Button'
import { CopyAction } from '@/components/Editor/components/Sidebar/Actions/CopyAction'

type SidebarHeaderProps = PropsWithChildren<{
  onClose: () => void
}>

export function SidebarHeader({ onClose, children }: SidebarHeaderProps) {
  const togglePreviewMode = useTogglePreviewMode()
  const previewMode = usePreviewMode()
  const isPhone = previewMode === PreviewModes.PHONE
  const setAddBlock = useSetBlockIndex()
  const data = useData()

  return (
    <div className='editor__sidebar-header'>
      <button
        className='editor__sidebar-header-icon-button'
        type={'button'}
        onClick={prevent(onClose)}
        aria-label={t('close')}
      >
        <Icon name={'cross'} />
      </button>
      <div className='editor__sidebar-header-actions'>
        {children}
        <CopyAction data={data} size={20} />
        <button
          className='editor__sidebar-header-icon-button'
          type={'button'}
          onClick={prevent(togglePreviewMode)}
          aria-label={t('responsiveView')}
        >
          <Icon name={'responsive'} />
        </button>
        <Button type={'button'} onClick={prevent(() => setAddBlock())}>
          <Icon additionalClass={`m-right-1`} name={'plus'} size={20} />
          {t('addComponent')}
        </Button>
      </div>
    </div>
  )
}
