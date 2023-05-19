type Props = {
  name: string
  size?: number
  path?: string
}

export default function Icon({ name, size, path = 'sprite.svg' }: Props) {
  const className = `icon icon-${name}`
  const href = `/${path}#${name}`
  return (
    <svg className={className} width={size} height={size}>
      <use xlinkHref={href} />
    </svg>
  )
}
