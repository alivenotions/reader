import React from 'react'
import styled from '@emotion/styled'

import { PRIMARY, DARK_PRIMARY } from '../../shared/constants/palette'

const Title = styled.h1`
  color: ${PRIMARY};
  display: inline;
  font-family: sans-serif;
  box-shadow: 0 -6px 0 0 ${DARK_PRIMARY} inset;
`

interface Props {
  title: string
}

const Header = ({ title }: Props) => {
  return <Title>{title} </Title>
}

export default Header
