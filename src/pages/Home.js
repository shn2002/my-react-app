import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CompanyInput from '../components/CompanyInput'
import CompanyList from '../components/CompanyList'
import { Row, Col,Anchor} from 'antd'

const {Link }=Anchor
const Home = () => {

  return (
  <div>
      <title>Home</title>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={0} sm={0} md={7} lg={5} xl={4} >
        <span>Search Name: </span>
        <CompanyInput />
        <Anchor className="anchor-main">
                    <Link href="/todolist" title="My Todo list" />
        </Anchor>
      </Col>
      <Col className="comm-right" xs={24} sm={24} md={16} lg={18} xl={14} >
       <CompanyList />
      </Col>
    </Row>
    <Footer />
  </div>
  )
}



export default Home