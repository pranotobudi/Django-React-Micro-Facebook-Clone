/*eslint-disable*/
import React from 'react';
import { Avatar } from 'antd'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

const MicroFbPostComment = () => (
    <div>
        <div className="micro-fb-inline-block micro-fb-post-comment-avatar-wrapper">
            <div className="micro-fb-inline-block micro-fb-post-comment-avatar">
                <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
            </div>
        </div>
        <div className="micro-fb-inline-block micro-fb-post-comment-second-wrapper">
            <div>
                <div className="micro-fb-inline-block micro-fb-post-comment-name">
                    Firstname Lastname
                </div>
                <div className="micro-fb-inline-block micro-fb-post-comment-text">
                    Comment reply Comment reply Comment reply Comment reply ... ....
                </div>
            </div>
            <div>
                <div className="micro-fb-inline-block micro-fb-post-comment-like-button">
                    Like
                </div>
                <div className="micro-fb-inline-block micro-fb-post-comment-reply-button">
                    Reply
                </div>
            </div>
        </div>

    </div>
      );

export default MicroFbPostComment;
/*eslint-disable*/
