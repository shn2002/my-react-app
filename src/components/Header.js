import React from 'react'
import '../static/style/components/header.css'
import { Row, Col, Menu, Icon } from 'antd'


const Header = () => (
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">WEB422</span>
                <span className="header-txt">Final Project</span>
            </Col>
            <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <Icon type="home" />
                    Description
                </Menu.Item>
                    <Menu.Item key="dashboard">
                        <Icon type="dashboard" />
                     Dashboard
                </Menu.Item>
                    <Menu.Item key="file">
                            <Icon type="file" />
                            TodoList
                    </Menu.Item>

                </Menu>

            </Col>
        </Row>
    </div>

)
export default Header