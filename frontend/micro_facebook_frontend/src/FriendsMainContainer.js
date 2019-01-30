/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './index.css';
import HomeCoverPhoto from './HomeCoverPhoto';
import HomeMenu from './HomeMenu';
import MicroFbPost from './MicroFbPost'
import MicroFbCreatePost from './MicroFbCreatePost'
import HomeBioBox from './HomeBioBox'
import HomeFriendBox from './HomeFriendBox'
import FriendListsHeader from './FriendListsHeader'
const FriendsMainContainer = () => (
    <div>
        <div>
            <HomeCoverPhoto />
        </div>
        <div>
            <HomeMenu />
        </div>
        <div className='friend-lists-container'>
            <div><FriendListsHeader /></div>
            <div>Friend Lists</div>
        </div>
    </div>

      );

export default FriendsMainContainer;
/* eslint-enable */
