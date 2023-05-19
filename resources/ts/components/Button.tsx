import {PropsWithChildren} from 'preact/hooks'
import {classNames} from '@functions/dom'
import Loader from '@components/Loader'

type Props = PropsWithChildren<{
    className?: string
    size?: string
    loading?: boolean
    disabled?: boolean
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset' | undefined
}>

export function Button({
                           children,
                           className = 'primary',
                           loading = false,
                           size,
                           ...props
                       }: Props) {
    //@ts-ignore
    className = classNames('btn', `${className}`, size ? `btn-${size}` : '')
    return (
        <button className={className} disabled={loading} {...props}>
            {loading && <Loader className='icon'/>}
            {children}
        </button>
    )
}
