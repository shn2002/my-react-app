import React from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

const TodoListUI = (props)=>{
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input placeholder={props.inputTodoListValue}
                    style={{ width: '250px',marginRight:'10px'}}
                    onChange = {props.changeInputTodoListValue}
                    value={props.inputTodoListValue}
                />
                <Button type="primary"
                onClick ={props.clickBtn}
                >Add</Button>
            </div>
            <div style={{ margin: '10px' , width :'300px'}}>
                <List 
                bordered
                dataSource={props.list}
                renderItem ={(item,index)=>(
                <List.Item 
                    onClick={()=>{props.deleteItem(index)}}>
                        {item}
                </List.Item>)}
                />
            </div>
        </div>
    )

}

export default TodoListUI



