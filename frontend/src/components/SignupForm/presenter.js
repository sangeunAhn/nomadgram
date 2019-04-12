import React from "react";
import PropTypes from "prop-types";
import formStyles from "shared/formStyles.module.scss";
import FacebookLogin from 'react-facebook-login';

const SignupForm = (props, context) => (
    <div className={formStyles.formComponent}>
        <h3 className={formStyles.signupHeader}>
            {context.t("Sign up to see photos and videos from your friends")}.
        </h3>
            <FacebookLogin
                appId="276156286630090"
                autoLoad={false}
                fields="name,email,picture"
                callback={props.handleFacebookLogin}
                cssClass={formStyles.button}
                icon="fa-facebook-official"
                textButton={context.t("Log in with Facebook")}
            />
        <span className={formStyles.divider}>{context.t("or")}</span>
        <form className={formStyles.form} onSubmit={props.handleSubmit}>
            <input 
                type="email" 
                placeholder={context.t("Email")} 
                className={formStyles.textInput} 
                onChange={props.handleInputChange}
                value={props.emailValue}
                name="email"
            />
            <input 
                type="text" 
                placeholder={context.t("Full Name")} 
                className={formStyles.textInput} 
                onChange={props.handleInputChange}
                value={props.fullNameValue}
                name="name"
            />
            <input
                type="username"
                placeholder={context.t("Username")}
                className={formStyles.textInput}
                onChange={props.handleInputChange}
                value={props.userNameValue}
                name="username"
            />
            <input
                type="password"
                placeholder={context.t("Password")}
                className={formStyles.textInput}
                onChange={props.handleInputChange}
                value={props.passwordValue}
                name="password"
            />
            <input 
                type="submit" 
                value={context.t("Sign up")} 
                className={formStyles.button} 
            />
        </form>
        <p className={formStyles.terms}>
            By signing up, you agree to our <span>Terms $ Privacy Policy</span>
        </p>
    </div>
)

SignupForm.prototype = {
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired,
    emailValue: PropTypes.string.isRequired,
    fullNameValue: PropTypes.string.isRequired,
    userNameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
}

SignupForm.contextTypes = {
    t: PropTypes.func.isRequired
}

export default SignupForm;