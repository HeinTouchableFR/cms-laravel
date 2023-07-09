import {
  EditorComponentData,
  EditorComponentDefinition,
} from '@/components/Editor/types'
import { useUpdateData } from '@/components/Editor/store'
import { FieldsRenderer } from '@/components/Editor/components/Sidebar/FieldsRenderer'

type SidebarFieldsProps = {
  fields: EditorComponentDefinition['fields']
  data: EditorComponentData
  path: string
}

export function SidebarFields({ fields, data, path }: SidebarFieldsProps) {
  const updateData = useUpdateData()
  return (
    <FieldsRenderer
      fields={fields}
      data={data}
      onUpdate={updateData}
      path={path}
    />
  )
}
