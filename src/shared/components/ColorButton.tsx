import React from 'react'

interface Props {
  color: string
  shape: 'round' | 'square'
  selected?: boolean
}

function ColorButton({ color, shape, selected = false }: Props) {
  // classes for styling with tailwind
  const buttonShape = shape === 'square' ? 'rounded' : 'rounded-full'
  const border = selected ? 'border-black border-2' : 'border-white border-2'

  return (
    <button className={`bg-${color} w-8 h-8 ${buttonShape} ml-1 ${border}`} />
  )
}

export default ColorButton
