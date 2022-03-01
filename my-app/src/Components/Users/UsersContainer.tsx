import {AppRootStateType} from "../redux/store";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {setUsers, setUsersForCurrentPage} from "../redux/thunks/users-thunks";
import { Users } from "./Users";
import { UserType } from "../../api/types/userType";



class UsersContainer extends React.Component<UsersCommonType, AppRootStateType> {

    componentDidMount() {
        this.props.setUsers(this.props.currentPage, this.props.pageSize)
    };

    getUsersForCurrentPage = (pageNumber: number) => {
        this.props.setUsersForCurrentPage(pageNumber, this.props.pageSize)
    }

    render() {

        return <Users getUsersForCurrentPage={this.getUsersForCurrentPage} users={this.props.users}
                       totalCount={this.props.totalCount}
                       currentPage={this.props.currentPage} pageSize={this.props.pageSize}
                       loadingStatus={this.props.loadingStatus}/>
    }
};


const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: state.users.items,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        pageSize: state.users.pageSize,
        loadingStatus: state.users.loadingStatus
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUsersForCurrentPage,setUsers}),
    withAuthRedirect
)(UsersContainer)

export type mapStateToPropsType = {
    users: Array<UserType>
    totalCount: number
    currentPage: number
    pageSize: number
    loadingStatus: boolean
}

type mapDispatchPropsType = {
    setUsersForCurrentPage:(page:number, count:number)=>void
    setUsers:(page:number, count:number)=>void
}
export type UsersCommonType = mapDispatchPropsType & mapStateToPropsType
