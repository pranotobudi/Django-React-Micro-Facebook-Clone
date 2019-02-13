import React, { Fragment } from 'react';
import { FormValidation } from 'calidation';
// import "./styles.css";

const formConfig = {
    username: {
        isRequired: 'Username is required!',
    },
    password: {
        isRequired: 'Password is also required!',
        isMinLength: {
            message: 'Password must at least be 8 characters long',
            length: 8,
        },
    },
};


const SignupSigninRightContentFormCalidation = (props) => (
    <div className="container">
        <h2>Sample form</h2>
        <FormValidation onSubmit={props.onSubmit} config={config}>
        {({ fields, errors, submitted }) => (
            <div>
                <label>
                    Username: <input name="username" value={fields.username} />
                    {submitted && errors.username && <span>{errors.username}</span>}
                </label>
                <label>
                    Password: <input name="password" value={fields.password} />
                    {submitted && errors.password && <span>{errors.password}</span>}
                </label>
                <button>Log in</button>
            <div/>
        )}
    </FormValidation>

    </div>
);

export default SignupSigninRightContentFormCalidation;
