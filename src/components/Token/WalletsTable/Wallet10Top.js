import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from 'react-bootstrap-table2-paginator';
import "./WalletsTable.css";
import { useTranslation } from 'react-i18next';







const Wallet10Top = ({ topWalletData }) => {
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

    if (topWalletData && topWalletData.topTenHolder) {

        for (let i = 0; i < topWalletData.topTenHolder.length; i++) {
            let rank = i + 1;
            let address = topWalletData.topTenHolder[i].TokenHolderAddress.substr(0, 8) + '...' + topWalletData.topTenHolder[i].TokenHolderAddress.substr(-6);
            let nameTag = 'N/A'
            let balance = Number(topWalletData.topTenHolder[i].TokenHolderQuantity).toLocaleString("en-US");;
            let percentage = `${(Number(topWalletData.topTenHolder[i].percentage)).toFixed(2)}%`;
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

export default Wallet10Top