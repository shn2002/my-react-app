import React, { Component, Fragment } from 'react'
import { AutoComplete } from 'antd'
import { getMyListAction, changeInputAction } from '../store/actionCreators'
import store from '../store'

class CompanyInput extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        this.changeInputValue = this.changeInputValue.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <Fragment>
                <AutoComplete
                    dataSource={this.state.filterNameList}
                    onChange={this.changeInputValue}
                    value={this.state.inputValue}
                    style={{
                        width: 250,
                    }}
                />
            </Fragment>
        )
    }
    componentDidMount() {
        const action = getMyListAction()
        store.dispatch(action)
    }
    changeInputValue(data) {
        const action = changeInputAction(data)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }

}
export default CompanyInput