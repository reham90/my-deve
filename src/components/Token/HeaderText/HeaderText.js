import Tooltip from '@mui/material/Tooltip';
import React from 'react'
import styles from './HeaderText.module.css'
import { useTranslation } from 'react-i18next';

const HeaderText = ({ nameHeader, title }) => {
    const { t, i18n } = useTranslation(["common"])
    const lang = localStorage.getItem("i18nextLng")
    return (
        <div className={lang === "en" ? styles.container_header_left : styles.container_header_right} >
            <h2 className={styles.header}>{nameHeader}  </h2>
            <Tooltip title={title} arrow>
                <img className={lang === "en" ? styles.InfoLogo_left : styles.InfoLogo_right} src={require('../../../assets/images/info.png')} alt="logo" />
            </Tooltip>

        </div>
    )
}

export default HeaderText