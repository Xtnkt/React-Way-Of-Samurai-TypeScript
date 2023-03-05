import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType} from "./Login";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import styles from '../common/FormsControls/FormsControls.module.css'

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'}
                       component={Input} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/>remember me
            </div>
            {
                props.error &&
                <div className={styles.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
