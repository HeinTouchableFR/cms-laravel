import { CSSProperties } from 'react'
import { FieldGroupComponent } from '@/components/Editor/types'
import { Field, Flex } from '@/components/Editor/components/ui'
import { defineFieldGroup } from '@/components/Editor/fields/utils'

type RowArgs = {
  label?: string
  columns?: string
}

const RowComponent: FieldGroupComponent<RowArgs> = ({ options, children }) => {
  console.log(options.columns)
  return (
    <Field label={options.label}>
      <Flex
        className={`editor__field row ${options.columns && 'grid'}`}
        style={{ '--row-columns': options.columns || '' } as CSSProperties}
      >
        {children}
      </Flex>
    </Field>
  )
}

export const Row = defineFieldGroup<RowArgs>({
  defaultOptions: {},
  render: RowComponent,
})
