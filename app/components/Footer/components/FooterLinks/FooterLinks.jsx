import React from 'react'
import FooterLink from './FooterLink'
import cl from './FooterLinks.module.scss'
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'

const FooterLinks = () => {
  return (
    <nav className={cl.cont}>
        <FooterLink href='https://t.me/dobryak634' title='Telegram' icon={faTelegram}/>
        <FooterLink href='https://leetcode.com/u/MJXWhyNot/' title='Leetcode' icon={faListCheck}/>
        <FooterLink href='https://github.com/myhaJXX' title='Github' icon={faGithub}/>
    </nav>
  )
}

export default FooterLinks