import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h1`
  color: hotpink;
  display: inline;
  font-family: sans-serif;
  box-shadow: 0 -6px 0 0 #071f5a inset;
`

interface Props {
  title: string
}

const Header = ({ title }: Props) => {
  return <Title>{title} </Title>
}

export default Header
