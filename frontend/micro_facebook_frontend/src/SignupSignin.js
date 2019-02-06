import React from 'react';
import SignupSigninHeader from './SignupSigninHeader';
import SignupSigninLeftContent from './SignupSigninLeftContent';

const SignupSignin = () => (
    <div>
        <div>
            <SignupSigninHeader />
        </div>
        <div className="signup-signin-main-content">Signup Signin Main Content
            <div>
                <SignupSigninLeftContent />
            </div>
            <div>Signup Signin Right Content</div>
        </div>
    </div>
);


export default SignupSignin;
