import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../shared/components/Logo'
import NewRSSFeedIcon from '../../shared/components/NewRSSFeedIcon'
import SettingsIcon from '../../shared/components/SettingsIcon'

const Header = () => {
  return (
    <div className="flex justify-between">
      <Logo />
      <span className="flex items-center justify-center mr-10">
        <button
          title="Add New Feed"
          className="text-teal-darker hover:text-teal-dark mr-6"
        >
          <NewRSSFeedIcon height="40px" width="40px" className="fill-current" />
        </button>
        <Link
          to="/settings"
          title="Settings"
          className="text-teal-darker hover:text-teal-dark"
        >
          <SettingsIcon height="40px" width="40px" className="fill-current" />
        </Link>
      </span>
    </div>
  )
}

export default Header
