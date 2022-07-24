import React  from "react"
import { useState } from "react"
import { ProgressCard } from "../ProgressContainerReuse/ProgressCard"
import { useTranslation } from 'react-i18next';

export function GeneralProgrssCard(){
    let [data, setData]=useState({
        title:'General',
        percentdecimal:6/7,
        precentageover:8.13,
        series:83,
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