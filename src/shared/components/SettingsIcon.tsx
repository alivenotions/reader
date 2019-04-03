import React from 'react'

interface Props {
  width: string
  height: string
  className: string
}

function SettingsIcon({ width, height, className }: Props) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="">
        <g strokeDasharray="" strokeMiterlimit="10" textAnchor="none">
          <path d="m0 192v-192h192v192z" fill="none" />
          <g>
            <path
              d="m85.268 7.68c-1.8798 1e-3 -3.4826 1.3626-3.7875 3.2175l-3.735 22.868c-4.4912 1.3065-8.7738
          3.0693-12.81 5.265l-18.87-13.478c-1.5255-1.0894-3.6146-0.91817-4.9425 0.405l-14.94 14.925c-1.3179 1.3188-1.4982 3.3936-0.4275 4.92l13.275 18.99c-2.2295 4.0597-4.0314 8.3665-5.37 12.9l-22.77 3.7875c-1.849 0.31144-3.2027 1.9125-3.2025 3.7875v21.12c-0.00338 1.8631 1.331 3.4598 3.165 3.7875l22.785 4.035c1.3313 4.5256 3.1218 8.8354 5.355 12.9l-13.44 18.802c-1.0894 1.5255-0.91817 3.6146 0.405 4.9425l14.932 14.94c1.3158 1.3162 3.3859 1.4995 4.9125 0.435l19.028-13.32c4.0481 2.2086 8.3412 3.9844 12.848 5.3025l3.8025 22.898c0.30817 1.8519 1.9101 3.2096 3.7875 3.21h21.12c1.8655 0.00274 3.4631-1.3355 3.7875-3.1725l4.0725-22.988c4.4877-1.3382 8.7606-3.1404 12.788-5.3625l19.155 13.44c1.5264 1.0707 3.6012 0.89038 4.92-0.4275l14.932-14.948c1.3291-1.332 1.4974-3.4308 0.3975-4.9575l-13.658-18.96c2.1837-4.0076 3.9429-8.2549 5.25-12.712l23.108-4.05c1.837-0.32442 3.1752-1.922 3.1725-3.7875v-21.12c-1e-3 -1.8798-1.3626-3.4826-3.2175-3.7875l-23.07-3.7725c-1.3158-4.4523-3.0799-8.6921-5.265-12.698l13.47-19.192c1.0707-1.5264 0.89038-3.6012-0.4275-4.92l-14.94-14.932c-1.332-1.3291-3.4308-1.4974-4.9575-0.3975l-18.908 13.598c-4.0285-2.2132-8.3042-4.0058-12.802-5.3325l-4.02-22.98c-0.32119-1.84-1.9197-3.1821-3.7875-3.18zm3.27 7.68h14.625l3.825 21.832c0.26003 1.496 1.3771 2.6983 2.85 3.0675 5.616 1.3995 10.891 3.618 15.705 6.5325 1.3158 0.79723 2.9803 0.7323 4.23-0.165l17.97-12.915 10.342 10.342-12.795 18.232c-0.87308 1.2426-0.93188 2.883-0.15 4.185 2.8857 4.8036 5.0744 10.045 6.4725 15.63 0.37211 1.4867 1.5925 2.6099 3.105 2.8575l21.915 3.585v14.625l-21.96 3.855c-1.4972 0.26503-2.6971 1.3884-3.06 2.865-1.3819 5.5781-3.5719 10.819-6.4575 15.622-0.79171 1.3154-0.72387 2.976 0.1725 4.2225l12.975 18.008-10.342 10.35-18.202-12.772c-1.249-0.87489-2.8974-0.92787-4.2-0.135-4.7905 2.9145-10.07 5.1434-15.668 6.5625-1.4656 0.36947-2.5783 1.5643-2.8425 3.0525l-3.8775 21.84h-14.648l-3.615-21.742c-0.25148-1.5116-1.3775-2.7291-2.865-3.0975-5.6194-1.3851-10.918-3.6002-15.765-6.51-1.3001-0.77862-2.9366-0.71986-4.1775 0.15l-18.06 12.652-10.35-10.365 12.765-17.842c0.89168-1.2495 0.95362-2.91 0.1575-4.2225-2.9415-4.8605-5.1662-10.158-6.57-15.802-0.36691-1.4686-1.5622-2.5846-3.0525-2.85l-21.622-3.84v-14.648l21.608-3.5925c1.5096-0.25034 2.7265-1.373 3.0975-2.8575 1.4159-5.6636 3.6395-10.961 6.57-15.81 0.78959-1.3008 0.73664-2.9452-0.135-4.1925l-12.615-18.03 10.358-10.35 17.902 12.795c1.2447 0.8875 2.8972 0.9523 4.2075 0.165 4.8217-2.8959 10.132-5.0932 15.758-6.4725 1.4948-0.36801 2.6254-1.593 2.8725-3.1125zm7.4625 49.92c-16.921 0-30.72 13.799-30.72 30.72s13.799 30.72 30.72 30.72 30.72-13.799 30.72-30.72-13.799-30.72-30.72-30.72zm0 7.68c12.77 0 23.04 10.27 23.04 23.04s-10.27 23.04-23.04 23.04-23.04-10.27-23.04-23.04 10.27-23.04 23.04-23.04z"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default SettingsIcon
