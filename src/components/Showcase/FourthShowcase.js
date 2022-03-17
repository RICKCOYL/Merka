import React from 'react'
import styles from './Showcase.module.css'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const FourthShowcase = () => {
  return (
    <div className={styles.socialIconsDiv}>
       <img className={styles.socialIcons} src={ facebook} alt=" facebook"/>
       <img className={styles.socialIcons}  src={twitter} alt="twitter"/>
       <img src={instagram} alt="instagram"/>

       <div className={styles.socialVerticalLine}></div>

    </div>
  )
}

export default FourthShowcase