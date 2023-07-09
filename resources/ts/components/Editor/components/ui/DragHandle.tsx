import { PropsWithChildren } from 'react'

export const DragHandle = ({ children }: PropsWithChildren) => {
  return <div className={'editor__draghandle'}>{children}</div>
}
