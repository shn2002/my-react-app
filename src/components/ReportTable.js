import React, { Component, Fragment } from 'react'
import { Table} from 'antd'
import store from '../store'
import { getMyFinListAction } from '../store/actionCreators'

class ReportTable extends Component {
    constructor(props) {
        super(props)
        this.storeChange = this.storeChange.bind(this)
        this.state = store.getState()
        store.subscribe(this.storeChange)
    }
    render() {
        const columns = [
            {
                title: 'Date',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: 'Net Sales',
                dataIndex: 'costofgoodsandservicessold',
                key: 'costofgoodsandservicessold',
            },
            {
                title: 'Gross Profit',
                dataIndex: 'grossprofit',
                key: 'grossprofit',
            },
            {
                title: 'EPS',
                dataIndex: 'earningspersharebasic',
                key: 'earningspersharebasic',
            },
            {
                title: 'Operating Expense',
                dataIndex: 'operatingexpenses',
                key: 'operatingexpenses',
            },
            {
                title: 'Total Stock Quantity',
                dataIndex: 'weightedaveragenumberofdilutedsharesoutstanding',
                key: 'weightedaveragenumberofdilutedsharesoutstanding',
            },
            {
                title: 'Stock Code',
                dataIndex: 'symbol',
                key: 'symbol',
            },
        ];

        return (
            <Fragment>           
                <Table dataSource={this.state.finTableData.filter(item => item.symbol=== this.props.id)} columns={columns} />
            </Fragment>
        )
    }
    componentDidMount() {
        
        const action = getMyFinListAction()
        store.dispatch(action)

    }
    storeChange() {
        this.setState(store.getState())
    }

    }


export default ReportTable