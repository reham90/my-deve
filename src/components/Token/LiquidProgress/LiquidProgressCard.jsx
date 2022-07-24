import React  from "react"
import { useState } from "react"
import { ProgressCard } from "../ProgressContainerReuse/ProgressCard"
import { useTranslation } from 'react-i18next';

export function LiquidProgressCard(){
  const { t, i18n } = useTranslation(["token"])
  const lang=localStorage.getItem("i18nextLng")
    let data={
        title:'Liquidity',
        percentdecimal:2/5,
        precentageover:-5.24,
        series:40,
        barcolor:'#EA3943'  ,
        barpercentcolor:'#000'
      }

  
      return(
          <>
              <div>
                <ProgressCard carddata={data}/>
              </div>
          </>
      )

}