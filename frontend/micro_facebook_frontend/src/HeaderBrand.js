import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
// import { Row } from 'antd';
import myImage from './fb-640-640-white-bg.png';
// import myImage from './fb-640-640-transparent-bg.png';

// const imageName = require('../images/fb-640-640-white-bg.png');

const HeaderBrand = () => (
    <div>
        <img src={myImage} width="100" height="50" alt="brandLogo" />
    </div>
      );

export default HeaderBrand;
