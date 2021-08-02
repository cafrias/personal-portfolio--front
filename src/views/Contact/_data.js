// @flow

// LOGOS _______________________________________________________________________
import twitterLogo from './_logos/TwitterLogo'
import githubLogo from './_logos/Github'
import linkedInLogo from './_logos/LinkedInLogo'
import gmailLogo from './_logos/GmailLogo'

// TYPES _____________________________________________________________________
import type { FunctionalComponent } from 'react-flow-types'

export type contactEntry = {
  logo: FunctionalComponent<Object>,
  sub: string,
  h: string,
  text: string,
  link: string
}

export const contactInfo = [
  {
    logo: githubLogo,
    sub: 'Code',
    h: 'Github',
    text: 'github.com/cafrias',
    link: 'https://github.com/cafrias'
  },
  {
    logo: twitterLogo,
    sub: 'Social',
    h: 'Twitter',
    text: '@friasdesign',
    link: 'https://twitter.com/friasdesign'
  },
  {
    logo: linkedInLogo,
    sub: 'Social',
    h: 'LinkedIn',
    text: 'linkedin.com/in/cafrias',
    link: 'https://www.linkedin.com/in/cafrias/'
  },
  {
    logo: gmailLogo,
    sub: 'E-mail',
    h: 'Gmail',
    text: 'carlos.a.frias@gmail.com',
    link: 'mailto:carlos.a.frias@gmail.com'
  }
]
