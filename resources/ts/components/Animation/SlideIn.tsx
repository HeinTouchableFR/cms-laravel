import {PropsWithChildren, useEffect, useState} from 'preact/hooks'

type SlideInProps = PropsWithChildren<{
    show: boolean
}>

export function SlideIn({
                            show,
                            children,
                            style = {},
                            forwardedRef = null,
                            ...props
                        }) {
    const [shouldRender, setRender] = useState(show)

    useEffect(() => {
        if (show) {
            setRender(true)
        } else {
            setRender(false)
        }
    }, [show])

    const onAnimationEnd = e => {
        if (!show && e.animationName === 'slideOut') setRender(false)
    }

    return (
        shouldRender && (
            <div
                style={{
                    animation: `${show ? 'slideIn' : 'slideOut'} .3s both`,
                    ...style,
                }}
                onAnimationEnd={onAnimationEnd}
                ref={forwardedRef}
                {...props}
            >
                {children}
            </div>
        )
    )
}
