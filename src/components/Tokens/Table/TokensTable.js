import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import styles from './TokenTable.module.css'
import "../../Token/WalletsTable/WalletsTable.css";

const columns = [
    // {
    //     dataField: "hashNumber",
    //     text: "#",
    // },

    {
        dataField: "token",
        text: "token",

        formatter: (cell, row) => {
            return (
                <div className={styles.container_token}>
                    {row.contractInfo.logo ? <img src={row.contractInfo.logo} alt={row.token} style={{ width: '24px', height: '24px' }} /> :
                        <div className={styles.icon_token_letter}>
                            <h6 className={styles.icon_token_text}>{row.contractInfo.name.charAt(0)}</h6>
                        </div>
                    }
                    <span style={{ marginLeft: '7px', marginRight: '10px' }}>{row.contractInfo.name}</span>
                    {/* <img src={require('../../../assets/images/verification.png')} alt={row.token} style={{ width: '16px', height: '16px' }} /> */}

                </div>
            )
        }

    },
    {
        dataField: "score",
        text: "Score",
        formatter: (cell, row) => {
            return (
                <div style={
                    row.contractScan.toFixed(0) >= 85 ? {
                        color: "#EA3943",
                        backgroundColor: "rgba(234, 57, 67, .25)",
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '30px',
                        height: '20px',
                        fontFamily: "SF Pro Display Medium",
                        fontSize: "14px",

                    } :
                        row.contractScan.toFixed(0) <= 84 && row.contractScan.toFixed(0) >= 60 ? {
                            color: "#F5A341",
                            backgroundColor: "rgba(245, 163, 65, .25)",
                            display: "flex",
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '30px',
                            height: '20px',
                            fontFamily: "SF Pro Display Medium",
                            fontSize: "14px",
                        } :
                            {
                                color: "#16C784",
                                backgroundColor: "rgba(22, 199, 132, .25)",
                                display: "flex",
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '30px',
                                height: '20px',
                                fontFamily: "SF Pro Display Medium",
                                fontSize: "14px",

                            }
                }>
                    {row.contractScan.toFixed(0)}
                </div >
            )
        },
    },
    // {
    //     dataField: "scans",
    //     text: "Scans"
    // },
    // // {
    // //     dataField: "rank",
    // //     text: "Rank"
    // // },
    // {
    //     dataField: "price",
    //     text: "Price"
    // },
    {
        dataField: "marketCap",
        text: "Market Cap",
        formatter: (cell, row) => {
            return (
                <div >
                    <span style={{ marginLeft: '7px', marginRight: '10px' }}>{row.contractInfo.market_cap.toLocaleString("en-US")}</span>

                </div>
            )
        }
    },
    {
        dataField: "totalSupply",
        text: "Total Supply",
        formatter: (cell, row) => {
            return (
                <div >
                    <span style={{ marginLeft: '7px', marginRight: '10px' }}>{row.contractInfo.total_supply}</span>

                </div>
            )
        }

    },
    // // {
    // //     dataField: "network",
    // //     text: "Network",

    // //     formatter: (cell, row) => {
    // //         return (
    // //             <div>
    // //                 <img src={require('../../../assets/images/tron.png')} alt={row.token} style={{ width: '24px', height: '24px' }} />
    // //                 <span style={{ marginLeft: '7px', marginRight: '10px' }}>{row.token}</span>
    // //             </div>
    // //         )
    // //     }

    // // },
    {
        dataField: "fullReport",
        text: "Full Report",
        formatter: (cell, row) => {
            return (
                <span style={{ marginLeft: '7px', marginRight: '10px' }}>{row.contractInfo.current_price}</span>

                // <img src={require('../../../assets/images/arrowRight.png')} alt={row.fullReport} style={{ width: '9px', height: '7px', marginLeft: "15px" }} />

            )
        }
    }

];

const TokensTable = ({ tokenList }) => {
    return (
        <div className='tokens_table'>
            <BootstrapTable
                keyField="id"
                data={tokenList}
                columns={columns}
                hover={true}
                bordered={false}
                loading={true}
                alwaysShowAllBtns={true}
            />
        </div>

    )
}

export default TokensTable