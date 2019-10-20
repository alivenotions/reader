/**
 * This maintains colors that are there in
 * tailwind.config.css. This object is to be
 * used wherever raw values are to be passed
 * and classes can't be applied directly. Any
 * changes to tailwind.config.css color object
 * should be reflected here too.
 */
export default {
  black: '#000000',
  grey: '#A0AEC0',
  white: '#FFFFFF',
  red: '#F56565',
  orange: '#ED8936',
  yellow: '#ECC94B',
  green: '#48BB78',
  teal: '#38B2AC',
  blue: '#4299E1',
  indigo: '#667EEA',
  purple: '#9F7AEA',
  pink: '#ED64A6',
}

export type ColorPalette =
  | 'black'
  | 'grey'
  | 'white'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'

export const ThemeColors: { light: ColorPalette[] } = {
  light: ['red', 'orange', 'green', 'teal', 'blue', 'purple', 'pink'],
}
