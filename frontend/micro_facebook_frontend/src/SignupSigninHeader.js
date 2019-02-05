import React from 'react';
import myImage from './facebook-text-white.jpg';

const SignupSigninHeader = () => (
    <div className="signup-signin-header">
        <div className="signup-signin-header-brand">
            <img src={myImage} width="300px" height="100px" alt="facebook-text-white" />
        </div>
        <div className="signup-signin-header-login">Right Section - Login</div>
    </div>
);

export default SignupSigninHeader;
