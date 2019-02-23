/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, css, keyframes } from '@emotion/core'

const continueAnim = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const strokeAnim = keyframes`
  0% {
    stroke-dasharray: 1, 300;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 120, 300;
    stroke-dashoffset: -58.548324585;
  }
  100% {
    stroke-dasharray: 120, 300;
    stroke-dashoffset: -175.6449737549;
  }
`

const spinnerCSS = css`
  width: 66px;
  height: 66px;
  animation: ${continueAnim} 2s linear infinite;
`

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  transform: rotate(-90deg);
`

const getCircleStyles = (strokeColor: string, animMultiplier: string) => {
  return css`
    stroke: ${strokeColor};
    stroke-dasharray: 1, 300;
    stroke-dashoffset: 0;
    animation: ${strokeAnim} 3s calc(0.2s * (${animMultiplier})) ease infinite;
    transform-origin: center center;
  `
}

const Spinner = () => (
  <div css={spinnerCSS}>
    <SVG viewBox="0 0 66 66">
      <circle
        css={getCircleStyles('#84EBBD', '1')}
        fill="none"
        strokeWidth="8"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="28"
      />
    </SVG>
    <SVG viewBox="0 0 66 66">
      <circle
        css={getCircleStyles('#4977EC', '2')}
        fill="none"
        strokeWidth="8"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="28"
      />
    </SVG>
    <SVG viewBox="0 0 66 66">
      <circle
        css={getCircleStyles('#F6BB67', '3')}
        fill="none"
        strokeWidth="8"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="28"
      />
    </SVG>
    <SVG viewBox="0 0 66 66">
      <circle
        css={getCircleStyles('#333841', '4')}
        fill="none"
        strokeWidth="8"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="28"
      />
    </SVG>
  </div>
)

export default Spinner
