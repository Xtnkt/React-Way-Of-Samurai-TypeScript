import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type DialogsFormDataType = {
    newMessageText: string,
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your message'} name={'newMessageText'}
                       component={Textarea} validate={[required, maxLength50]}/>
            </div>

            <div>
                <button>add message</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<DialogsFormDataType>({form: 'dialogsAddMessageForm'})(AddMessageForm)
