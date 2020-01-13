import React from "react";
import "./LoginScreen.css";
import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { inject, observer } from "mobx-react";

const LoginScreen = inject("store")(
    observer(props => {

        const Responses = {
            1: 'email',
            2: 'password'
        };

        return(
            <div>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values, actions) => {
                        console.log(actions)
                        setTimeout(() => {
                            props.store.socketStore.sendLogin({
                                email: values.email,
                                password: values.password
                            });
                            actions.setFieldError(Responses[props.store.userStore.loginCode], props.store.userStore.loginMessage);
                            actions.setSubmitting(false);
                        }, 500);
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .required("Please enter your email"),
                        password: Yup.string()
                            .required("Please enter your password")
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
                            <form onSubmit={handleSubmit} className="loginForm">
                                <div className="loginHeader">
                                    <h1>Welcome</h1>
                                    <p>Login to gain access to all your boards and projects.</p>
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
                                <button
                                    className="loginBtn"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Login
                                </button>
                            </form>
                        );
                    }}
                </Formik>
                <p id="loginBtn" onClick={props.onScreenSwitch}>
                    Register
                </p>
            </div>
        )})
);

export default LoginScreen;
