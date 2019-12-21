import React from 'react'
import Header from './Header'
import { renderWithRouter } from '../../shared/utils/test.utils'

describe('<Header />', () => {
  it('should render the logo', () => {
    const { getByText } = renderWithRouter(<Header />)
    expect(getByText(/reader/i)).toBeDefined()
  })

  it('should go to the settings page when the settings icon is clicked', () => {
    const { getByLabelText } = renderWithRouter(<Header />)
    const settingsButton = getByLabelText(/settings/)

    expect(settingsButton).toHaveAttribute('href', '/settings')
  })
})
