import React from 'react'
import styles from './CardScans.module.css';
import { useTranslation } from 'react-i18next';
const Header = ({ title }) => {
    const { t, i18n } = useTranslation(["home"]);
    const lang = localStorage.getItem("i18nextLng")
    return (
        <div className={styles.header_title}>
            <div className={styles.sub_header}>
                <h3 className={styles.header_number}>#</h3>
                <h3 className={lang === "en" ? styles.header_number_left : styles.header_number_right}>{t("home:token")} </h3>
            </div>
            <h3 className={styles.header_scans}>{title}</h3>
        </div>
    )
}

export default Header