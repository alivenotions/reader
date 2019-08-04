import React from 'react'

import { ColorPalette } from '../../shared/constants/colors'

interface Props {
  color: ColorPalette
  shape: 'round' | 'square'
  isSelected?: boolean
  setTheme: (color: ColorPalette) => void
}

function ColorButton({ color, shape, isSelected = false, setTheme }: Props) {
  // classes for styling with tailwind
  const buttonShape = shape === 'square' ? 'rounded' : 'rounded-full'
  const border = isSelected ? 'shadow-select' : ''

  // TODO: make this accessible
  return (
    <button
      className={`bg-${color}-500 hover:bg-${color}-400 w-6 h-6 ${buttonShape} ml-2 ${border}`}
      onClick={() => setTheme(color)}
    />
  )
}

export default ColorButton
