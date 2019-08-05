import React from 'react'
import Header from './Header'
import { renderWithRouter } from '../../shared/utils/test.utils'

describe('<Header />', () => {
  test('it should render the logo', () => {
    const { getByText } = renderWithRouter(<Header />)
    expect(getByText(/reader/i)).toBeDefined()
  })
})
