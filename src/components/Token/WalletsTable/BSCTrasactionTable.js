import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useTranslation } from 'react-i18next';





const BSCTrasactionTable = ({ bSCTrasaction }) => {
    const { t, i18n } = useTranslation(["token"])
    const lang = localStorage.getItem("i18nextLng")
    const columns = [
        {
            dataField: "hash",
            text: t("token:hash"),
        },
        {
            dataField: "fromAddress",
            text: t("token:fromaddress"),
        },
        {
            dataField: "toAddress",
            text:   t("token:toaddress"),
        },

        {
            dataField: "amount",
            text: t("token:amount")
        },
        {
            dataField: "tokenSymbol",
            text: t("token:tokenSymbol")
        }
    ];

    const bSCTrasactionData = [];

    if (bSCTrasaction && bSCTrasaction.tokenTransaction) {

        for (let i = 0; i < bSCTrasaction.tokenTransaction.length; i++) {
            let fromAddress = bSCTrasaction.tokenTransaction[i].from.substr(0, 4) + '...' + bSCTrasaction.tokenTransaction[i].from.substr(-4);
            let toAddress = bSCTrasaction.tokenTransaction[i].to.substr(0, 4) + '...' + bSCTrasaction.tokenTransaction[i].to.substr(-4);
            let amount = Number(bSCTrasaction.tokenTransaction[i].value).toLocaleString("en-US");
            let tokenSymbol = bSCTrasaction.tokenTransaction[i].tokenSymbol
            let hash = bSCTrasaction.tokenTransaction[i].hash.substr(0, 4) + '...' + bSCTrasaction.tokenTransaction[i].hash.substr(-4)
            bSCTrasactionData.push({ fromAddress, toAddress, amount, tokenSymbol, hash });
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
        <div className='large_table'>
            <BootstrapTable
                keyField="id"
                data={bSCTrasactionData}
                columns={columns}
                hover={true}
                bordered={false}
                loading={true}
                pagination={pagination}
                alwaysShowAllBtns={true}
            />
        </div>
    )
}
export default BSCTrasactionTable

