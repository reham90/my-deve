import React from 'react'
import styles from './Header.module.css'
import { useTranslation } from 'react-i18next';
const Header = () => {
    const { t, i18n } = useTranslation(["token"])
    const lang=localStorage.getItem("i18nextLng")
    return (
        <h2 className={styles.header_text}>Tokens</h2>
    )
}

export default Header