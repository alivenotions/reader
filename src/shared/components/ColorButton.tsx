import React from 'react'

interface Props {
  color: string
  shape: 'round' | 'square'
  isSelected?: boolean
}

function ColorButton({ color, shape, isSelected = false }: Props) {
  // classes for styling with tailwind
  const buttonShape = shape === 'square' ? 'rounded' : 'rounded-full'
  const border = isSelected ? 'shadow-select' : ''

  return (
    <button
      className={`bg-${color} hover:bg-${color}-light w-6 h-6 ${buttonShape} ml-2 ${border}`}
    />
  )
}

export default ColorButton
