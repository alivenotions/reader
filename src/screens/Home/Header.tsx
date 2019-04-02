import React from 'react'

interface Props {
  title: string
}

const Header = ({ title }: Props) => {
  return (
    <span className="text-teal-dark pl-1 pr-2 text-5xl border-teal-darkest border-solid border-4 tracking-tight font-display font-bold">
      {title}
    </span>
  )
}

export default Header
