import React from "react";
import {Field, InjectedFormProps} from "redux-form";
import {FormDataType} from "./Login";

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'Login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'Password'} component={'input'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
