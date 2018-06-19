import React, { PureComponent } from 'react'
import { arrayOf, shape, bool, string } from 'prop-types'
import cn from 'classnames'

import NavBarMenuItem from '../NavBarMenuItem'

export default class NavBarMenu extends PureComponent {
  static propTypes = {
    isOpen: bool.isRequired,
    menuLinks: arrayOf(shape({
      label: string.isRequired,
      url: string.isRequired,
      helpText: string,
    })).isRequired,
  }

  render () {
    const { isOpen, menuLinks } = this.props

    const dropDownClassName = cn(
      'navbar-menu',
      { 'navbar-menu--open': isOpen },
    )

    return (
      <ul className={dropDownClassName}>
        {menuLinks.map(({ label, url, helpText }, index) =>
          <NavBarMenuItem
            label={label}
            href={url}
            helperText={helpText}
            key={url}
            centered={menuLinks.length === index + 1}
          />,
        )}
      </ul>
    )
  }
}
