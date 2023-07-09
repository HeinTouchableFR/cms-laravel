import Loader from '@/components/Loader'
import { PreviewModes, usePreviewMode } from '@/components/Editor/store'
import { EditorComponentData } from '@/components/Editor/types'
import { PHONE_HEIGHT } from '@/components/Editor/constants'
import { PreviewItems } from '@/components/Editor/components/Preview/PreviewItems'
import { useAsyncEffect } from '@/functions/hooks'
import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useWindowSize } from 'react-use'

type PreviewProps = {
  data: EditorComponentData[]
  previewUrl: string
}

/**
 * Affiche un aperçu du rendu de la page dans une iframe
 */
export function Preview({ data, previewUrl }: PreviewProps) {
  const iframe = useRef<HTMLIFrameElement>(null)
  const [iframeRoot, setIframeRoot] = useState<HTMLElement | null>(null)
  const initialHTML = useRef<Record<string, string>>({})
  const [loaded, setLoaded] = useState(false)
  const showSpinner = !loaded

  const previewMode = usePreviewMode()
  const { height: windowHeight } = useWindowSize()
  let transform = undefined

  if (previewMode === PreviewModes.PHONE && windowHeight < 844) {
    transform = { transform: `scale(${windowHeight / PHONE_HEIGHT})` }
  }

  // Gère le chargement de la preview initiale
  useAsyncEffect(async () => {
    // On génère le premier rendu de la page complète
    const r = await fetch(previewUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!r.ok) {
      return
    }

    // On écrit le contenu dans l'iframe
    const iframeDocument = iframe.current!.contentDocument!
    iframeDocument?.open()
    iframeDocument?.write(await r.text())
    iframeDocument?.close()
    const root = iframeDocument?.querySelector('#ve-components') as HTMLElement
    initialHTML.current = Array.from(root?.children).reduce(
      (acc, v, k) => ({ ...acc, [data[k]!._id]: v.outerHTML }),
      {},
    )
    root.innerHTML = ''
    setIframeRoot(root)
  }, [])

  return (
    <div className={'editor__preview'}>
      {showSpinner && <Loader width={40} dots={12} />}
      <iframe
        className={`${loaded ? 'loaded' : ''} ${
          previewMode === PreviewModes.PHONE ? 'mobile' : ''
        }`}
        ref={iframe}
        style={transform}
        onLoad={() => setLoaded(true)}
      />
      {iframeRoot &&
        createPortal(
          <PreviewItems
            data={data}
            initialHTML={initialHTML.current}
            previewUrl={previewUrl}
          />,
          iframeRoot,
        )}
    </div>
  )
}
