import React, { useState, useEffect } from "react";
import styles from "./SocialBar.module.css";
import { FaPaperPlane } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io'
import { useTranslation } from 'react-i18next';


const SocialBar = () => {
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation(["common"]);
  const lang = localStorage.getItem("i18nextLng")
  const languages = [
    {
      code: 'en',
      dir: 'ltr'
    },
    {
      code: 'ar',
      dir: 'rtl'
    },
    {
      code: 'tr',
      dir: 'ltr'
    },
    {
      code: 'ch',
      dir: 'ltr'
    }
  ];
  const currentLanguage = languages.find((i) => i.code == lang)
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18n.changeLanguage('en');
    }
  }, [])


  useEffect(() => {
    document.body.dir = currentLanguage.dir
    console.log("direction", currentLanguage.code)
  }, [currentLanguage])

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
    document.body.dir = "ltr"
  }

  return (
    <div className={lang == "ar" ? styles.socialBarSection_rtl : styles.socialBarSection_ltr} style={{ backgroundColor: '#F3F2F7' }}>
      <div className="container">
        <div className={styles.socialBar}>

          <ul className={lang == "ar" ? styles.socialIcons_rtl : styles.socialIcons_ltr}>
            <li><a href="#"><FaPaperPlane /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaFacebookF /></a></li>
          </ul>
          {/* start */}
          <ul className={styles.socialBarNav}>
            {/* <li><a href="#">{t("common:advertise")}</a></li>
    <li><a href="#">{t("common:changelog")}</a></li>
    <li><a href="#">{t("common:whitepaper")}</a></li> */}
            {/* <li className={`${styles.dropdown} nav-item dropdown`}>
  <button data-bs-toggle="dropdown" className={styles.dropbtn} value='en' onClick={handleOnclick}>english<IoIosArrowDown/></button>
  <ul  className="dropdown-menu">
    <li class="dropdown-item"><button href="#" value='ch' onClick={handleOnclick}>chinese</button></li>

    <li class="dropdown-item"> <button href="#" value='tr' onClick={handleOnclick}>turkish</button></li>
  
  </ul>
  </li> */}

            <li>


              <select className={styles.dropdown} onClick={handleOnclick} aria-label="Default select example">
                <option value="en" selected={lang == 'en'}> {t("common:english")}</option>
                <option value="ar" selected={lang == 'ar'}> {t("common:arabic")}</option>
                <option value="ch" selected={lang == 'ch'}>{t("common:chinese")}</option>
                <option value="tr" selected={lang == 'tr'}> {t("common:turkish")}</option>
              </select>
            </li>
          </ul>
          {/* end */}


        </div>

      </div>
    </div>


  )
}

export default SocialBar

