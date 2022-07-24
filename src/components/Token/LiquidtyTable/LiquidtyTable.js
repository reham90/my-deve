import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useTranslation } from 'react-i18next';



const LiquidtyTable = ({ bSCTrasaction }) => {
    const { t, i18n } = useTranslation(["token"])
    const lang = localStorage.getItem("i18nextLng")
    const bSCTrasactionData = [];
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
            text: t("token:toaddress"),
        },

        {
            dataField: "amount",
            text: t("token:amount"),
        },
        {
            dataField: "tokenSymbol",
            text: t("token:tokenSymbol"),
        }
    ];

    if (bSCTrasaction && bSCTrasaction.transactions) {
        for (let i = 0; i < bSCTrasaction.transactions.length; i++) {
            let fromAddress = bSCTrasaction.transactions[i].from.substr(0, 4) + '...' + bSCTrasaction.transactions[i].from.substr(-4);
            let toAddress = bSCTrasaction.transactions[i].to.substr(0, 4) + '...' + bSCTrasaction.transactions[i].to.substr(-4);
            let amount = Number(bSCTrasaction.transactions[i].value).toLocaleString("en-US");
            let tokenSymbol = bSCTrasaction.transactions[i].tokenSymbol
            let hash = bSCTrasaction.transactions[i].hash.substr(0, 4) + '...' + bSCTrasaction.transactions[i].hash.substr(-4)
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

export default LiquidtyTable