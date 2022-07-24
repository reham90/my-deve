import React from "react";
import {ButtonComponent} from '../../common/ButtonComponent'
import styles from './leftbar.module.css'
import { useTranslation } from 'react-i18next';
export function LeftBar(){
    const buttondata={
        text:'See how it works',
        color:"white",
        bg:"#9F4AE8"
    }
    return (
        <>
            <section className="mt-5 text-start ">
                <div className=" ">
                <span className="py-2 px-3" style={{color:'#9F4AE8',fontSize:'12px',backgroundColor:'rgba(159, 74, 232,0.2)',borderRadius:'2px',paddingTop:'59px'}}>BETA STAGE</span>
                <h4 className={` ${styles.epiloguefont}`} >
                    Become a PRO in Crypto Investments
                </h4>
                <p className={styles.parag}>
                    We are excited to share our Beta version of the Develocity Multifunctional tool, that works on BSC. 
                </p>
                {/* <a className={styles.linkitemopcity} style={{marginTop:'27px',display:'block'}}>
                <ButtonComponent data={buttondata}/>
                </a> */}
                </div>
            </section>
        </>
    )
}