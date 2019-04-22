import React from 'react'

import { ColorPalette } from '../../shared/constants/colors'

interface Props {
  textSizeClasses: string
  color: ColorPalette
}

/**
 * TODO: Make this reusable and more general (add more sizes)
 */
function Logo({ textSizeClasses, color }: Props) {
  return (
    <span
      className={`text-${color}-dark pl-1 pr-2 ${textSizeClasses} border-${color}-darkest border-solid border-4 tracking-tight font-display font-bold`}
    >
      reader.
    </span>
  )
}

export default Logo
