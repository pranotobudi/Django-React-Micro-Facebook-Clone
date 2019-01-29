/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Row, Col, Layout } from 'antd';
import HeaderContainer from './HeaderContainer'
import HomeMainContainer from './HomeMainContainer'
import './index.css';

// const {
//     Content,
//   } = Layout;

const Home = () => (
    <Layout>
        <HeaderContainer />
        <div className="home">
            <div className='home-left-empty'>Home Left Empty</div>
            <div className='home-main-container'><HomeMainContainer />Home MainContainer</div>
            <div className='home-right-empty'>Home RightEmpty</div>
        </div>

    </Layout>

      );

export default Home;
/* eslint-enable */
