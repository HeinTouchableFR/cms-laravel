import { EditorComponentDefinition } from '@/components/Editor/types'
import { prevent } from '@/functions/functions'

export function BlocSelectorItem({
  definition,
  name,
  iconsUrl,
  onClick,
}: {
  name: string
  definition: EditorComponentDefinition
  iconsUrl: string
  onClick: () => void
}) {
  const icon = iconsUrl.replace('[name]', name)
  const title = definition.title

  return (
    <button
      className={'editor__bloc-selector-grid-button'}
      onClick={prevent(onClick)}
    >
      <div className={'editor__bloc-selector-grid-button-image'}>
        <img src={icon} alt='' />
      </div>
      <div>{title}</div>
    </button>
  )
}
