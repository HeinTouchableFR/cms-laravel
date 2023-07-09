import { PropsWithChildren } from 'react'

export const Card = ({ children }: PropsWithChildren) => {
  return <div className={'editor__card'}>{children}</div>
}
