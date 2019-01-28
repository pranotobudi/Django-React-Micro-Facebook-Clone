/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Row, Col, Layout } from 'antd';
import './index.css';
import LeftContainer from './LeftCointainer';
import RightContainer from './RightContainer';
import MiddleContainer from './MiddleContainer';
import HeaderContainer from './HeaderContainer';
// const {
//     Content,
//   } = Layout;

const MainContainer = () => (
    <Layout>
        <HeaderContainer />
        <Row>
            <Col xs={2} sm={5} md={5} lg={5} xl={5}>
                Left Container
                <LeftContainer />
            </Col>
            <Col xs={20} sm={14} md={14} lg={14} xl={14}>
                Middle Container
                <MiddleContainer />
            </Col>
            <Col xs={2} sm={5} md={5} lg={5} xl={5}>
                Right Container
                <RightContainer />
            </Col>
        </Row>
    </Layout>

      );

export default MainContainer;
/* eslint-enable */
