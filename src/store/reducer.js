import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST,GET_FIN_LIST,GET_TODO_LIST,CHANGE_TODO_LIST_INPUT} from './actionTypes'

const defaultState = {
    inputValue: '',
    stockID:'',
    list: [],
    nameList: [],
    filterlist: [],
    filterNameList: [],
    finList:[],
    finTableData:[],
    inputTodoListValue:"please input to do list",
    todoList:[]
    
}
export default (state = defaultState, action) => {

    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        newState.filterNameList = []
        newState.filterlist = newState.list

        newState.nameList.forEach(function (item) {
            if (item.search(newState.inputValue.toUpperCase()) !== -1 && newState.inputValue!=='') {
                newState.filterNameList.push(item)
            }
        })
        let tempList = []
        newState.filterlist.forEach(function (item) {
            if (item.symbol.search(newState.inputValue.toUpperCase()) !== -1) {
                tempList.push(item)
            }
        })

        newState.filterlist = tempList

        return newState
    }

    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.todoList.push(newState.inputTodoListValue)
        newState.inputTodoListValue = ''
        return newState
    }
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.todoList.splice(action.index, 1)
        return newState
    }
    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.profileData.data.list
        newState.nameList = action.nameData.data.list
        newState.filterlist = action.profileData.data.list
        return newState
    }
    if (action.type === GET_FIN_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.finList = action.finData.data.list

        for (let i =0; i<action.finData.data.list.length;i++){
            
                let obj = {
                    key: i,
                    date: action.finData.data.list[i].date,
                    costofgoodsandservicessold: action.finData.data.list[i].costofgoodsandservicessold,
                    grossprofit: action.finData.data.list[i].grossprofit,
                    earningspersharebasic: action.finData.data.list[i].earningspersharebasic,
                    operatingexpenses : action.finData.data.list[i].operatingexpenses,
                    weightedaveragenumberofdilutedsharesoutstanding: action.finData.data.list[i].weightedaveragenumberofdilutedsharesoutstanding,
                    symbol:action.finData.data.list[i].symbol
                }
                newState.finTableData.push(obj);
            
            }


        return newState
    }
    if (action.type === GET_TODO_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.todoList = action.todoListData.data.list
        return newState
    }
    if (action.type === CHANGE_TODO_LIST_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputTodoListValue = action.value
        return newState
    }

    return state
}
