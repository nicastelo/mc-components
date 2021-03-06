import React, { PureComponent } from 'react'

import logo from '../../assets/logo.svg'
import sslBadge from '../../assets/ssl-badge.svg'

export default class Footer extends PureComponent {
  render () {
    return (
      <div className='mc-site-footer'>
        <div className='mc-container mc-contain-inner'>
          <img
            src={logo}
            alt='Logo wordmark'
            className='mc-site-footer__logo-footer'
          />

          <ul className='mc-site-footer__links'>
            <li className='mc-site-footer__link'>
              <a href='/#now-available'>Browse Classes</a>
            </li>

            <li className='mc-site-footer__link'>
              <a href='/all-access-pass'>All-Access</a>
            </li>

            <li className='mc-site-footer__link'>
              <a href='/gift'>Gifts</a>
            </li>

            <li className='mc-site-footer__link'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://masterclasshelp.zendesk.com/hc/en-us'
              >
                Help Center
              </a>
            </li>

            <li className='mc-site-footer__link'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://masterclasshelp.zendesk.com/hc/en-us/articles/205081248'
              >
                Contact Us
              </a>
            </li>

            <li className='mc-site-footer__link'>
              <a href='/privacy'>Privacy</a>
            </li>

            <li className='mc-site-footer__link'>
              <a href='/terms'>Terms</a>
            </li>

            <li className='mc-site-footer__link'>
              <a href='http://careers.masterclass.com'>Careers</a>
            </li>

            <p className='mc-site-footer__copyright'>
              Copyright &copy; 2018 MasterClass
            </p>
          </ul>

          <img
            src={sslBadge}
            alt='Secured by Expedited SSL'
            className='mc-site-footer__ssl-badge'
            name='ssl-badge'
          />
        </div>
      </div>
    )
  }
}
