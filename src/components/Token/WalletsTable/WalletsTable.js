import { logDOM } from '@testing-library/react';
import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
import "./WalletsTable.css";
import { useTranslation } from 'react-i18next';






const WalletsTable = ({ walletsData }) => {
    const { t, i18n } = useTranslation(["token"])
    const lang = localStorage.getItem("i18nextLng")
    const columns = [
        {
            dataField: "rank",
            text: t("token:rank"),
        },
        {
            dataField: "address",
            text: t("token:address"),
        },
        {
            dataField: "nameTag",
            text: t("token:nametag"),
        },
        {
            dataField: "balance",
            text: t("token:balance"),
        },
        {
            dataField: "percentage",
            text: t("token:percentage")
        }
    ];

    const wallet = [];

    if (walletsData && walletsData.ownerInfo && walletsData.ownerInfo.top10LiquidityHolder) {

        for (let i = 0; i < walletsData.ownerInfo.top10LiquidityHolder.length; i++) {
            let rank = i + 1;
            let address = walletsData.ownerInfo.top10LiquidityHolder[i].TokenHolderAddress.substr(0, 8) + '...' + walletsData.ownerInfo.top10LiquidityHolder[i].TokenHolderAddress.substr(-6);
            let nameTag = 'N/A'
            let balance = (walletsData.ownerInfo.top10LiquidityHolder[i].TokenHolderQuantity).toLocaleString("en-US");
            let percentage = `${Number(walletsData.ownerInfo.top10LiquidityHolder[i].percentage).toFixed(2)}%`;
            wallet.push({ rank, address, nameTag, balance, percentage });

        }
    }


    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        hideSizePerPage: true,
        nextPageText: '>',
        prePageText: '<',
        withFirstAndLast: false,
        alwaysShowAllBtns: true,
    });

    return (
        <>
            <BootstrapTable
                keyField="id"
                data={wallet}
                columns={columns}
                hover={true}
                bordered={false}
                loading={true}
                pagination={pagination}
                alwaysShowAllBtns={true}
            />
        </>

    )
}

export default WalletsTable