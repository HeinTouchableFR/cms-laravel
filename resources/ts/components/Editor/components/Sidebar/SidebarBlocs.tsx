import { useFieldDefinitions, useUpdateData } from '@/components/Editor/store'
import { EditorComponentData } from '@/components/Editor/types'
import { moveItem } from '@/components/Editor/functions/array'
import { SortableWrapper } from '@/components/Editor/components/Sortable'
import { SidebarBloc } from '@/components/Editor/components/Sidebar/SidebarBloc'

export function SidebarBlocs({ data }: { data: EditorComponentData[] }) {
  const updateData = useUpdateData()
  const definitions = useFieldDefinitions()
  const handleMove = (from: number, to: number) => {
    updateData(moveItem(data, from, to))
  }

  return (
    <div className='editor__sidebar-content'>
      <SortableWrapper items={data} onMove={handleMove}>
        {data.map((v, k) => (
          <SidebarBloc
            key={v._id}
            data={v}
            definition={definitions[v._name]}
            path={`${k}`}
          />
        ))}
      </SortableWrapper>
    </div>
  )
}
