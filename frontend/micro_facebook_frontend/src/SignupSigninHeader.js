import React from 'react';
import { Input, Button } from 'antd';
import myImage from './facebook-text-white.jpg';

const SignupSigninHeader = () => (
    <div className="signup-signin-header">
        <div className="signup-signin-header-brand">
            <img src={myImage} width="250px" height="80px" alt="facebook-text-white" />
        </div>
        <div className="signup-signin-header-login">
            <div className="signup-signin-header-login-email">
                <div className="signup-signin-header-login-email-text">Email</div>
                <div>
                    <Input />
                </div>
                <div>
                    <input type="checkbox" />
                    <span className="signup-signin-header-login-email-text-bottom">Keep Me Logged in</span>
                </div>
            </div>
            <div className="signup-signin-header-login-password">
                <div className="signup-signin-header-login-password-text">Password</div>
                <div>
                    <Input />
                </div>
                <div>
                    <input type="checkbox" />
                    <span className="signup-signin-header-login-password-text-bottom">Forget your password?</span>
                </div>
            </div>
            <Button type="primary">Log in</Button>

        </div>
    </div>
);

export default SignupSigninHeader;
