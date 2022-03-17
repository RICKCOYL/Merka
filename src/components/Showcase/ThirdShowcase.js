import React from 'react'
import bitcoinLogo from '../../assets/bitcoinLogo.svg'
import frame from '../../assets/Frame.png'
import styles from "./Showcase.module.css"

const ThirdShowcase = () => {
  return (
    <div className={styles.thirdShowcaseDiv}>
         <img className={styles.frame} src={frame} alt="frame"/>
         <img className={styles.bitcoinLogo} src={bitcoinLogo} alt="bitcoinLogo"/>
    </div>
  )
}


export default ThirdShowcase