import React from 'react'

interface Props {
  height: string
  width: string
  className: string
}

function NewRSSFeedIcon({ height, width, className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.29 14.646c0 .748-.607 1.354-1.354 1.354-.749 0-1.356-.606-1.356-1.354 0-.747.607-1.353 1.355-1.353.748.001 1.355.606 1.355 1.353zm-2.71-5.237v2.004c2.521.025 4.567 2.068 4.592 4.587h2.008c-.026-3.629-2.965-6.566-6.6-6.591zm0-1.404c4.407.02 7.98 3.581 7.993 7.995h2.007c-.012-5.513-4.48-9.981-10-10v2.005z" />
    </svg>
  )
}

export default NewRSSFeedIcon
