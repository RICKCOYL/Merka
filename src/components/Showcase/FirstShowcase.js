import React from "react"
import boxHeading from "../../assets/boxHeading.png"
import styles from "./Showcase.module.css"

const FirstShowcase = () => {
  return (
    <div className='firstShowcaseDiv'>
      <p className={styles.firstShowcaseParagraph}>PK194-ABI</p>
      <p className={styles.secondShowcaseParagraph}>San Francisco</p>
      <img className={styles.firstShowcaseImg} src={boxHeading} alt="" />

      <div className={styles.lineDot}>
      <div className={styles.VerticalLine}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
        
      </div>
    </div>
  )
}

export default FirstShowcase
