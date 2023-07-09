import { t } from '@/components/Editor/functions/i18n'
import { EditorComponentDefinitions } from '@/components/Editor/types'
import {
  useAddBlock,
  useBlocSelectionVisible,
  useFieldDefinitions,
  useHiddenCategories,
  useSetBlockIndex,
} from '@/components/Editor/store'
import { useEffect, useMemo, useState } from 'react'
import { Modal, Tabs } from '@/components/Editor/components/ui'
import { BlocSelectorGrid } from '@/components/Editor/components/Blocs/BlocSelectorGrid'
import { BlocSelectorItem } from '@/components/Editor/components/Blocs/BlocSelectorItem'
import { BlocSelectorSearch } from '@/components/Editor/components/Blocs/BlocSelectorSearch'

const ALL_TAB = 'Tous les blocs'

type BlocSelectorProps = {
  iconsUrl: string
}

export function BlocSelector({ iconsUrl }: BlocSelectorProps) {
  const isVisible = useBlocSelectionVisible()
  const setBlockIndex = useSetBlockIndex()
  const [search, setSearch] = useState('')
  const definitions = useFieldDefinitions()
  const hiddenCategories = useHiddenCategories()
  const addBlock = useAddBlock()
  const categories = useMemo(() => {
    return [
      ALL_TAB,
      ...Object.values(definitions)
        .filter(d => d.category)
        .filter(d => !hiddenCategories.includes(d.category ?? ''))
        .reduce(
          (acc, d) => (acc.includes(d.category!) ? acc : [...acc, d.category!]),
          [] as string[],
        ),
    ]
  }, [definitions])

  useEffect(() => {
    setSearch('')
  }, [isVisible])

  if (!isVisible) {
    return null
  }

  const handleVisibilityChange = (v: any) => {
    setBlockIndex(null)
  }

  return (
    <Modal
      visible={isVisible}
      onVisibilityChange={handleVisibilityChange}
      title={t('addComponent')}
    >
      <div className={'editor__bloc-selector'}>
        <BlocSelectorSearch value={search} onChange={setSearch} />
        <Tabs>
          {categories.map(category => (
            <BlocSelectorGrid key={category} title={category}>
              {Object.keys(definitions)
                .filter(
                  key =>
                    !hiddenCategories.includes(
                      definitions[key]!.category ?? '',
                    ),
                )
                .filter(searchDefinition(search ?? '', category, definitions))
                .map(key => (
                  <BlocSelectorItem
                    key={key}
                    definition={definitions[key]!}
                    name={key}
                    iconsUrl={iconsUrl}
                    onClick={() => addBlock(key)}
                  />
                ))}
            </BlocSelectorGrid>
          ))}
        </Tabs>
      </div>
    </Modal>
  )
}

function searchDefinition(
  search: string,
  category: string,
  definitions: EditorComponentDefinitions,
) {
  return (key: string) => {
    const categoryFilter =
      category === ALL_TAB ? true : definitions[key]!.category === category
    const searchFilter =
      search === ''
        ? true
        : definitions[key]!.title.toLowerCase().includes(search.toLowerCase())
    return categoryFilter && searchFilter
  }
}
