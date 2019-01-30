/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Row, Col, Layout } from 'antd';
import FriendsMainContainer from './HomeMainContainer'
import './index.css';

// const {
//     Content,
//   } = Layout;

const Friends = () => (
    <Layout>
        <HeaderContainer />
        <div className="home">
            <div className='home-left-empty'></div>
            <div className='home-main-container'><FriendsMainContainer /></div>
            <div className='home-right-empty'></div>
        </div>

    </Layout>

      );

export default Friends;
/* eslint-enable */
