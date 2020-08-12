import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM,GET_LIST,GET_MY_LIST,GET_MY_FIN_LIST,GET_FIN_LIST,CHANGE_TODO_LIST_INPUT,GET_MY_TODO_LIST,GET_TODO_LIST} from './actionTypes'

export const changeInputAction = (value) =>({
    type:CHANGE_INPUT,
    value
})
export const addItemAction = () =>({
    type:ADD_ITEM
})
export const deleteItemAction = (index) =>({
    type:DELETE_ITEM,
    index
})
export const getListAction = (profileData,nameData) =>({
    type:GET_LIST,
    profileData,
    nameData

})
export const getFinListAction = (finData) =>({
    type:GET_FIN_LIST,
    finData
})
export const getMyListAction=()=>({
    type:GET_MY_LIST,
    
})

export const getMyFinListAction=()=>({
    type:GET_MY_FIN_LIST,
    
})
export const changeInputTodoListAction = (value) =>({
    type:CHANGE_TODO_LIST_INPUT,
    value
})
export const getMyTodoListAction=()=>({
    type:GET_MY_TODO_LIST,
    
})
export const getTodoListAction = (todoListData) =>({
    type:GET_TODO_LIST,
    todoListData
})
