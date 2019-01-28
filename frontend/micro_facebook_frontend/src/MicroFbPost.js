/*eslint-disable*/
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import MicroFbPostHeader from './MicroFbPostHeader';
import MicroFbPostContent from './MicroFbPostContent';
import MicroFbPostStatistics from './MicroFbPostStatistics';
import MicroFbPostButton from './MicroFbPostButton';
import MicroFbPostComment from './MicroFbPostComment';

const MicroFbPost = () => (
    <div className="micro-fb-post">
        <div>
            <MicroFbPostHeader />
        </div>
        <div>
            <MicroFbPostContent/>
        </div>
        <div>
            <MicroFbPostStatistics/>
        </div>
        <div>
            <MicroFbPostButton/>
        </div>
        <div>
            <MicroFbPostComment/>
        </div>
    </div>
      );

export default MicroFbPost;
/*eslint-disable*/
