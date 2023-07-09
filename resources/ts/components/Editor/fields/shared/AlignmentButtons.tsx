import { PropsWithChildren } from 'react'

export const AlignmentButtons = ({ children }: PropsWithChildren<{}>) => {
  return <div className={'editor__field alignment-buttons'}>{children}</div>
}
