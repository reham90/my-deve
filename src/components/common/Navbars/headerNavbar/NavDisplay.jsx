import React from "react";
import { ButtonComponent } from '../../ButtonComponent'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styles from './nav.module.css'
import logo from '../../../../assets/images/logo.png'
export function NavDisplay() {
    const { t, i18n } = useTranslation(["common"])
    const lang=localStorage.getItem("i18nextLng")
    const logindata = {
        text: 'Log in',
        color: "black",
        bg: "#fff",
        border: '1px solid black',
        fontsize:'SF Pro Display Medium'
    }
    const registerdata = {
        text: 'Create Account',
        color: "white",
        bg: "#000",
        fontsize:'SF Pro Display Medium'
    }
    return (
        <>
            <nav className={"navbar navbar-expand-lg " } style={{ backgroundColor: '#F3F2F7' }}>
                <div className={"container align-items-center " +(lang=="ar"&&styles.navbar_rtl)} style={{ marginTop: '15px', marginBottom: '15px'}}>
                    <Link className="navbar-brand" to='/'>
                        <img width="45" src={logo} alt="logo" />
                    </Link>
                    <button className="navbar-toggler  " style={{ boxShadow: 'none' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </span>
                    </button>
                    <div className={`collapse navbar-collapse text-center ${styles['navbar-collapse']}`} id="navbarSupportedContent">
                        <ul className={`navbar-nav mb-2 d-inline-block  w-auto mb-lg-0 ${styles.listGroup}`} >
                            <div className="d-lg-flex w-100 bg-ingo justify-content-between align-items-center">
                                <div className={`d-lg-flex` }>
                                    <li className="nav-item  px-3">
                                        <Link className={`nav-link text-black ${styles.linkitem}`} aria-current="page" to="/">{t("common:home")}</Link>
                                    </li>
                                    <li className="nav-item px-3">
                                        <a href="https://www.develocity.finance/#about" className={`nav-link text-black ${styles.linkitem}`} >{t("common:about")}</a>
                                    </li>
                                    {/* <li className="nav-item px-3">
                                        <Link className={`nav-link text-black ${styles.linkitem}`} to="token">Token</Link>

                                    </li>
                                    <li className="nav-item px-3">
                                        <a className={`nav-link text-black ${styles.linkitem}`}>Academy</a>
                                    </li> */}
                                    <li className="nav-item px-3">
                                        <a href="https://www.develocity.finance/#contact" className={`nav-link text-black ${styles.linkitem}`}>{t("common:contact")}</a>
                                    </li>
                                </div>
                                {/*<div className="d-lg-flex me-3">
                                    <li className="nav-item">
                                        <a className={`nav-link ${styles.linkitemopcity}`}><ButtonComponent data={logindata} />
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className={`nav-link ${styles.linkitemopcity}`}><ButtonComponent data={registerdata} />
                                        </a>
                                    </li>
    </div>*/}



                            </div>
                        </ul>
                    </div>

                </div>

            </nav>
            <div className=" container" style={{marginTop:'-10px'}} >
                <hr className="dropdown-divider container" />
            </div>
        </>
    )
}