import React, {Component} from 'react';
import './LoginScreen.css'
import CustomInputField from "./CustomInputField";
import CustomButton from "./CustomButton";
import {inject, observer} from "mobx-react";
import {Redirect} from "react-router-dom";

const LoginScreen = inject('store')(observer(class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: true,
            isForgotPassword: false,
            isSmall: window.innerWidth <= 1000,
            userName: '',
            email: '',
            pass: '',
            pass2: '',
            warning: '',
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    };

    onLoginUser = () => {
        this.props.store.userStore.authenticateUser({email: this.state.email, password: this.state.pass}, this.loginCallback)
    };

    loginCallback = (response) => {
        console.log(response)
        if(response.message){
            this.setState({warning: response.message});
        }
        else{
            this.setState({warning: ''});
        }
    };

    onResize = () => {
        this.setState({isSmall: window.innerWidth <= 1000})
    };

    renderLoginScreen = () => {
        return (
            <div>
                <h1>Welcome</h1>
                <p style={{marginBottom: this.props.store.userStore.loginMessage === '' ? '60px' : '20px'}}>Login to gain access to al your boards and projects.</p>
                {this.props.store.userStore.loginMessage && <p className='warning'>{this.props.store.userStore.loginMessage}</p>}
                <CustomInputField icon='email' placeholder='Email' value={this.state.email} valueChanged={(value) => this.setState({email: value})}/>
                <CustomInputField icon='lock' isPassword placeholder='Password' value={this.state.pass} valueChanged={(value) => this.setState({pass: value})}/>
                <CustomButton label='Sign-in' onClick={() => this.onLoginUser()}/>
                <p className='bottomText' id='clickable' onClick={() => this.setState({isForgotPassword: true})}>Forgot password?</p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <p className='bottomText'>Dont have an account yet?</p>
                    <p className='bottomText' id='clickable' onClick={() => this.setState({isLogin: false})}>Register</p>
                </div>
            </div>
        )
    };

    renderForgotPasswordScreen = () => {
        return (
            <div>
                <h1>Welcome</h1>
                <p>Enter you email below to receive instructions on how to reset your password.</p>
                <CustomInputField icon='email' placeholder='Email' valueChanged={() => console.log('emailChanged')}/>
                <CustomButton label='Send recovery mail' onClick={() => console.log('Reset password')}/>
                <p className='bottomText' id='clickable' onClick={() => this.setState({isForgotPassword: false})}>Back</p>
            </div>
        )
    };

    renderRegisterScreen = () => {
      return (
          <div>
              <h1>Welcome</h1>
              <p>Create an account to start working more efficiently.</p>
              <CustomInputField icon='person' placeholder='Username' valueChanged={() => console.log('nameChanged')}/>
              <CustomInputField icon='email' placeholder='Email' valueChanged={() => console.log('emailChanged')}/>
              <CustomInputField icon='lock' isPassword placeholder='Password' valueChanged={() => console.log('password')}/>
              <CustomInputField icon='lock' isPassword placeholder='Re-enter password' valueChanged={() => console.log('password')}/>
              <CustomButton label='Create account' onClick={() => console.log('Login clicked')}/>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                  <p className='bottomText'>Already have an account?</p>
                  <p className='bottomText' id='clickable' onClick={() => this.setState({isLogin: true})}>Login</p>
              </div>
          </div>
      )
    };

    render() {
        if(this.props.store.userStore.loggedIn){
            return <Redirect to="/" />;
        }
        else {
            return (
                <div class='loginScreen'>
                    <div className='left' style={{flex: !this.state.isSmall ? '0.3 0 0' : '1'}}>
                        {this.state.isForgotPassword ? this.renderForgotPasswordScreen() : this.state.isLogin ? this.renderLoginScreen() : this.renderRegisterScreen()}
                    </div>
                    {!this.state.isSmall &&
                    <div className='right'>
                        <svg viewBox="0 0 35 35">
                            <path
                                d="M19,8.94a13.29,13.29,0,0,1,7.58,19.7,12.79,12.79,0,0,1-21.27,1,13.18,13.18,0,0,1-2.38-5.43L6,23.62a9.75,9.75,0,0,0,19.34-1.33c.3-12.27-16-14.55-19.21-3.13L9.31,20,3.82,21.67,0,17.54l3.07.81A13,13,0,0,1,16.89,8.53a9,9,0,0,1,13.88-7,9.28,9.28,0,0,1-.44,15.67l.65,1.1L28.53,17l0-2.9.72,1.24a6.19,6.19,0,0,0,1.16-.85,7.13,7.13,0,0,0-1-11.29A6.9,6.9,0,0,0,19,8.94Z"/>
                        </svg>
                        <h1>Scrumify</h1>
                    </div>
                    }
                </div>
            );
        }
    }
}));

export default LoginScreen;