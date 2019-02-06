import React from 'react';
import { Input, Select, DatePicker } from 'antd';

const Option = Select.Option;

class SignupSigninRightContentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            reEmail: '',
            password: '',
            gender: '',
            birthday: '',
        };

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeReEmail = this.onChangeReEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeBirthday = this.onChangeBirthday.bind(this);
        this.onClickForm = this.onClickForm.bind(this);
    }
    onChangeFirstName(e) {
        this.setState({ firstName: e.target.value });
        console.log(`onChangeFirstName: ${e.target.value}`);
    }
    onChangeLastName(e) {
        this.setState({ lastName: e.target.value });
        console.log(`onChangeLastName: ${e.target.value}`);
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value });
        console.log(`onChangeEmail: ${e.target.value}`);
    }
    onChangeReEmail(e) {
        this.setState({ reEmail: e.target.value });
        console.log(`onChangeReEmail: ${e.target.value}`);
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value });
        console.log(`onChangePassword: ${e.target.value}`);
    }
    onChangeGender(value) {
        this.setState({ gender: value });
        console.log(`onChangeGender: ${value}`);
    }
    onChangeBirthday(dateMoment, dateString) {
        this.setState({ birthday: dateString });
        console.log(`onChangeBirthday: ${dateString}`);
    }
    onClickForm() {
        console.log('onClickForm');
        console.log(`firstName: ${this.state.firstName}`);
        console.log(`lastName: ${this.state.lastName}`);
        console.log(`email: ${this.state.email}`);
        console.log(`reEmail: ${this.state.reEmail}`);
        console.log(`password: ${this.state.password}`);
        console.log(`gender: ${this.state.gender}`);
        console.log(`birthday: ${this.state.birthday}`);
    }
    render() {
        return (
            <div>
                <div className="signup-signin-right-content-form-row">
                    <div className="signup-signin-right-content-form-row-text">First name:</div>
                    <div className="signup-signin-right-content-form-row-input">
                        <Input
                            onChange={this.onChangeFirstName} />
                    </div>
                </div>
                <div className="signup-signin-right-content-form-row">
                    <div className="signup-signin-right-content-form-row-text">Last name:</div>
                    <div className="signup-signin-right-content-form-row-input">
                        <Input
                            onChange={this.onChangeLastName} />
                    </div>
                </div>
                <div className="signup-signin-right-content-form-row">
                    <div className="signup-signin-right-content-form-row-text">Your email:</div>
                    <div className="signup-signin-right-content-form-row-input">
                        <Input
                            onChange={this.onChangeEmail} />
                    </div>
                </div>
                <div className="signup-signin-right-content-form-row">
                    <div className="signup-signin-right-content-form-row-text">Re-enter email:</div>
                    <div className="signup-signin-right-content-form-row-input">
                        <Input
                            onChange={this.onChangeReEmail} />
                    </div>
                </div>
                <div className="signup-signin-right-content-form-row">
                    <div className="signup-signin-right-content-form-row-text">New Password:</div>
                    <div className="signup-signin-right-content-form-row-input">
                        <Input
                            onChange={this.onChangePassword} />
                    </div>
                </div>
                <div className="signup-signin-right-content-form-row">
                    <div className="signup-signin-right-content-form-row-text">I am:</div>
                    <div className="signup-signin-right-content-form-row-input">
                        <Select
                            defaultValue="Gender"
                            style={{ width: 120 }}
                            onChange={this.onChangeGender}>
                            <Option value="men">Men</Option>
                            <Option value="woman">Woman</Option>
                        </Select>
                    </div>
                </div>
                <div className="signup-signin-right-content-form-row">
                    <div className="signup-signin-right-content-form-row-text">Birthday:</div>
                    <div className="signup-signin-right-content-form-row-input">
                        <DatePicker
                            onChange={this.onChangeBirthday} />
                    </div>
                </div>
                <div className="signup-signin-right-content-form-row">
                    <div className="signup-signin-right-content-form-row-text" />
                    <div className="signup-signin-right-content-form-row-input">
                        <input
                            type="button"
                            value="Sign Up"
                            style={{ backgroundColor: '#6BA74E', color: 'white', width: 100 }}
                            onClick={this.onClickForm} />
                    </div>
                </div>
            </div>
        );
    }
}


export default SignupSigninRightContentForm;
