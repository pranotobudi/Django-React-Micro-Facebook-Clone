/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Card } from 'antd';
import MicroFbCard from './MicroFbCard';

const LeftContainer = () => (
    <Card
        title="My Groups Shortcuts"
        extra={<a href="http://localhost">More</a>}
        style={{ width: 300 }}>
        <p>Django Python Web Framework</p>
        <p>React Developers</p>
        <p>Python Wordwide Community</p>
    </Card>
    // <MicroFbCard />
      );

export default LeftContainer;
/* eslint-enable */
