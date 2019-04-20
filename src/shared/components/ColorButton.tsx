import React from 'react'

interface Props {
  color: string
  shape: 'round' | 'square'
  selected?: boolean
}

function ColorButton({ color, shape, selected = false }: Props) {
  // classes for styling with tailwind
  const buttonShape = shape === 'square' ? 'rounded' : 'rounded-full'
  const border = selected ? 'shadow-select' : ''

  return (
    <button
      className={`bg-${color} hover:bg-${color}-light w-6 h-6 ${buttonShape} ml-2 ${border}`}
    />
  )
}

export default ColorButton
