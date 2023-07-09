import { EditorComponentData } from "@/components/Editor/types";
import { useFieldDefinitions } from "@/components/Editor/store";
import { PreviewItem } from "@/components/Editor/components/Preview/PreviewItem";
import { PreviewAddFloating } from "@/components/Editor/components/Preview/PreviewAddFloating";
import { PreviewAddButton } from "@/components/Editor/components/Preview/PreviewAddButton";
import { Flipper } from "react-flip-toolkit";

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
      <Flipper flipKey={data.map(d => d._id).join('_')}>
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
      </Flipper>
      <PreviewAddButton position={data.length} />
    </>
  )
}
