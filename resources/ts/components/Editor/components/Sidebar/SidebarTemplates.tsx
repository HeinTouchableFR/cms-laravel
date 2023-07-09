import { useSetData, useTemplates } from '@/components/Editor/store'
import { useCallback, useState } from 'react'
import { EditorComponentTemplate } from '@/components/Editor/types'
import { prevent } from '@/functions/functions'
import Loader from '@/components/Loader'

export function SidebarTemplates({ onTemplate }: { onTemplate: () => void }) {
  const templates = useTemplates()
  const setData = useSetData()
  const [loadingTemplate, setLoadingTemplate] =
    useState<EditorComponentTemplate>()
  const callback = useCallback(
    async (t: EditorComponentTemplate) => {
      setLoadingTemplate(t)
      let data: EditorComponentTemplate['data']
      if (typeof t.data === 'function') {
        setLoadingTemplate(t)
        data = await t.data().catch(() => [])
        setLoadingTemplate(t)
      } else {
        data = t.data
      }
      setData(data)
      onTemplate()
    },
    [setData, onTemplate],
  )
  return (
    <div className='editor__sidebar-templates'>
      {templates.map(t => (
        <TemplateCard
          template={t}
          onClick={callback}
          loading={loadingTemplate === t}
        />
      ))}
    </div>
  )
}

function TemplateCard({
  template,
  onClick,
  loading,
}: {
  template: EditorComponentTemplate
  onClick: (t: EditorComponentTemplate) => void
  loading: boolean
}) {
  return (
    <div
      className={`editor__sidebar-templates-card ${loading && 'loading'}`}
      onClick={prevent(() => (loading ? null : onClick(template)))}
    >
      {loading && <Loader />}
      <img src={template.image} alt='' />
      <div className='editor__sidebar-templates-card-body'>
        <div className='editor__sidebar-templates-card-body-title'>
          {template.name}
        </div>
        <div>{template.description}</div>
      </div>
    </div>
  )
}
