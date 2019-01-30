/*eslint-disable*/
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Layout } from 'antd';
import HomeMainContainer from './HomeMainContainer';
import FriendsMainContainer from './FriendsMainContainer';
import HeaderContainer from './HeaderContainer';

import './index.css';

// const {
//     Content,
//   } = Layout;

const Friends = () => (
    <Layout>
        <HeaderContainer />
        <div className="home">
            <div className="home-left-empty" />
            <div className="home-main-container"><FriendsMainContainer /></div>
            <div className="home-right-empty" />
        </div>
    </Layout>

      );

export default Friends;
/*eslint-disable*/