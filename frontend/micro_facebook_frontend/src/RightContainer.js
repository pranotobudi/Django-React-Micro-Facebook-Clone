import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Card } from 'antd';

const RightContainer = () => (
    <Card
        title="Default size card"
        extra={<a href="http://localhost">More</a>}
        style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </Card>

      );

export default RightContainer;
