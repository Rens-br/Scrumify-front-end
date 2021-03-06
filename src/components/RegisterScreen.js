import React, {Component} from "react";
import "./LoginScreen.css";
import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { inject, observer } from "mobx-react";
import "./RegisterScreen.css";
import Popup from "./Popup";

const RegisterScreen = inject("store")(
    observer(class RegisterScreen extends Component{
        constructor(props) {
            super(props);
            this.state = {
                popupOpen: false
            }
        }


        Responses = {
            1: 'email',
            2: 'password'
        };

        render() {
            return(
                <div>
                    <Formik
                        initialValues={{ name: "", email: "", password: "", password2: "" }}
                        onSubmit={(values,actions) => {
                            this.props.store.socketStore.sendRegister({
                                email: values.email,
                                name: values.name,
                                password: values.password
                            });

                            console.log(this.props.store.userStore.registerMessage);
                            setTimeout(() => {
                                actions.setFieldError(this.Responses[this.props.store.userStore.registerCode], this.props.store.userStore.registerMessage);
                                if(this.props.store.userStore.registerCode === 0) this.setState({popupOpen: true});
                                this.props.store.userStore.clearRegister();
                                actions.setSubmitting(false);
                            }, 200);
                        }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().required("Please enter your name"),
                            email: Yup.string()
                                .email()
                                .required("Please enter your email"),
                            password: Yup.string()
                                .required("Please enter your password")
                                .min(6, "Your password need to be at least 6 characters"),
                            password2: Yup.string().oneOf(
                                [Yup.ref("password"), null],
                                "Entered passwords do not match"
                            )
                        })}
                    >
                        {props => {
                            const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        } = props;
                            return (
                            <form onSubmit={handleSubmit} className="registerForm">
                            <div className="registerHeader">
                            <h1>Welcome</h1>
                            <p>Register to gain access to all your boards and projects.</p>
                            </div>
                            <div id="inputField">
                            <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                            errors.name && touched.name ? "error inputTb" : "inputTb"
                        }
                            />
                            {errors.name && touched.name && (
                                <div className="input-feedback">{errors.name}</div>
                            )}
                            </div>
                            <div id="inputField">
                            <input
                            name="email"
                            type="text"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                            errors.email && touched.email ? "error inputTb" : "inputTb"
                        }
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}
                            </div>
                            <div id="inputField">
                            <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                            errors.password && touched.password
                                ? "error inputTb"
                                : "inputTb"
                        }
                            />
                            {errors.password && touched.password && (
                                <div className="input-feedback">{errors.password}</div>
                            )}
                            </div>
                            <div id="inputField">
                            <input
                            name="password2"
                            type="password"
                            placeholder="Confirm password"
                            value={values.password2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                            errors.password2 && touched.password2
                                ? "error inputTb"
                                : "inputTb"
                        }
                            />
                            {errors.password2 && touched.password2 && (
                                <div className="input-feedback">{errors.password2}</div>
                            )}
                            </div>
                            <button
                            className="registerBtn"
                            type="submit"
                            disabled={isSubmitting}
                            >
                            Register
                            </button>
                            </form>
                            );
                        }}
                    </Formik>
                    <p id="loginBtn" onClick={this.props.onScreenSwitch}>
                        Login
                    </p>
                    {this.state.popupOpen && <Popup onDismiss={this.props.onScreenSwitch} content={this.props.store.userStore.registerMessage}/>}
                </div>
            )}
    })
);

export default RegisterScreen;
