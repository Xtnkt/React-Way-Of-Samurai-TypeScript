import React from 'react';
import {AddMessageAC, DialogsPageType, UpdateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from 'redux';

type MapStatePropsType = {
    dialogsPage: DialogsPageType,
    isAuth: boolean
}
type MapDispatchToProps = {
    updateNewMessageText: (newMessage: string) => void,
    sendMessage: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        sendMessage: () => {
            dispatch(AddMessageAC())
        },
        updateNewMessageText: (newMessage: string) => {
            dispatch(UpdateNewMessageTextAC(newMessage))
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
