import React, {
    DetailedHTMLProps,
    InputHTMLAttributes,
    ReactNode,
    TextareaHTMLAttributes
} from "react";
import styles from './FormsControls.module.css'

type DefaultTextareaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
type TextareaPropsType = Omit<DefaultTextareaPropsType, 'type'> & {
    input: any,
    meta: any,
    placeholder: string
}
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>
type InputPropsType = Omit<DefaultInputPropsType, 'type'> & {
    input: any,
    meta: any,
    placeholder: string
}
type FormControlType = TextareaPropsType | InputPropsType & {
    children: ReactNode
}

const FormControl: React.FC<FormControlType> = ({
                                                    input,
                                                    meta,
                                                    children,
                                                    ...restProps
                                                }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea: React.FC<TextareaPropsType> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl{...props}> <textarea {...props.input} {...restProps}/></FormControl>
}
export const Input: React.FC<InputPropsType> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}> <input {...props.input} {...restProps}/></FormControl>
}