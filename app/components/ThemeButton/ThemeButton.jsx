import React from 'react'
import cl from './ThemeButton.module.scss'
import ThemePoint from './ThemePoint'
/**
 * 
 * @param {object} colors 
 * component which conain info about theme
 */
const ThemeButton = ({colors}) => {
  return (
    <article className={cl.cont} style={{backgroundColor: colors.bg, borderColor: colors.bgD}}>
        <ThemePoint color={colors.textA}/>
        <ThemePoint color={colors.textU}/>
        <ThemePoint color={colors.logo}/>
    </article>
  )
}

export default ThemeButton