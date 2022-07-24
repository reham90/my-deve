import React  from "react"
import { useState } from "react"
import { ProgressCard } from "../ProgressContainerReuse/ProgressCard"
import { useTranslation } from 'react-i18next';

export function ContractProgrssCard(){
    let [data, setData]=useState({
      title:'Contract',
      percentdecimal:5/8,
      precentageover:-1.2,
      series:62,
      barcolor:'#16c784'  ,
      barpercentcolor:'#000'
    })
    const { t, i18n } = useTranslation(["token"])
    const lang=localStorage.getItem("i18nextLng")
    return(
        <>
            <div>
              <ProgressCard carddata={data}/>
            </div>
        </>
    )
}