'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const FooterLink = ({href, title, icon}) => {
    const colorsStore = useSelector(state=>state.colorsStore)
  return (
    <Link style={{color: colorsStore.textU}} href={href}>
      <FontAwesomeIcon icon={icon} color={colorsStore.textU}/>
      <p>{title}</p>
    </Link>
  )
}

export default FooterLink