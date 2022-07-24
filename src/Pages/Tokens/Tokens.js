import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Ads from '../../components/common/Ads/Ads'
import { NavBar } from '../../components/Home/Header/NavBar'
import Header from '../../components/Tokens/headerTable/Header'
import TokensTable from '../../components/Tokens/Table/TokensTable'
import { fetchTokenList } from '../../store/tokenListSlice'
import styles from './Tokens.module.css'
import { useDispatch, useSelector } from 'react-redux'

const Tokens = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(['Binance', 'score', 'High']);

    useEffect(() => {
        dispatch(fetchTokenList(value));
    }, [dispatch, value]);


    const handleChange = (event) => {
        setValue([event.target.selectedOptions[0].getAttribute('data-network'), event.target.selectedOptions[0].getAttribute('data-quary'), event.target.selectedOptions[0].getAttribute('data-filter')]);
        dispatch(fetchTokenList(value));
    };



    const tokenList = useSelector(state => state.tokenList.tokenList);



    return (
        <div>
            <NavBar />

            <div style={{ backgroundColor: "#F3F2F7", padding: "25px 0px 35px" }}>
                <div className='container'>
                    <div className='row' >
                        <div className='col-12 d-flex justify-content-center align-items-center'>
                            <Ads width='590px' height='80px' />
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ backgroundColor: "#FFFFFF", padding: "40px 0px" }}>

                <div className='container' >
                    <div className='row'>
                        <div className='col-12'>
                            <Header />

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className={styles.container_btn}>
                                <div className={styles.container_left}>
                                    <div>
                                        <select className={styles.select_btn} value={value} onChange={handleChange} >
                                            <option data-network="Binance" data-quary="score" data-filter="High"  >Trust Score</option>
                                            <option data-network="Binance" data-quary="interest" data-filter="High">Popular Scans</option>
                                            <option data-network="Binance" data-quary="age" data-filter="High">Last Scans</option>
                                        </select>
                                    </div>
                                    <button className={styles.verified_btn}>
                                        <span>Verified Tokens</span>
                                        <img src={require('../../assets/images/verificationblack.png')} alt='verification' style={{ width: '16px', height: '16px' }} />
                                    </button>
                                </div>
                                <button className={styles.live_btn}>
                                    <span>Live New Pairs</span>
                                </button>


                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-12'>
                            {tokenList && <TokensTable tokenList={tokenList} />}
                        </div>
                    </div>
                </div>
            </div>




        </div >
    )
}

export default Tokens