'use client'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const FooterLink = ({href, title}) => {
    const colorsStore = useSelector(state=>state.colorsStore)
  return (
    <Link style={{color: colorsStore.textU}} href={href}>{title}</Link>
  )
}

export default FooterLink