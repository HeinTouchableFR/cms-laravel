import { EditorComponentData } from "@/components/Editor/types";
import { useFieldDefinitions } from "@/components/Editor/store";
import { PreviewItem } from "@/components/Editor/components/Preview/PreviewItem";
import { PreviewAddFloating } from "@/components/Editor/components/Preview/PreviewAddFloating";
import { PreviewAddButton } from "@/components/Editor/components/Preview/PreviewAddButton";

/**
 * Gère le rendu dans l'iframe des différents composants
 */
export function PreviewItems({
  data,
  initialHTML = {},
  previewUrl,
}: {
  data: EditorComponentData[]
  initialHTML: Record<string, string>
  previewUrl: string
}) {
  const definitions = useFieldDefinitions()

  return (
    <>
      {data.map((v, k) => (
        <div key={v._id}>
          <PreviewAddFloating position={k} />
          <PreviewItem
            title={definitions[v._name]?.title || ''}
            data={v}
            initialHTML={initialHTML[v._id] || ''}
            previewUrl={previewUrl}
          />
        </div>
      ))}
      <PreviewAddButton position={data.length} />
    </>
  )
}
