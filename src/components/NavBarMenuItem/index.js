import React from 'react'
import { string, bool } from 'prop-types'
import cn from 'classnames'

const NavBarMenuItem = ({
  label,
  helperText,
  href,
  centered,
}) => {
  const classNames = cn(
    'navbar-menu__item',
    { 'navbar-menu__item--centered': centered },
  )

  return (
    <li className={classNames}>
      <a className='navbar-menu__item-link' href={href}>
        {label}
        {helperText &&
          <span className='navbar-menu__item-helper'>
            {helperText}
          </span>
        }
      </a>
    </li>
  )
}

NavBarMenuItem.propTypes = {
  label: string.isRequired,
  href: string.isRequired,
  helperText: string,
  centered: bool,
}

NavBarMenuItem.defaultProps = {
  centered: false,
}

export default NavBarMenuItem
