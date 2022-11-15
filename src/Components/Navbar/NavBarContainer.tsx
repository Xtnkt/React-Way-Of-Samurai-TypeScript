import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {FriendsNavbarType} from "../../redux/friendsNavbar-reducer";
import {Navbar} from "./Navbar";

type MapStatePropsType = {
    friendsNavBar: FriendsNavbarType
}
type MapDispatchToProps = {

}
export type FriendsPropsType = MapStatePropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        friendsNavBar: state.friendsNavbar
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToProps => {
    return {

    }
}
export const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

