import React, { ReactElement, useContext } from 'react'
import Switch from 'react-switch'

import ColorButton from '../../shared/components/ColorButton'
import HEX_PALETTE, {
  ThemeColors,
  ColorPalette,
} from '../../shared/constants/colors'
import { SettingsContext, SettingsDispatch } from '../../shared/context'

const RESPONSIVE_MARGIN_CLASSES = ` \
mt-16 \
xl:mr-24 xl:ml-24 \
lg:mr-20 lg:ml-20 \
md:mr-16 md:ml-16 \
sm:mr-12 sm:ml-12 \
mr-12 ml-12
`

const FONT_CLASSES = ` \
font-display \
xl:text-xl \
lg:text-lg \
md:text-base \
sm:text-sm \
text-sm
`

const COLOR_BUTTON_SHAPE = 'round'

function Settings() {
  const { currentTheme, openInNewTab, showNotifications } = useContext(
    SettingsContext
  )
  const dispatch = useContext(SettingsDispatch)

  const switchStyle = {
    height: 26,
    width: 48,
    handleDiameter: 18,
    uncheckedIcon: false,
    checkedIcon: false,
    onColor: HEX_PALETTE[currentTheme],
  }

  function setTheme(color: ColorPalette) {
    dispatch({ type: 'changeTheme', theme: color })
  }

  return (
    <div className={`${FONT_CLASSES} ${RESPONSIVE_MARGIN_CLASSES}`}>
      <SettingRow
        title="Open posts in new tab"
        component={
          <Switch
            onChange={() => dispatch({ type: 'toggleOpenInNewTab' })}
            checked={openInNewTab}
            ariaLabelledby="Open posts in new tab"
            {...switchStyle}
          />
        }
      />
      <SettingRow
        title="Show notifications"
        component={
          <Switch
            onChange={() => dispatch({ type: 'toggleShowNotifications' })}
            checked={showNotifications}
            ariaLabelledby="Show notifications"
            {...switchStyle}
          />
        }
      />
      <SettingRow
        title="Theme"
        component={
          <React.Fragment>
            {ThemeColors.light.map(color => {
              const isSelected = color === currentTheme
              return (
                <ColorButton
                  key={color}
                  color={color}
                  shape={COLOR_BUTTON_SHAPE}
                  isSelected={isSelected}
                  setTheme={setTheme}
                />
              )
            })}
          </React.Fragment>
        }
      />
    </div>
  )
}

function SettingRow({
  title,
  component,
}: {
  title: string
  component: ReactElement
}) {
  return (
    <div className="flex justify-between mt-2">
      <span>{title}</span>
      <span>{component}</span>
    </div>
  )
}

export default Settings
