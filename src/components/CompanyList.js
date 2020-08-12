import React, { Component, Fragment } from 'react'
import store from '../store'
import { List, Icon, Avatar} from 'antd'
import {getMyListAction} from '../store/actionCreators'

class CompanyList extends Component {
    constructor(props){
        super(props)
        this.storeChange =  this.storeChange.bind(this)
        this.state = store.getState()
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <Fragment>
                <List
                    header={<div>Company Information</div>}
                    itemLayout="vertical"
                    dataSource={this.state.filterlist}
                    renderItem={item => (
                        <List.Item>
                            <div className="list-title">
                                <Avatar shape="square" src={item.image} />
                                <a href={'/report/'+item.symbol}>{item.companyName} (Stock Exchange Code: {item.symbol}) </a>     
                            </div>
                            <div className="list-icon">
                                <span><Icon type="calendar" />  INDUSTRY:  {item.industry}</span>
                                <span><Icon type="folder" />  COUNTRY:  {item.country}</span>
                                <span><Icon type="fire" />  CEO: {item.ceo}</span>
                            </div>
                            <div className="list-context">{item.description}</div>
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }
    componentDidMount(){
        const action = getMyListAction()
        store.dispatch(action)    
    }

    storeChange(){
        this.setState(store.getState())
    }
}

export default CompanyList




