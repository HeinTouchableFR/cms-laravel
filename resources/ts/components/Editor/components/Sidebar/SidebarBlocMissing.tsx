import { useRemoveBloc } from '@/components/Editor/store'
import { EditorComponentData } from '@/components/Editor/types'
import { Sortable } from '@/components/Editor/components/Sortable'
import { SidebarHeading } from '@/components/Editor/components/Sidebar/SidebarHeading'
import { t } from '@/components/Editor/functions/i18n'
import Icon from '@/components/Icon'
import { prevent } from '@/functions/functions'

type SidebarBlocMissingProps = {
  data: EditorComponentData
}

export function SidebarBlocMissing({ data }: SidebarBlocMissingProps) {
  const removeBloc = useRemoveBloc()
  return (
    <Sortable item={data} className='editor__sidebar-content-missing'>
      <div className='editor__sidebar-content-missing-wrapper'>
        <SidebarHeading title={`${t('unknownComponent')} : ${data._name}`}>
          <button onClick={prevent(() => removeBloc(data))}>
            <Icon name='trash' size={20} />
          </button>
        </SidebarHeading>
      </div>
    </Sortable>
  )
}
