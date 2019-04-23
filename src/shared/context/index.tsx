import React from 'react'
import { ColorPalette } from '../constants/colors'

const settingsInitialState: State = {
  openInNewTab: true,
  showNotifications: true,
  currentTheme: 'teal',
}

interface State {
  openInNewTab: boolean
  showNotifications: boolean
  currentTheme: ColorPalette
}

type SettingsAction =
  | { type: 'toggleOpenInNewTab' }
  | { type: 'toggleShowNotifications' }
  | { type: 'changeTheme'; theme: ColorPalette }

function settingsReducer(state: State, action: SettingsAction): State {
  switch (action.type) {
    case 'toggleOpenInNewTab':
      return { ...state, openInNewTab: !state.openInNewTab }
    case 'toggleShowNotifications':
      return { ...state, showNotifications: !state.showNotifications }
    case 'changeTheme':
      return { ...state, currentTheme: action.theme }
    default:
      return state
  }
}

export const SettingsContext = React.createContext(settingsInitialState)
export const SettingsDispatch = React.createContext((() => 0) as React.Dispatch<
  SettingsAction
>)

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(
    settingsReducer,
    settingsInitialState
  )
  return (
    <SettingsDispatch.Provider value={dispatch}>
      <SettingsContext.Provider value={state}>
        {children}
      </SettingsContext.Provider>
    </SettingsDispatch.Provider>
  )
}
