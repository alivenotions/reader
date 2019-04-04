import React from 'react'

interface Props {
  textSizeClasses: string
}

/**
 * TODO: Make this reusable and more general
 */
function Logo({ textSizeClasses }: Props) {
  return (
    <span
      className={`text-teal-dark pl-1 pr-2 ${textSizeClasses} border-teal-darkest border-solid border-4 tracking-tight font-display font-bold`}
    >
      reader.
    </span>
  )
}

export default Logo
