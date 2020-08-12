import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Row, Col } from 'antd'
import ReportTable from '../components/ReportTable'

const Report = (props) => {
    
    return (
        <div>
            <title>Report</title>
            <Header />
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-right" xs={24} sm={24} md={23} lg={23} xl={18} >
                    <span>Stock Code: {props.id}</span>
                    <ReportTable id ={props.id}/>
                </Col>
            </Row>
            <Footer />
        </div>
    )
}



export default Report