import React from 'react'
import styles from './HeaderCard.module.css';
import { useTranslation } from 'react-i18next';
const HeaderCard = ({ image, title }) => {
    const lang = localStorage.getItem("i18nextLng")

    return (
        <div className={styles.header_card}>
            <div className={styles.background_image}>
                <img src={image} alt="star" className={styles.icon} />
            </div>
            <div className={styles.container_header}>
                <h5 className={lang === "ar" ? styles.header_right : styles.header_left} >{title}</h5>
            </div>
        </div>
    )
}

export default HeaderCard