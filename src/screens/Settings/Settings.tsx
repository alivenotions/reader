import React, { ReactElement } from 'react'
import Switch from 'react-switch'

const responsiveMarginClasses = ` \
mt-16 \
xl:mr-24 xl:ml-24 \
lg:mr-20 lg:ml-20 \
md:mr-16 md:ml-16 \
sm:mr-12 sm:ml-12 \
mr-12 ml-12
`

const fontClasses = ` \
font-display \
xl:text-xl \
lg:text-lg \
md:text-base \
sm:text-sm \
text-sm
`

const switchStyle = {
  height: 26,
  width: 48,
  handleDiameter: 18,
  uncheckedIcon: false,
  checkedIcon: false,
}

function Settings() {
  const [darkMode, setDarkMode] = React.useState(false)
  const [openInNewTab, setOpenInNewTab] = React.useState(false)
  const [showNotifications, setShowNotifications] = React.useState(true)

  return (
    <div className={`${fontClasses} ${responsiveMarginClasses}`}>
      <SettingRow
        title="Dark Mode"
        component={
          <Switch
            onChange={checked => setDarkMode(checked)}
            checked={darkMode}
            ariaLabelledby="Dark Mode"
            {...switchStyle}
          />
        }
      />
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
