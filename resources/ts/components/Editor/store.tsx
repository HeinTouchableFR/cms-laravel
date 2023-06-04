import {
  EditorComponentData,
  EditorComponentDefinitions,
  EditorComponentTemplate,
} from '@/components/Editor/types'
import { InsertPosition } from '@/components/Editor/enum'
import { useCallback, useContext, useState } from 'preact/hooks'
import { fillDefaults } from '@/components/Editor/functions/fields'
import { createContext } from 'preact/compat'

export enum PreviewModes {
  PHONE,
  DESKTOP,
}

type State = {
  data: EditorComponentData[]
  templates: EditorComponentTemplate[]
  previousData: EditorComponentData[]
  definitions: EditorComponentDefinitions
  hiddenCategories: string[]
  focusIndex: null | string
  rollbackMessage: null | string
  previewMode: PreviewModes
  sidebarWidth: number
  addBlockIndex: number | null
  rootElement: HTMLElement
  insertPosition: InsertPosition
}

const sidebarWidth =
  typeof localStorage !== 'undefined'
    ? localStorage.getItem('veSidebarWidth')
    : 0

export const Context = createContext({})

export function StoreProvider({
  children,
  defaultData,
  definitions,
  hiddenCategories,
  rootElement,
  templates,
  insertPosition,
}: {
  children: any
  defaultData: EditorComponentData[]
  templates: EditorComponentTemplate[]
  definitions: EditorComponentDefinitions
  hiddenCategories: string[]
  rootElement: HTMLElement
  insertPosition: InsertPosition
}) {
  const [data, setData] = useState(defaultData)

  return (
    <Context.Provider
      value={{
        data,
        definitions,
        hiddenCategories,
        rootElement,
        templates,
        insertPosition,
        setSidebarWidth: function (width: number) {
          localStorage.setItem('veSidebarWidth', width.toString())
          set(() => ({
            sidebarWidth: width,
          }))
        },
      }}
    >
      {children}
    </Context.Provider>
  )
}

/*
export const store = create(set => ({
  updateData: function (newData: any, path?: string) {
    return set(state => ({
      data: deepSet(state.data, path, newData),
    }))
  },
  removeBloc: function (removedData: EditorComponentData) {
    return set(({ data }) => ({
      previousData: data,
      data: data.filter(d => d !== removedData),
      rollbackMessage: t('deleteItemConfirm'),
    }))
  },
  rollback: function () {
    return set(({ previousData }) => ({
      previousData: [],
      rollbackMessage: null,
      data: previousData,
    }))
  },
  voidRollback: function () {
    return set(() => ({
      rollbackMessage: null,
      previousData: [],
    }))
  },
  insertData: function (
    name: string,
    index: number,
    extraData?: object,
  ): EditorComponentData {
    const newData = {
      ...extraData,
      _name: name,
      _id: name + uniqId(),
    }
    set(state => {
      return {
        data: insertItem(state.data, index, newData),
        focusIndex: newData._id,
      }
    })
    return newData
  },
  setData: function (newData: Omit<EditorComponentData, '_id'>[]): void {
    set(() => {
      return {
        data: indexify(newData) as EditorComponentData[],
        focusIndex: null,
      }
    })
  },
  setFocusIndex: function (id: string) {
    set(() => ({ focusIndex: id }))
  },
  setAddBlockIndex: function (index?: number | null) {
    if (index === undefined) {
      set(state => ({
        addBlockIndex:
          state.insertPosition === InsertPosition.Start ? 0 : state.data.length,
      }))
      return
    }
    set(() => ({ addBlockIndex: index }))
  },
  togglePreviewMode: function () {
    set(({ previewMode }) => ({
      previewMode:
        previewMode === PreviewModes.DESKTOP
          ? PreviewModes.PHONE
          : PreviewModes.DESKTOP,
    }))
  },
}))
*/
export function useData() {
  const { data } = useContext(Context)
  return data
}

export function useRootElement() {
  const { rootElement } = useContext(Context)
  return rootElement
}

export function useUpdateData() {
  const { updateData } = useContext(Context)
  return updateData
}

export function useRemoveBloc() {
  const { removeBloc } = useContext(Context)
  return removeBloc
}

export function useInsertData() {
  const { insertData } = useContext(Context)
  return insertData
}

export function useSetData() {
  const { setData } = useContext(Context)
  return setData
}

export function useFocusIndex() {
  const { focusIndex } = useContext(Context)
  return focusIndex
}

export function useDefinitions() {
  const { definitions } = useContext(Context)
  return definitions
}

export function useSetFocusIndex() {
  const { setFocusIndex } = useContext(Context)
  return setFocusIndex
}

export function useFieldFocused(id: string) {
  const { focusIndex } = useContext(Context)
  return focusIndex === id
}

export function usePreviewMode() {
  const { previewMode } = useContext(Context)
  return previewMode
}

export function useTogglePreviewMode() {
  const { togglePreviewMode } = useContext(Context)
  return togglePreviewMode
}

export function useSidebarWidth() {
  const { sidebarWidth } = useContext(Context)
  return sidebarWidth
}

export function useSetSidebarWidth() {
  const { setSidebarWidth } = useContext(Context)
  return setSidebarWidth
}

export function useFieldDefinitions() {
  const { definitions } = useContext(Context)
  return definitions
}

export function useHiddenCategories() {
  const { hiddenCategories } = useContext(Context)
  return hiddenCategories
}

export function useBlocSelectionVisible(): boolean {
  const { addBlockIndex } = useContext(Context)
  return addBlockIndex !== null
}

export function useSetBlockIndex(): Function {
  const { setAddBlockIndex } = useContext(Context)
  return setAddBlockIndex
}

export function useTemplates(): EditorComponentTemplate[] {
  const { templates } = useContext(Context)
  return templates
}

export function useAddBlock() {
  const insertData = useInsertData()
  const { addBlockIndex: blockIndex } = useContext(Context)

  const definitions = useDefinitions()
  const setBlockIndex = useSetBlockIndex()
  return useCallback(
    (blocName: string) => {
      insertData(
        blocName,
        blockIndex || 0,
        fillDefaults({}, definitions[blocName]!.fields),
      )
      setBlockIndex(null)
    },
    [insertData, blockIndex || 0, definitions, setBlockIndex],
  )
}

export function useRollbackMessage() {
  const { rollbackMessage: message } = useContext(Context)
  const { rollback } = useContext(Context)
  const { voidRollback } = useContext(Context)
  return { message, rollback, voidRollback }
}
