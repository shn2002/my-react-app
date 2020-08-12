import React, { Component } from 'react'
import store from '../store'
import { getMyTodoListAction, changeInputTodoListAction, addItemAction, deleteItemAction } from '../store/actionCreators'
import TodoListUI from '../components/TodoListUI'


class TodoList extends Component {
    constructor(props) {
        super()
        this.state = store.getState()
        this.changeInputTodoListValue = this.changeInputTodoListValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }
    render() {
        return (
            <TodoListUI
                inputTodoListValue={this.state.inputTodoListValue}
                changeInputTodoListValue={this.changeInputTodoListValue}
                clickBtn={this.clickBtn}
                list={this.state.todoList}
                deleteItem={this.deleteItem}
            />
        )
    }

    componentDidMount() {
        const action = getMyTodoListAction()
        store.dispatch(action)

    }

    changeInputTodoListValue(e) {
        console.log(e.target.value)
        const action = changeInputTodoListAction(e.target.value)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    clickBtn() {
        if (this.state.inputTodoListValue===""){
            alert("Please input value")
            return
        }
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}


export default TodoList