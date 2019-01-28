/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Card } from 'antd';
import MicroFbPost from './MicroFbPost';

const MiddleContainer = () => (
    <div>
        <MicroFbPost />
        <Card
            title="Default size card"
            extra={<a href="http://localhost">More</a>}
            style={{ width: 750 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        <Card
            title="Default size card"
            extra={<a href="http://localhost">More</a>}
            style={{ width: 750 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
        <Card
            title="Default size card"
            extra={<a href="http://localhost">More</a>}
            style={{ width: 750 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>

    </div>

      );

export default MiddleContainer;

/* eslint-enable */
