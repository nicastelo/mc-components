import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import LoggedInHeader from '../LoggedInHeader'

const infoProps = {
  inline: true,
  header: false,
}

const menuLinks = [
  { label: 'My Classes', url: '/', helpText: '3 Classes' },
  { label: 'Notifications', url: '/notifications' },
  { label: 'The hub', url: '/' },
  { label: 'Sign out', url: '/sign_out' },
]

storiesOf('LoggedInHeader', module)
  .add('default',
    withInfo({ ...infoProps })(() =>
      <LoggedInHeader
        menuLinks={menuLinks}
      />,
    ),
  )
