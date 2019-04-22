/**
 * This maintains colors that are there in
 * tailwind.config.css. This object is to be
 * used wherever raw values are to be passed
 * and classes can't be applied directly. Any
 * changes to tailwind.config.css color object
 * should be reflected here too.
 */
export default {
  black: '#22292f',
  grey: '#b8c2cc',
  white: '#ffffff',
  red: '#e3342f',
  orange: '#f6993f',
  yellow: '#ffed4a',
  green: '#38c172',
  teal: '#4dc0b5',
  blue: '#3490dc',
  indigo: '#6574cd',
  purple: '#9561e2',
  pink: '#f66d9b',
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

export const ThemeColors = {
  light: ['red', 'orange', 'yellow', 'green', 'teal', 'blue', 'purple', 'pink'],
}
