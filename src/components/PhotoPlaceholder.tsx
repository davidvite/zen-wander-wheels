type PhotoPlaceholderProps = {
  label: string
  aspect?: 'hero' | 'wide' | 'square'
  className?: string
  priority?: boolean
}

export function PhotoPlaceholder({
  label,
  aspect = 'wide',
  className = '',
  priority = false,
}: PhotoPlaceholderProps) {
  return (
    <figure
      className={`photo-placeholder photo-placeholder--${aspect} ${className}`.trim()}
      role="img"
      aria-label={label}
      data-priority={priority ? 'true' : undefined}
    >
      <span className="photo-placeholder__label" aria-hidden="true">
        {label}
      </span>
    </figure>
  )
}
