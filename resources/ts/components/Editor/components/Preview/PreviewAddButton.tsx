import { prevent } from '@/functions/functions'
import { useSetBlockIndex } from '@/components/Editor/store'
import Icon from "@/components/Icon";

type PreviewAddButtonProps = {
  position: number
}

export function PreviewAddButton({ position }: PreviewAddButtonProps) {
  const setAddBlockIndex = useSetBlockIndex()

    const handleClick = () => {
        prevent(() => setAddBlockIndex(position))
    }

  return (
    <div className={'editor__preview-addButton m-2 p-2'}>
      <button
        type={'button'}
        onClick={handleClick}
        className="p-1"
      >
          <Icon name="plus" size={20} additionalClass="m-right-1" />
        Ajouter un bloc
      </button>
    </div>
  )
}
