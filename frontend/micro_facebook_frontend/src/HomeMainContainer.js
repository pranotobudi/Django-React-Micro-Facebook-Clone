/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './index.css';
import HomeCoverPhoto from './HomeCoverPhoto';

const HomeMainContainer = () => (
    <div>
        <div>
            <HomeCoverPhoto />
            </div>
        <div>Home Menu</div>
        <div>
            Home Body
            <div>Home Bio</div>
            <div>Home Content</div>
        </div>
    </div>

      );

export default HomeMainContainer;
/* eslint-enable */
