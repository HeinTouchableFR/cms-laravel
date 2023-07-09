import { FunctionComponent, useMemo, useState } from 'react'
import { FieldComponent, FieldDefinition } from '@/components/Editor/types'
import { fillDefaults } from '@/components/Editor/functions/fields'
import { textContent, uniqId } from '@/functions/string'
import { deepSet } from '@/functions/object'
import { moveItem } from '@/components/Editor/functions/array'
import {
  Button,
  ButtonIcon,
  Field,
  IconCirclePlus,
  IconDown,
  IconTrash,
} from '@/components/Editor/components/ui'
import {
  Sortable,
  SortableWrapper,
} from '@/components/Editor/components/Sortable'
import { prevent } from '@/functions/functions'
import { useToggle } from '@/functions/hooks'
import { SidebarHeading } from '@/components/Editor/components/Sidebar/SidebarHeading'
import { FieldsRenderer } from '@/components/Editor/components/Sidebar/FieldsRenderer'
import { defineField } from '@/components/Editor/fields/utils'
import { t } from '@/components/Editor/functions/i18n'

type FieldValue = RepeaterLine[]

type FieldArgs = {
  label?: string
  min?: number
  max?: number
  addLabel?: string
  fields: FieldDefinition<any, any>[]
  collapsed?: string
  default?: FieldValue
}

type RepeaterLine = { _id: string; [key: string]: unknown }

const Component: FieldComponent<FieldArgs, FieldValue> = ({
  value: valueProps,
  onChange,
  options,
}) => {
  const value: RepeaterLine[] = valueProps ?? []
  const canAdd = !options.max || value.length < options.max
  const canRemove = !options.min || value.length > options.min
  const [lastAdditionIndex, setLastAdditionIndex] = useState(-1)

  const add = () => {
    onChange([
      ...value,
      fillDefaults({ _id: uniqId() }, options.fields) as RepeaterLine,
    ])
    setLastAdditionIndex(value.length)
  }

  const remove = (line: Object) => {
    onChange(value.filter(v => v !== line))
  }

  const updateProperty = (v: unknown, path: string) => {
    onChange(deepSet(value, path, v))
  }

  function handleMove(from: number, to: number) {
    onChange(moveItem(value, from, to))
  }

  return (
    <Field label={options.label}>
      <SortableWrapper items={value} onMove={handleMove}>
        <div className={`editor__field repeater`}>
          {value.map((line, k) => (
            <FieldLine
              key={line._id}
              line={line}
              index={k}
              onUpdate={updateProperty}
              onRemove={canRemove ? remove : null}
              options={options}
              defaultCollapsed={lastAdditionIndex !== k}
            />
          ))}
          {canAdd && (
            <div className={`editor__field repeater-footer`}>
              <Button secondary onClick={prevent(add)} icon={IconCirclePlus}>
                {options.addLabel}
              </Button>
            </div>
          )}
        </div>
      </SortableWrapper>
    </Field>
  )
}

const FieldLine: FunctionComponent<{
  line: RepeaterLine
  index: number
  onRemove: null | ((line: RepeaterLine) => void)
  onUpdate: (v: unknown, path: string) => void
  options: FieldArgs
  defaultCollapsed: boolean
}> = ({ line, index, onRemove, onUpdate, options, defaultCollapsed }) => {
  const [collapsed, toggleCollapsed] = useToggle(defaultCollapsed)

  const title = options.collapsed
    ? (line[options.collapsed] as string)
    : `#${index + 1}`
  const escapedTitle = useMemo(() => textContent(title), [title])

  return (
    <Sortable className={'repeater-item'} item={line}>
      <SidebarHeading onClick={prevent(toggleCollapsed)} title={escapedTitle}>
        <SidebarHeading>
          {onRemove && (
            <ButtonIcon
              danger
              onClick={() => onRemove(line)}
              title={t('deleteItem')}
            >
              <IconTrash size={20} />
            </ButtonIcon>
          )}
        </SidebarHeading>
        <ButtonIcon
          rotate={collapsed ? -90 : 0}
          onClick={prevent(toggleCollapsed)}
        >
          <IconDown size={24} />
        </ButtonIcon>
      </SidebarHeading>
      {!collapsed && (
        <div className={'repeater-item__body'}>
          <FieldsRenderer
            fields={options.fields}
            data={line}
            onUpdate={onUpdate}
            path={index.toString()}
          />
        </div>
      )}
    </Sortable>
  )
}

export const Repeater = defineField<FieldArgs, FieldValue>(() => ({
  defaultOptions: { addLabel: t('addItem'), fields: [], default: [] },
  render: Component,
}))
