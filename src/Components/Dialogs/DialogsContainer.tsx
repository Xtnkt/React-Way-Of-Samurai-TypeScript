import React from 'react';
import {AddMessageAC, DialogsPageType, UpdateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from 'redux';
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage: DialogsPageType,
}
type MapDispatchToProps = {
    updateNewMessageText: (newMessage: string) => void,
    sendMessage: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
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
const WithAuthRedirectComponent = WithAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(WithAuthRedirectComponent)
