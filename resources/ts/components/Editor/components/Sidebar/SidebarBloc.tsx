import { memo, useMemo, useRef } from 'react'
import {
  useFieldFocused,
  useRemoveBloc,
  useSetFocusIndex,
} from '@/components/Editor/store'
import { useToggle, useUpdateEffect } from '@/functions/hooks'
import { strToDom } from '@/functions/dom'
import {
  EditorComponentData,
  EditorComponentDefinition,
} from '@/components/Editor/types'
import { SidebarBlocMissing } from '@/components/Editor/components/Sidebar/SidebarBlocMissing'
import { SidebarHeading } from '@/components/Editor/components/Sidebar/SidebarHeading'
import {
  ButtonIcon,
  Flex,
  IconDown,
  IconTrash,
} from '@/components/Editor/components/ui'
import { prevent } from '@/functions/functions'
import { t } from '@/components/Editor/functions/i18n'
import { SidebarBlocWrapper } from '@/components/Editor/components/Sidebar/SidebarBlocWrapper'
import { SidebarFields } from '@/components/Editor/components/Sidebar/SidebarFields'
import { CopyAction } from '@/components/Editor/components/Sidebar/Actions/CopyAction'

type SidebarBlocProps = {
  data: EditorComponentData
  definition?: EditorComponentDefinition
  path: string
}

export const SidebarBloc = memo(function SidebarItem({
  data,
  definition,
  path,
}: SidebarBlocProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isFocused = useFieldFocused(data._id)
  const [isCollapsed, toggleCollapsed, setCollapsed] = useToggle(!isFocused)
  const removeBloc = useRemoveBloc()
  const setFocusIndex = useSetFocusIndex()
  const label =
    definition?.label && data[definition.label] ? data[definition.label] : null

  // Scroll vers l'élément lorsqu'il a le focus
  useUpdateEffect(() => {
    if (isFocused) {
      setCollapsed(false)
      window.setTimeout(
        () =>
          ref.current!.scrollIntoView({ behavior: 'smooth', block: 'start' }),
        100,
      )
    } else {
      setCollapsed(true)
    }
  }, [isFocused])

  const labelHTMLSafe = useMemo(
    () => (label?.includes('<') ? strToDom(label).innerText : label),
    [label],
  )

  const handleRemove = () => {
    removeBloc(data)
  }

  const focusBloc = () => {
    if (isCollapsed) {
      setFocusIndex(path)
    }
    toggleCollapsed()
  }

  if (!definition) {
    return <SidebarBlocMissing data={data} />
  }

  return (
    <SidebarBlocWrapper item={data}>
      <SidebarHeading
        ref={ref}
        title={definition.title}
        description={isCollapsed ? labelHTMLSafe : null}
        onClick={prevent(focusBloc)}
      >
        <SidebarHeading>
          <CopyAction data={data} size={20} />
          <ButtonIcon
            danger
            onClick={handleRemove}
            title={t('deleteComponent')}
          >
            <IconTrash size={20} />
          </ButtonIcon>
        </SidebarHeading>
        <ButtonIcon
          rotate={isCollapsed ? -90 : 0}
          onClick={prevent(toggleCollapsed)}
        >
          <IconDown size={20} />
        </ButtonIcon>
      </SidebarHeading>
      {!isCollapsed && (
        <Flex column gap={1}>
          <SidebarFields fields={definition.fields} data={data} path={path} />
        </Flex>
      )}
    </SidebarBlocWrapper>
  )
})
