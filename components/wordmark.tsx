interface WordmarkProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Wordmark({ size = "md", className = "" }: WordmarkProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl sm:text-3xl",
  }

  return (
    <span className={`font-[var(--font-dancing)] tracking-wide ${sizeClasses[size]} ${className}`}>
      <span className="text-amber-400">Vision</span>
      <span className="text-white">Paper</span>
    </span>
  )
}
