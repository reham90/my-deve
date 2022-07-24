import React ,{ useEffect, useState} from "react";
import styles from "./TrustScore.module.css";
import ReactApexChart from 'react-apexcharts';
import {useDispatch, useSelector} from 'react-redux';
import { fetchScore } from "../../../Pages/DataFetch/FetchTrustScoreData";
import { useParams } from "react-router-dom";
import { Placeholder } from "../../common/Placeholder/Placeholder";
import { useTranslation } from 'react-i18next';

const TrustScore =() =>{
  const param = useParams()
  const contractAddress = param.contractAddress;
 
  // console.log(param.contractAddress ,'=-=-===== >>>');


  const score = useSelector(state => state.Score.data)
  // console.log(score)
  const statusTrust = useSelector(state => state.Score.status);
  const { t, i18n } = useTranslation(["token"])
  const lang=localStorage.getItem("i18nextLng")
  const dispatch = useDispatch ();
  useEffect(()=>{
      dispatch (fetchScore (contractAddress));

  },[dispatch , contractAddress]);
  const scoreData = score.result;
  let color='#fff'

  if(scoreData?.contractScan<59){
    color="#EC6666"
  } else if(scoreData?.contractScan>=60 && scoreData?.contractScan<85){
    color="#F5A341" 
  }else{
    color="#16C784"
  }
  // console.log(scoreData ,'========= Score data ')
// console.log(fetchScore ({contractAddress}))






    var options = {
        series: [scoreData? Math.round(scoreData.contractScan) :null],
        chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          track:{
            background:"rgba(115,136,169,0.35)",
          
           
          },
          hollow: {
            size: '62',
           
          },
          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: true,
              color: "#fff",
              fontSize: "12px",
              fontWeight:"400",
              fontFamily: 'SF Pro Display Medium'
            },
        },
        value: {
          color: "#fff",
          fontSize: "48px",
          fontWeight:"600",
          show: true
        },
      },
    },
    fill: {
      type: "solid",
      colors: [color,color,color]
    },
    stroke: {
      lineCap: "round",
    },
    labels: [t("token:total_score")],
    }
   

  

    return(
        <>
        <div className={lang =="ar"?styles.trustScoreBlock_rtl:styles.trustScoreBlock_ltr} >
          {statusTrust=='success' && <>
          <div >
        <span className={styles.blockTitle}>{t("token:trust_score")}</span>


        <div className={styles.chart} id="chart" >
        <ReactApexChart options={options} series={options.series} type="radialBar" height={250} width={350}/>
      </div>
      <h2 className={styles.title}>{t("token:moderate")}</h2>

      <ul className={styles.chartList}>
      <li className={styles.critical}>{t("token:critical_issues")}<span > {scoreData? scoreData.numberOfHighIssue :null} </span></li>
      <li>{t("token:important_issues")}<span className={styles.important}>{scoreData? scoreData.numberOfMediunIssue :null}</span></li>
      <li>{t("token:informational_issues")}<span className={styles.information}>{scoreData? scoreData.numberOfInformationalIssue :null}</span></li>
     
      </ul>

       


        </div>
          </>}

          {statusTrust=='loading' && <>
          <div className={styles.trustScoreBlock}>
        <span className={styles.blockTitle}>trust score</span>


        <div className={styles.chart} id="chart" >
          <Placeholder styling={ {width:'160px',height:'150px'}}/>
      </div>
      <h2 className={styles.title}>moderate</h2>

      <ul className={styles.chartList}>
      <li className={styles.critical}>critical issues<span> <Placeholder styling={ {width:'50px',height:'20px'}}/> </span></li>
      <li>{t("token:important_issues")}<span className={styles.important}><Placeholder styling={ {width:'50px',height:'20px'}}/></span></li>
      <li>informational issues<span className={styles.information}><Placeholder styling={ {width:'50px',height:'20px'}}/></span></li>
     
      </ul>

       


        </div>
          </>}
 
        </div>

        {statusTrust=='failed' &&''}
</>

    )
}


export default TrustScore;