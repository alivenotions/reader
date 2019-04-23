import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../shared/components/Logo'
import NewRSSFeedIcon from '../../shared/components/NewRSSFeedIcon'
import SettingsIcon from '../../shared/components/SettingsIcon'
import { SettingsContext } from '../../shared/context'

const Header = () => {
  const { currentTheme } = React.useContext(SettingsContext)

  return (
    <div className="flex justify-between">
      <Logo
        textSizeClasses="text-3xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl"
        color={currentTheme}
      />
      <span className="flex items-center justify-center">
        <button
          title="Add New Feed"
          className={`text-${currentTheme}-darker hover:text-${currentTheme}-dark mr-6`}
        >
          <NewRSSFeedIcon className="fill-current w-8 xl:w-10 lg:w-10 md:w-8 sm:w-8" />
        </button>
        <Link
          to="/settings"
          title="Settings"
          className={`text-${currentTheme}-darker hover:text-${currentTheme}-dark`}
        >
          <SettingsIcon className="fill-current w-8 xl:w-10 lg:w-10 md:w-8 sm:w-8" />
        </Link>
      </span>
    </div>
  )
}

export default Header
