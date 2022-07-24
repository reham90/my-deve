import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import HeaderText from '../HeaderText/HeaderText';
import './LockedTokens.css'
import { useTranslation } from 'react-i18next';

const columns = [
    {
        dataField: "network",
        text: "Network",
        formatter: (cell, row) => {
            return (
                <div className='locked_tokens_network'>
                    <img className='logo' src={row.image} alt="logo" />
                    <p>{row.network}</p>
                </div>
            )
        }
    },
    {
        dataField: "address",
        text: "Address",
    },
    {
        dataField: "tokens",
        text: "Tokens",
        formatter: (cell, row) => {
            return (
                <div className='locked_tokens_tokens'>
                    <p className='tokens'>{row.tokens}</p>
                    <p className='rate'>{row.rate}</p>
                </div>
            )
        }
    },
];

const LockedTokens = ({ LockedTokensData }) => {
    const { t, i18n } = useTranslation(["token"])
    const lang=localStorage.getItem("i18nextLng")
    let LockedData = []
    if (LockedTokensData && LockedTokensData.ownerInfo && LockedTokensData.ownerInfo.lockedToken) {
        for (let i = 0; i < LockedTokensData.ownerInfo.lockedToken.length; i++) {
            let network = LockedTokensData.ownerInfo.lockedToken[i].lockerName;
            let address = LockedTokensData.ownerInfo.lockedToken[i].lockerContractAddress.substr(0, 8) + '...' + LockedTokensData.ownerInfo.lockedToken[i].lockerContractAddress.substr(-6);
            let rate = LockedTokensData.ownerInfo.lockedToken[i].lockedPercentage;
            let tokens = LockedTokensData.ownerInfo.lockedToken[i].lockedToken;
            let image = LockedTokensData.ownerInfo.lockedToken[i].image
            LockedData.push({ network, address, rate, tokens, image });
        }

    }
    return (
        <>
            <HeaderText nameHeader="Locked Tokens" title="Welcome to develocity." />
            <BootstrapTable
                keyField="id"
                data={LockedData}
                columns={columns}
                hover={true}
                bordered={false}
                loading={true}
                alwaysShowAllBtns={true}
            />
        </>
    )
}

export default LockedTokens