import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Card } from 'antd';

const MiddleContainer = () => (
    <div>
        <Card
            title="Default size card"
            extra={<a href="http://localhost">More</a>}
            style={{ width: 800 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        <Card
            title="Default size card"
            extra={<a href="http://localhost">More</a>}
            style={{ width: 800 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        <Card
            title="Default size card"
            extra={<a href="http://localhost">More</a>}
            style={{ width: 800 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>

    </div>

      );

export default MiddleContainer;
