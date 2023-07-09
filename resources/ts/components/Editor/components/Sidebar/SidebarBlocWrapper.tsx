import { Sortable } from '@/components/Editor/components/Sortable'
import { PropsWithChildren } from 'react'
import { IndexableObject } from '@/components/Editor/types'

type SidebarBlocWrapperProps = PropsWithChildren<{
  item: IndexableObject
}>

export const SidebarBlocWrapper = ({
  item,
  children,
}: SidebarBlocWrapperProps) => {
  return (
    <Sortable className={'editor__sidebar-content-item'} item={item}>
      {children}
    </Sortable>
  )
}
