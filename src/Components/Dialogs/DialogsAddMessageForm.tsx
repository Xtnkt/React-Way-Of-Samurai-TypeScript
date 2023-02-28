import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

export type DialogsFormDataType = {
    newMessageText: string,

}
const AddMessageForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your message'} name={'newMessageText'} component={'textarea'}/>
            </div>

            <div>
                <button>add message</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<DialogsFormDataType>({form: 'dialogsAddMessageForm'})(AddMessageForm)
