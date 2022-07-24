import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchBuySellBSCResult } from '../../../Services/FetchBuySellBSC';
import { ListGroup } from '../ListGroupReuse/ListGroup';
import styles from './LiquidityList.module.css';
import { useParams } from 'react-router-dom';
import { fetchBscLiquidityScan } from '../../../store/bscLiquidityScanSlice';
import { useTranslation } from 'react-i18next';

export function LiquidityList() {
    const param = useParams()
    const contractAddress = param.contractAddress;
    const dispatch = useDispatch();
    const bscLiquidityScan = useSelector(state => state.bscLiquidityScan.bscLiquidity);
    const statusLiquidity=useSelector(state => state.bscLiquidityScan.loading);
    const { t, i18n } = useTranslation(["token"])
    const lang=localStorage.getItem("i18nextLng")
    // useEffect(() => {
    //     dispatch(fetchBscLiquidityScan(contractAddress));

    // }, [dispatch, contractAddress]);
    useEffect(() => {
        dispatch(fetchBscLiquidityScan(contractAddress));

    }, [dispatch, contractAddress]);
    const bscLiquiditydata=bscLiquidityScan?.result
    const data = [
        {
            name: t("token:burned_liquidity"),
            value: bscLiquidityScan?Number(bscLiquidityScan.burnLiquidityPer).toFixed(2):null
        },
        {
            name: t("token:added_liquidity"),
            value: bscLiquidityScan?Number(bscLiquidityScan.addLiquidityPer).toFixed(2):null
        },
        {
            name: t("token:removed_liquidity"),
            value: bscLiquidityScan?Number(bscLiquidityScan.removeLiquidityPer).toFixed(2):null
        },

    ]


    return (
        <>
  
            {(statusLiquidity=='success' || statusLiquidity==true)  &&
            <div className='col-12 col-md-6'>
                <ListGroup listdata={data} title={t("token:liquidity")}/>
            </div>}
            {/* <ListGroup listdata={bscLiquidityScan} title="Liquidity" /> */}
        {statusLiquidity==false && ''}

        </>
    )
}

