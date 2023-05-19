import Icon from '@components/Icon'
import {slideUp} from '@functions/animation'
import {PropsWithChildren, useEffect, useRef, useState} from 'preact/hooks'

type Props = PropsWithChildren<{
    type?: string
    message?: string
    duration?: number
    isFloating?: boolean
    onClose?: () => void
    className?: string
}>

export function Alert({
                          type = 'success',
                          message = '',
                          duration = 3,
                          isFloating = false,
                          ...props
                      }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const [alertType, setAlertType] = useState(type)
    const [icon, setIcon] = useState('')

    useEffect(() => {
        if (type !== null || type !== undefined) {
            setAlertType(type)
            setIcon(type)
        }
        if (type === 'error' || type === null) {
            setAlertType('danger')
            setIcon('warning')
        }
        if (type === 'success') {
            setIcon('check')
        }
    }, [type])

    const close = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (ref.current) {
            const alertElement = ref.current as HTMLDivElement
            ref.current.classList.add('out')
            window.setTimeout(async () => {
                await slideUp(alertElement)
                alertElement.dispatchEvent(new CustomEvent('close'))
            }, 500)
        }
        e.preventDefault()
    }

    useEffect(() => {
        const timer = window.setTimeout(close, duration * 1000)
        return () => clearTimeout(timer)
    }, [duration])

    return (
        <div
            className={`alert alert-${alertType} ${isFloating ? 'is-floating' : ''}`}
            ref={ref}
        >
            <Icon name={icon}/>
            <div>{message}</div>
            <button className='alert-close' onClick={close}>
                <Icon name={'cross'}/>
            </button>
            <div
                className='alert__progress'
                style={{animationDuration: `${duration}s`}}
            ></div>
        </div>
    )
}
