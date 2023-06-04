import { Button } from '@/components/Button'
import { prevent } from '@/functions/functions'
import { useSetBlockIndex } from '@/components/Editor/store'

type PreviewAddButtonProps = {
  position: number
}

export function PreviewAddButton({ position }: PreviewAddButtonProps) {
  const setAddBlockIndex = useSetBlockIndex()

  return (
    <div className={'addButton'}>
      <Button
        type={'button'}
        onClick={prevent(() => setAddBlockIndex(position))}
      >
        Ajouter un bloc
      </Button>
    </div>
  )
}
