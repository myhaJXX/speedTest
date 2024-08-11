'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { Component } from 'react'
import { useSelector } from 'react-redux'

/**
 * 
 * @param {string} href 
 * @param {string} title 
 * @param {path} icon 
 * @returns {Component}
 */

const FooterLink = ({href, title, icon}) => {
    const colorsStore = useSelector(state=>state.colorsStore)
    //creating next/Link
  return (
    <Link style={{color: colorsStore.textU}} href={href}>
      <FontAwesomeIcon icon={icon} color={colorsStore.textU}/>
      <p>{title}</p>
    </Link>
  )
}

export default FooterLink