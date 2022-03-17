import React from "react"
import styles from "./Sponsor.module.css"
import omisego from '../../assets/omisego.png'
import argon from '../../assets/argon.png'
import aave from '../../assets/aave.png'
import covantis from '../../assets/covantis.png'




const Sponsors = () => {
  const images = [
    {
      alt: 'aave',
      image: aave
    },
    {
      alt: 'argon',
      image: argon
    },
    {
      alt: 'covantis',
      image: covantis
    },
    {
      alt: 'omisego',
      image: omisego
    },

  ]


  return (
    <div className={styles.SponsorDiv}>
    <div >
      <h4 className={styles.SponsorHeading} >
      Trusted by Leading Dapp Teams and Enterprises
      </h4>
    </div>
    <div className={styles.SponsorImagesDiv}>
    <div className={styles.sponsorImgDiv}>
      { images.map( e => (
          <img className={styles.sponsorImg} src={e.image} alt='aave' />
    ) )}
    </div>
    </div>
    </div>
  )
}

export default Sponsors
