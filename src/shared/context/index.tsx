import React from 'react'
import { ColorPalette } from '../constants/colors'

const settingsInitialState: State = {
  openInNewTab: true,
  showNotifications: true,
  currentTheme: 'teal',
}

export interface State {
  openInNewTab: boolean
  showNotifications: boolean
  currentTheme: ColorPalette
}

export const SettingsContext = React.createContext(settingsInitialState)

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  return (
    <SettingsContext.Provider value={settingsInitialState}>
      {children}
    </SettingsContext.Provider>
  )
}
