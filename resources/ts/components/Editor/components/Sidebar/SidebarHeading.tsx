import {
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  MouseEventHandler,
  PropsWithChildren,
  RefAttributes,
} from 'react'

type SidebarHeadingProps = PropsWithChildren<{
  title?: string
  description?: string
  onClick?: MouseEventHandler<HTMLElement>
}>
export const SidebarHeading = forwardRef<HTMLDivElement, SidebarHeadingProps>(
  (
    { children, onClick, title, description },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div className='editor__sidebar-heading' ref={ref}>
        <div className='editor__sidebar-heading-title' onClick={onClick}>
          <strong>{title}</strong>
          {description}
        </div>
        {children}
      </div>
    )
  },
) as ForwardRefExoticComponent<
  SidebarHeadingProps & RefAttributes<HTMLDivElement>
>
