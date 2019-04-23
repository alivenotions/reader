import React, { ReactElement } from 'react'
import Switch from 'react-switch'

import ColorButton from '../../shared/components/ColorButton'
import HEX_PALETTE, { ThemeColors } from '../../shared/constants/colors'
import { SettingsContext } from '../../shared/context'

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

function Settings() {
  const [, setOpenInNewTab] = React.useState(false)
  const [, setShowNotifications] = React.useState(true)

  const { currentTheme, openInNewTab, showNotifications } = React.useContext(
    SettingsContext
  )

  const switchStyle = {
    height: 26,
    width: 48,
    handleDiameter: 18,
    uncheckedIcon: false,
    checkedIcon: false,
    onColor: HEX_PALETTE[currentTheme],
  }

  return (
    <div className={`${FONT_CLASSES} ${RESPONSIVE_MARGIN_CLASSES}`}>
      <SettingRow
        title="Open posts in new tab"
        component={
          <Switch
            onChange={checked => setOpenInNewTab(checked)}
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
            onChange={checked => setShowNotifications(checked)}
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
                  shape="round"
                  isSelected={isSelected}
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
