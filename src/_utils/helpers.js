import _ from 'ramda'

// IMPORT FUNCTORS _____________________________________________________________
import {
  windowGetInnerHeight
} from './functors/Window'

export const run = _.curry((monad, value) => monad.run(value))

export const log = _.curry((label, value) => {
  return value
})

export const checkIfiOS = _.curry((win: {MSStream: any}, nav: {userAgent: string}) => {
  return /iPad|iPhone|iPod/.test(nav.userAgent) && !win.MSStream
})

// isPositionBeyondTop :: number a -> boolean b
export const isPositionBeyondTop = (winTopPosition: number): boolean =>
  winTopPosition < 0

// isPositionOnTop :: number a -> boolean b
export const isPositionAtTop = (winTopPosition: number): boolean =>
  winTopPosition >= 0 && winTopPosition <= 50

// isPositionOnBottom :: number a -> number b -> boolean c
export const isPositionAtBottom = _.curry(
  (winBottomPosition: number, docHeight: number): boolean =>
    winBottomPosition >= (docHeight - 70) && winBottomPosition <= docHeight
)

// isPositionBeyondBottom :: number a -> number b -> boolean c
export const isPositionBeyondBottom = _.curry(
  (winBottomPosition: number, docHeight: number): boolean =>
    winBottomPosition > docHeight
)

// isPositionInMiddle :: number a -> number b -> number c -> boolean d
export const isPositionInMiddle = _.curry(
  (winTopPosition: number, winBottomPosition: number, docHeight: number): boolean =>
    !(isPositionAtTop(winTopPosition) ||
      isPositionAtBottom(winBottomPosition, docHeight)
    )
)

// SMALL GETTERS _______________________________________________________________
export function getScreenBottom(position: number) {
  const windowHeight = windowGetInnerHeight.run()

  return position + windowHeight
}

/**
 * Checks the screen position and returns a string with the three possible values:
 * - `beyondTop`. If screen is being dragged beyond the top position of the
 * document.
 * - `top`. If screen is on top.
 * - `middle`. If screen is neither on top nor on bottom.
 * - `bottom`. If the screen is at the bottom of the page.
 * - `beyondBottom`. If the screen is being dragged beyond the bottom position
 * of the document.
 *
 * @param  {number} winTopPosition The top position of the window
 * @param  {number} winBottomPosition The bottom position of the window
 * @param  {number} docHeight Height of `document` in pixels
 * @return {string}                String that represents window position
 */
export const getScreenPosition = _.curry(
  (winTopPosition: number, winBottomPosition: number, docHeight: number): string => {
    if(isPositionBeyondTop(winTopPosition)) return 'beyondTop'
    if(isPositionAtTop(winTopPosition)) return 'top'
    if(isPositionAtBottom(winBottomPosition, docHeight)) return 'bottom'
    if(isPositionBeyondBottom(winBottomPosition, docHeight)) return 'beyondBottom'
    return 'middle'
  }
)

/**
 * Checks which direction the scroll is happening, in this case scroll can be
 * either: `up` and `down`.
 *
 * @param  {number} currentWinTop The current top position from scroll event.
 * @param  {number} previousWinTop Top position stored in the state of the app.
 * @return {string}               String that represents the movement either up or down.
 */
export const getScrollDirection = (deltaY: number): string => {
  if(deltaY === false) return ''
  return deltaY < 0 ? 'up' : 'down'
}
