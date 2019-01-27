import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Row, Col, Layout } from 'antd';
import './index.css';

const {
    Header, Footer, Content,
  } = Layout;

const MainContainer = () => (
    <Layout>
        <Header>Header</Header>
        <Content>Content
            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
            </Row>
        </Content>
        <Footer>Footer</Footer>
    </Layout>

      );

export default MainContainer;
