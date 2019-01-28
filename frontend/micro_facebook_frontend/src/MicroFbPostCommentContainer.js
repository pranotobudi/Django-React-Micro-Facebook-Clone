/*eslint-disable*/
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import MicroFbPostComment from './MicroFbPostComment'
import MicroFbPostCommentInput from './MicroFbPostCommentInput'

const MicroFbPostCommentContainer = () => (
    <div>
        <div><MicroFbPostCommentInput /></div>
        <div>            
            <MicroFbPostComment />
        </div>
        <div>
            Comment Reply
            <MicroFbPostComment />
            <MicroFbPostComment />
            <MicroFbPostComment />
        </div>
    </div>
      );

export default MicroFbPostCommentContainer;
/*eslint-disable*/
