import React, {Component} from 'react';
import './LoginScreen.css'
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import {inject, observer} from "mobx-react";
import './RegisterScreen.css';

const RegisterScreen = inject('store')(observer((props) => (
    <div>
    <Formik
        initialValues={{name: "", email: "", password: "", password2: "" }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                props.store.socketStore.sendRegister({email: values.email, name: values.name, password: values.password});
                setSubmitting(false);
            }, 500);
        }}

        validationSchema={Yup.object().shape({
            name: Yup.string()
                .required("Required"),
            email: Yup.string()
                .email()
                .required("Required"),
            password: Yup.string()
                .required("No password provided.")
                .min(6, "Password is too short - should be 6 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number."),
            password2: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
        })}
    >
        {(props) => {
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
                            className={errors.name && touched.name ? "error inputTb" : "inputTb"}
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
                            className={errors.email && touched.email ? "error inputTb" : "inputTb"}
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
                            className={errors.password && touched.password ? "error inputTb" : "inputTb"}
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
                            className={errors.password2 && touched.password2 ? "error inputTb" : "inputTb"}
                        />
                        {errors.password2 && touched.password2 && (
                            <div className="input-feedback">{errors.password2}</div>
                        )}
                    </div>
                    <button className="registerBtn" type="submit" disabled={isSubmitting}>
                        Register
                    </button>
                </form>
            );
        }}
    </Formik>
        <a id="loginBtn" href="/">Login</a>
    </div>
)));

export default RegisterScreen;