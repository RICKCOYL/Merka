import React from 'react'
import styles from './BottomHeroSec.module.css'
import whiteLine from '../../assets/connections.png'

const BottomHeroSec = () => {
  return (
    <div className={styles.BottomHeroSec}>
        <img className={styles.whiteLine} src={whiteLine} alt="" />
    </div>
  )
}

export default BottomHeroSec