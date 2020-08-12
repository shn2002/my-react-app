import { takeEvery,put } from 'redux-saga/effects'
import { GET_MY_LIST,GET_MY_FIN_LIST ,GET_MY_TODO_LIST } from './actionTypes'
import {getListAction,getFinListAction,getTodoListAction} from './actionCreators'
import axios from 'axios'

function* mySaga(){
    yield takeEvery(GET_MY_LIST,getList)
    yield takeEvery(GET_MY_FIN_LIST,getFinList)
    yield takeEvery(GET_MY_TODO_LIST,getTodoList)
}   

function* getList(){

    const res = yield axios.get('https://web422mockapi.herokuapp.com/profiles')
    const resCompany = yield axios.get('https://web422mockapi.herokuapp.com/companies')
    
    const action =getListAction(res.data,resCompany.data)
    yield put(action)

}

function* getFinList(){
    const resFinance = yield axios.get('https://run.mocky.io/v3/608d52bd-7587-4e0b-bd8f-ee45c5337507')
    const action =getFinListAction(resFinance.data)
    yield put(action)
}

function* getTodoList(){
    const resTodo = yield axios.get('https://run.mocky.io/v3/48de3512-1df0-4b72-b714-ae8378c1ec92')
    const action =getTodoListAction(resTodo.data)
    yield put(action)
}

//https://run.mocky.io/v3/608d52bd-7587-4e0b-bd8f-ee45c5337507
//https://run.mocky.io/v3/e639a6d6-23ae-4a42-a28c-d4bedf4ffb1f
//https://web422mockapi.herokuapp.com/profiles
//https://run.mocky.io/v3/b677fac6-9fe9-45df-89d3-f87d62d3c16d
//https://run.mocky.io/v3/07db81a4-20f4-48a9-a863-6f458d4679e5
//https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList


//https://run.mocky.io/v3/ffd22913-4b0a-4b7a-95d2-b18a63757448
//https://web422mockapi.herokuapp.com/reports
//https://run.mocky.io/v3/65120eba-651b-4067-b149-979bbccc4476

//zhe ge ke yi
//https://run.mocky.io/v3/52ad2a62-013e-4556-bb08-be51e52f86ac
export default mySaga