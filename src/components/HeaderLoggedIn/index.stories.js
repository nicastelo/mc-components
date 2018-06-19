import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import HeaderLoggedIn from '../HeaderLoggedIn'

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

storiesOf('HeaderLoggedIn', module)
  .add(
    'default',
    withInfo({ ...infoProps })(() => <HeaderLoggedIn menuLinks={menuLinks} />),
  )
  .add(
    'with avatar',
    withInfo({ ...infoProps })(() => (
      <HeaderLoggedIn
        menuLinks={menuLinks}
        avatar='https://graph.facebook.com/10156122473642900/picture?height=300&width=300'
      />
    )),
  )
