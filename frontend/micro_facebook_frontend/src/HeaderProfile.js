import React from 'react';
import { Avatar } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './App.css';

const HeaderProfile = () => (
    <div className="header-profile-text">
        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
        <span className="header-profile-text">FirstName</span>
    </div>
      );

export default HeaderProfile;
