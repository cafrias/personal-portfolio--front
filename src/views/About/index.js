// @flow
import React from 'react'

// ASSETS ______________________________________________________________________
import headingImg from './AboutHeading'

// COMPONENTS __________________________________________________________________
import ArticleLine from '../../components/ArticleLine'
import PageTemplate from '../../components/PageTemplate'
import TextArticle from '../../components/TextArticle'

// DATA ________________________________________________________________________
import { education, interests } from './_data'

// TYPES _______________________________________________________________________
import type { NormalPageProps } from '../../_types'

// COMPONENT DEFINITION ________________________________________________________
const About = (props: NormalPageProps) => {
  const { ready } = props

  return (
    <div className="template-container">
      <TextArticle heading="bio" ready={ready}>
        <p>
          Straight from the south of Argentina, Rio Grande, I grew up to
          become a <strong>COMPUTER GEEK</strong> (proudly). Since I was a little boy,
          I’ve been around computers and other small devices, like watches, as
          well.
        </p>
        <p>
          Eventually I started my college days as Musical Arts Student, and
          fall in love with Classical Music and Jazz. I played in a
          Jazz Quartet while living in Tucuman, Argentina, until I later discovered that I didn't
          want to live off the music.
        </p>
        <p>
          After a couple of years of experimenting, I went back to my roots and
          started studying <strong>Computer Programming</strong>, and finally
          found my vocation.
        </p>
        <p>
          In the present day, I like to focus all my time to{' '}
          <strong>delivering Great Experiences</strong>,
          that doesn’t only cover the mandatory guidelines, but also give an
          extra value to users, clients, designers and developers, through
          innovation and good practices.
        </p>
        <p>
          Curious by nature, I keep constantly learning and practicing new skills and technologies.
        </p>
      </TextArticle>

      {/* <ArticleLine heading="Education" entries={education} /> */}

      <ArticleLine heading="Interests" entries={interests} theme="mono" />
    </div>
  )
}

const configObj = {
  topNavArrowLabel: 'Home',
  bottomNavArrowLabel: 'Skills',
  previousPage: '/',
  nextPage: '/skills',
  headingImg,
  headingAriaLabel: 'About'
}

export const AboutTesting = PageTemplate(About, configObj, true)

export default PageTemplate(About, configObj)
