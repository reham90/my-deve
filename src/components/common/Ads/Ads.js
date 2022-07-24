import React from 'react'
import styles from './Ads.module.css'

const Ads = ({ width, height }) => {
    return (
        <div className={styles.ads_container} style={{width: width, height: height}}></div>
    )
}

export default Ads