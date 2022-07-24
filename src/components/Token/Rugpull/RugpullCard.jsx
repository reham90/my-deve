import styles from './RugpullStyle.module.css'
import { fetchBSCResult } from '../../../Services/FetchBSCData' 
import {useDispatch, useSelector} from 'react-redux';
import React ,{ useEffect , useState} from "react";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function RugpullCard(){
    const param = useParams()
    const contractAddress = param.contractAddress;
    const bscdata = useSelector(state => state.GetBSCdata.data)
    const { t, i18n } = useTranslation(["token"])
    const lang=localStorage.getItem("i18nextLng")
    const dispatch = useDispatch ();
    useEffect(()=>{
        dispatch (fetchBSCResult (contractAddress));
    },[contractAddress]);

    const newrug = bscdata.result;

    return(
    



        <div>
        <h5 className=' pt-3 pb-2' style={{fontFamily: 'SF Pro Display Medium'}}>{t("token:rugpull")}</h5>
        <div className={`d-flex  pt-2  ` } style={{height:'110px'}}>
        {
            newrug && newrug.honeypotTest=="PASS"?
            <div className={styles.cardGreen}>
             <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#16c784" class="bi bi-check-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
        </svg></span>
        <div className="text-start ps-2 pt-1" >
        <h5>Rugpull Test Passed</h5>
        <p> Taken owners has only 7% of liquidity which reduces risk of Rugpull</p>
    </div>
        </div>
        : <div className={styles.cardRed}>
        <div>
        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EA3943" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                        </svg>
                    </span>
                    </div>
                    <div className="text-start ps-2 pt-1" >
                    <h5>Rugpull Test Passed</h5>
                    <p className="text-muted"> Taken owners has only 7% of liquidity which reduces risk of Rugpull</p>
                </div>
        </div>
        }
         
          
        </div>
    </div>
    )
}