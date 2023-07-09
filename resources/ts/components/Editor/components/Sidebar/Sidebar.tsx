import { EditorComponentData } from '@/components/Editor/types'
import { useCallback, useState } from 'react'
import { useTemplates } from '@/components/Editor/store'
import { t } from '@/components/Editor/functions/i18n'
import { SidebarHeader } from '@/components/Editor/components/Sidebar/SidebarHeader'
import Icon from '@/components/Icon'
import { prevent } from '@/functions/functions'
import { SidebarFooter } from '@/components/Editor/components/Sidebar/SidebarFooter'
import { SidebarEmpty } from '@/components/Editor/components/Sidebar/SidebarEmpty'
import { SidebarTemplates } from '@/components/Editor/components/Sidebar/SidebarTemplates'
import { SidebarBlocs } from '@/components/Editor/components/Sidebar/SidebarBlocs'

enum States {
  BLOCS,
  TEMPLATES,
}

export function Sidebar({
  data,
  onClose,
  ...props
}: {
  data: EditorComponentData[]
  onClose: () => void
}) {
  const [state, setState] = useState(States.BLOCS)
  const templates = useTemplates()
  const toggleMode = useCallback(() => {
    setState(v => (v === States.BLOCS ? States.TEMPLATES : States.BLOCS))
  }, [])
  const hasTemplates = templates.length > 0
  const showEmpty = data.length === 0 && hasTemplates
  const isTemplateMode = state === States.TEMPLATES

  return (
    <div className='editor__sidebar' {...props}>
      <SidebarHeader onClose={onClose}>
        {hasTemplates && (
          <button
            className='editor__sidebar-header-icon-button'
            type={'button'}
            onClick={prevent(toggleMode)}
            aria-label={t(isTemplateMode ? 'addComponent' : 'useTemplate')}
          >
            <Icon name={isTemplateMode ? 'bloc' : 'template'} />
          </button>
        )}
      </SidebarHeader>
      {state === States.BLOCS &&
        (showEmpty ? (
          <SidebarEmpty onAction={() => setState(States.TEMPLATES)} />
        ) : (
          <SidebarBlocs data={data} />
        ))}
      {state === States.TEMPLATES && (
        <SidebarTemplates onTemplate={() => setState(States.BLOCS)} />
      )}
      <SidebarFooter />
    </div>
  )
}
