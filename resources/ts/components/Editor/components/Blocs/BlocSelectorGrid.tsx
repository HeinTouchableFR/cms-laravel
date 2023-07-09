import { Tabs } from '@/components/Editor/components/ui'
import { PropsWithChildren } from 'react'

export function BlocSelectorGrid({
  title,
  children,
}: PropsWithChildren<{
  title: string
}>) {
  return (
    <Tabs.Tab className={'editor__bloc-selector-grid'} title={title}>
      {children}
    </Tabs.Tab>
  )
}
