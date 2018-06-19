import React from 'react'
import cn from 'classnames'

const MobileNavButton = ({ isOpen, onClick }) => {
  const classNames = cn(
    'mobile-nav-button',
    { 'mobile-nav-button--opened': isOpen },
  )

  return (
    <div onClick={onClick} className={classNames}>
      <span className='mobile-nav-button__lines' />
    </div>
  )
}

export default MobileNavButton
