import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddPostFormDataType = {
    newPost: string
}

const AddPostForm: React.FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Add new post'} name={'newPost'} component={'textarea'}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}
export const AddPostFormRedux = reduxForm<AddPostFormDataType>({form: 'profileAddPostForm'})(AddPostForm)
