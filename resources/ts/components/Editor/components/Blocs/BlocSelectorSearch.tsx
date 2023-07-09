import { IconSearch } from '@/components/Editor/components/ui'
import { t } from '@/components/Editor/functions/i18n'

type BlocSelectorSearchProps = {
  value: string
  onChange: (v: string) => void
}

export function BlocSelectorSearch({
  value,
  onChange,
}: BlocSelectorSearchProps) {
  return (
    <div className={'editor__bloc-selector-search'}>
      <input
        type='search'
        placeholder={t('searchComponent')}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <IconSearch size={14} />
    </div>
  )
}
