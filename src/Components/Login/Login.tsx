import React from "react";
import {reduxForm} from "redux-form";
import {LoginForm} from "./LoginForm";


export type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}
export const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)