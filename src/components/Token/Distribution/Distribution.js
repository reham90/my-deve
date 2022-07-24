import React, { useEffect } from "react";
import styles from "./Distribution.module.css";
import ReactApexChart from 'react-apexcharts';
import { AiFillInfoCircle } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDistribution } from "../../../Pages/DataFetch/FetchDistributionData";
import { useParams } from "react-router-dom";
import { Placeholder } from "../../common/Placeholder/Placeholder";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from 'react-i18next';



const Distribution = () => {
  const param = useParams()
  const contractAddress = param.contractAddress;
  const statusDist = useSelector(state => state.Dist.status);
  const dist = useSelector(state => state.Dist.data);
  const { t, i18n } = useTranslation(["token"])
  const lang=localStorage.getItem("i18nextLng")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDistribution(contractAddress));

  }, [dispatch, contractAddress]);

  const distData = dist.result;

  var options = {
    series: [distData ? Math.round(distData.realholdersPercentage) : null, distData ? Math.round(distData.airdropHoldersPercentage) : null, distData ? Math.round(distData.shrinkHoldersPercentage): null],
    labels:[t("token:Real_Holders") , t("token:Airdrop_holders") , t("token:Wallet_shrink")],
    dataLabels: {
      formatter: function (val) {
        return ("")
      }
    },
    chart: {
      type: 'donut',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        }


      }
    }],
    legend: {
      show: false
    },
    tooltip: {
      enabled: false

    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '22px',

              color: '#dfsda',
              offsetY: -10
            },
            value: {
              show: true,
              fontSize: '16px',

              color: undefined,
              offsetY: 16,
              formatter: function (val) {
                return val
              }
            },
            total: {
              show: true,
              label: t("token:Total"),
              fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
              color: '#373d3f',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b
                }, 0)
              }
            }
          }
        }
      }
    },

    colors: ['#7BE1D9', '#4CD696', '#EC6666']
  }



  return (
    <>
    <div >
      <h1 className={styles.title}>{t("token:dist_title")}</h1>
      <h6 className={styles.secondTitle}>{t("token:holders_title")}
      <Tooltip className={styles.tooltip} title={t("token:holders_tooltip")} arrow>
      <Button> <AiFillInfoCircle className={styles.infoIcon} /></Button>
    </Tooltip>
   </h6>
      
      <div className={styles.distChartDiv}>
        {
          statusDist=='success' &&<>
          <div className={styles.chartInfo}>
          <div className={styles.infoRecord}>
            <div className={styles.infoTitle}>
              <h6><FaCircle className={lang=="ar"?styles.circleIconOne_rtl:styles.circleIconOne_ltr} />{t("token:Real_Holders")}</h6>
              <span className={styles.chartNumber}>{distData ? distData.realholders : null}</span>
            </div>
            <p>{t("token:The_actual_number_of_token_holders")} </p>

          </div>
          <div className={styles.infoRecord}>
            <div className={styles.infoTitle}>
              <h6><FaCircle className={lang=="ar"?styles.circleIconTwo_rtl:styles.circleIconTwo_ltr} />{t("token:Airdrop_holders")}</h6>
              <span className={styles.chartNumber}>{distData ? distData.airdropHolders : null}</span>
            </div>
            <p>{t("token:sent_token")}</p>
          </div>
          <div className={styles.infoRecord}>
            <div className={styles.infoTitle}>
              <h6><FaCircle className={lang=="ar"?styles.circleIconThree_rtl:styles.circleIconThree_ltr} />{t("token:Wallet_shrink")}</h6>
              <span className={styles.chartNumber}>{distData ? distData.shrinkHolders : null}</span>
            </div>
            <p>{t("token:Wallets_with_small_amounts_after_selling")}</p>
          </div>
        </div>
        <div className={styles.chart} id="chart">
          <ReactApexChart options={options} series={options.series} type="donut" />
        </div>
        </>
        }

        {statusDist=='loading' &&<>
         <div className={styles.chartInfo}>
         <div className={styles.infoRecord}>
           <div className={styles.infoTitle}>
             <h6><FaCircle className={styles.circleIconOne} />real holders</h6>
             <span className={styles.chartNumber}><Placeholder styling={ {width:'50px',height:'20px'}}/> </span>
           </div>
           <p>The actual number of token holders </p>

         </div>
         <div className={styles.infoRecord}>
           <div className={styles.infoTitle}>
             <h6><FaCircle className={styles.circleIconTwo} />airdrop holders</h6>
             <span className={styles.chartNumber}><Placeholder styling={ {width:'50px',height:'20px'}}/> </span>
           </div>
           <p>Tokens are sent by token owner</p>
         </div>
         <div className={styles.infoRecord}>
           <div className={styles.infoTitle}>
             <h6><FaCircle className={styles.circleIconThree} />wallet shrink</h6>
             <span className={styles.chartNumber}><Placeholder styling={ {width:'50px',height:'20px'}}/> </span>
           </div>
           <p>wallets with small amounts after selling</p>
         </div>
       </div>
       <div className={styles.chart} id="chart">
       <Placeholder styling={ {width:'150px',height:'150px'}}/>
        </div>
       </>
        }



        

      </div>
    </div>

    {statusDist=='failed' &&''}
    </>
  )
}



export default Distribution;