import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Row, Col, Layout } from 'antd';
import './index.css';
import LeftContainer from './LeftCointainer';
import RightContainer from './RightContainer';
import MiddleContainer from './MiddleContainer';

const {
    Header, Footer, Content,
  } = Layout;

const MainContainer = () => (
    <Layout>
        <Header>Header</Header>
        <Content>Content
            <Row>
                <Col xs={2} sm={4} md={4} lg={4} xl={4}>
                    Left Container
                    <LeftContainer />
                </Col>
                <Col type="flex" justify="center" xs={20} sm={16} md={16} lg={16} xl={16}>
                    Middle Container
                    <MiddleContainer />
                </Col>
                <Col xs={2} sm={4} md={4} lg={4} xl={4}>
                    Right Container
                    <RightContainer />
                </Col>
            </Row>
        </Content>
        <Footer>Footer</Footer>
    </Layout>

      );

export default MainContainer;
