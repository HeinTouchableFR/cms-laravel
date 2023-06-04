import { prevent } from '@/functions/functions'
import { useSetBlockIndex } from '@/components/Editor/store'

type PreviewAddFloatingProps = {
  position: number
}

export function PreviewAddFloating({ position }: PreviewAddFloatingProps) {
  const setAddBlockIndex = useSetBlockIndex()

  return (
    <button
      className={'addButtonFloating'}
      // @ts-ignore
      onClick={prevent(() => setAddBlockIndex(position))}
    >
      <span>Ajouter un bloc</span>
    </button>
  )
}
