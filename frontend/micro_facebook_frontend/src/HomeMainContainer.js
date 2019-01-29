/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './index.css';
import HomeCoverPhoto from './HomeCoverPhoto';
import HomeMenu from './HomeMenu';

const HomeMainContainer = () => (
    <div>
        <div>
            <HomeCoverPhoto />
            </div>
        <div>
            <HomeMenu />
        </div>
        <div>
            Home Body
            <div>Home Bio</div>
            <div>Home Content</div>
        </div>
    </div>

      );

export default HomeMainContainer;
/* eslint-enable */
