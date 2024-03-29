import React from 'react'
import { StaggeredMotion, spring } from 'react-motion'
import { NavLink } from 'react-router-dom'

const MENU_ITEMS_TOP = [
  {
    name: 'about',
    link: '/about'
  },
  {
    name: 'skills',
    link: '/skills'
  },
  {
    name: 'contact',
    link: '/contact'
  }
]

const MENU_ITEMS = [
  {
    name: 'home',
    link: '/'
  },
  ...MENU_ITEMS_TOP
]

const STIFFNESS = 210
const DAMPING = 18

function TopList() {
  return (
    <ul className="nav__list top-nav__list">
      {
        MENU_ITEMS_TOP.map(({ link, name }, i) => (
          <li key={i}>
            <NavLink to={link} className="top-nav__link">
              {name}
            </NavLink>
          </li>
        ))
      }
    </ul>
  )
}

function List({ topNav }) {
  if (topNav) return TopList()

  return (
    <StaggeredMotion
      defaultStyles={MENU_ITEMS.map((item, i) => ({ x: 100, o: 0 }))}
      styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
        return i === 0
          // Initial stiffness and damping
          ? {
            x: spring(0, { stiffness: STIFFNESS, damping: DAMPING }),
            o: spring(1)
          }
          // Final stiffness and damping
          : {
            x: spring(prevInterpolatedStyles[i - 1].x, {
              stiffness: STIFFNESS, damping: DAMPING
            }),
            o: spring(prevInterpolatedStyles[i - 1].o)
          };
      })}
    >
      {interpolatingStyles =>
        <ul className="nav__list">
          {interpolatingStyles.map(({ x, o }, i) => {
            const styles = {
              transform: `translate(${x}px, 0)`,
              opacity: o
            }

            return (
              <li key={i} style={styles}>
                <NavLink to={MENU_ITEMS[i].link}
                  className="top-nav__link"
                  activeClassName="top-nav__link--active"
                  exact
                >
                  {MENU_ITEMS[i].name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      }
    </StaggeredMotion>
  )
}

export default List
