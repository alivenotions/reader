import React from 'react'
import Header from './Header'
import styled from '@emotion/styled'

const Layout = styled.div`
  margin: 2% 5%;
`

const Home = () => {
  return (
    <Layout>
      <Header title={'Reader'} />
    </Layout>
  )
}

export default Home
