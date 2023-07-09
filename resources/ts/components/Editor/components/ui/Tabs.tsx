import type { ReactElement, ReactNode } from 'react'
import React, { useState } from 'react'
import {
  Tabs as RadixTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@radix-ui/react-tabs'

type TabsProps = {
  children: ReactNode
}
type TabProps = {
  children: ReactNode
  title: string
  className?: string
}

export function Tabs({ children, ...props }: TabsProps) {
  const childrenArray = React.Children.toArray(
    children,
  ) as ReactElement<TabProps>[]
  const [currentTab, setCurrentTab] = useState(childrenArray[0]?.props.title)
  return (
    <RadixTabs value={currentTab} onValueChange={setCurrentTab}>
      <TabsList className={'editor__tabslist'} {...props}>
        {childrenArray.map(child => (
          <TabsTrigger
            className={`editor__tabslist-button ${
              currentTab === child.props.title && 'selected'
            }`}
            value={child.props.title}
            key={child.props.title}
          >
            {child.props.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {childrenArray.map(child => (
        <TabsContent key={child.props.title} value={child.props.title}>
          {child}
        </TabsContent>
      ))}
    </RadixTabs>
  )
}

function Tab(props: TabProps) {
  return <div {...props} />
}

Tabs.Tab = Tab
