import { t } from '@/components/Editor/functions/i18n'
import { EditorComponentData } from '@/components/Editor/types'
import { useEffect, useRef, useState } from 'react'
import { copyToClipboard } from '@/functions/browser'
import { stringifyFields } from '@/functions/object'
import {
  ButtonIcon,
  IconCheck,
  IconCode,
  Tooltip,
} from '@/components/Editor/components/ui'
import { prevent } from '@/functions/functions'

type CopyActionProps = {
  data: EditorComponentData | EditorComponentData[]
  size?: number
}

export function CopyAction({ data, size, ...props }: CopyActionProps) {
  const [success, setSuccess] = useState(false)
  const timer = useRef<number>()
  const handleCopy = async () => {
    try {
      await copyToClipboard(stringifyFields(data))
      setSuccess(true)
      timer.current = window.setTimeout(() => {
        setSuccess(false)
      }, 4000)
    } catch (e) {
      alert(e)
    }
  }
  const tooltipLabel = Array.isArray(data) ? t('copyPage') : t('copyComponent')

  useEffect(() => {
    clearTimeout(timer.current)
  }, [])

  return (
    <Tooltip
      content={
        success ? (
          <>
            {t('copySuccess')}
            <br />
            {t('copyInstructions')}
          </>
        ) : (
          tooltipLabel
        )
      }
      trigger='focus'
    >
      <div>
        <ButtonIcon onClick={prevent(handleCopy)} success={success} {...props}>
          {success ? <IconCheck size={size} /> : <IconCode size={size} />}
        </ButtonIcon>
      </div>
    </Tooltip>
  )
}
