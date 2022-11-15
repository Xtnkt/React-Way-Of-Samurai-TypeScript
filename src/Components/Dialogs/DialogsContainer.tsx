import React from 'react';
import {AddMessageAC, DialogsPageType, UpdateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { Dispatch } from 'redux';

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToProps = {
    updateNewMessageText: (newMessage: string) => void,
    sendMessage: () => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {
    return {
        sendMessage: () => {
            dispatch(AddMessageAC())
        },
        updateNewMessageText : (newMessage: string) => {
            dispatch(UpdateNewMessageTextAC(newMessage))
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

// export const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
//
//     const state = props.store.getState().dialogsPage
//
//     const addMessage = () => {
//         props.store.dispatch(AddMessageAC())
//     }
//     const updateNewMessageText = (newMessage:string) => {
//         props.store.dispatch(UpdateNewMessageTextAC(newMessage))
//     }
//
//     return (
//         <Dialogs updateNewMessageText={updateNewMessageText}
//                  sendMessage={addMessage}
//                  dialogsPage={state}/>
//     );
// };
// export const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const state = store.getState().dialogsPage
//                 const addMessage = () => {
//                     store.dispatch(AddMessageAC())
//                 }
//                 const updateNewMessageText = (newMessage: string) => {
//                     store.dispatch(UpdateNewMessageTextAC(newMessage))
//                 }
//                 return <Dialogs updateNewMessageText={updateNewMessageText}
//                                 sendMessage={addMessage}
//                                 dialogsPage={state}/>
//             }
//             }
//         </StoreContext.Consumer>
//     );
// };