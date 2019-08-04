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
    <h1
      className={`text-${color}-700 pl-1 pr-2 ${textSizeClasses} border-${color}-900 border-solid border-4 tracking-tight leading-tight font-display font-bold`}
    >
      reader.
    </h1>
  )
}

export default Logo
