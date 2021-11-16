import {AppRootStateType} from "../redux/store";
import {followUser, getUsersFromApi, setCurrentPage, setLoadingStatus, setTotalCount} from "../redux/actions";
import {connect} from "react-redux";
import {UsersAPI, UserType} from "../../api/user-api";
import React from "react";
import {UsersC} from "./UsersC";


export class UsersContainer extends React.Component<UsersCommonType, AppRootStateType> {

    // constructor(props: UsersCommonType) {
    //     super(props)
    //     UsersAPI.getUsers()
    //         .then((res) => {
    //             this.props.getUsersFromApi(res.data.items)
    //         })
    // }
    componentDidMount() {
        this.props.setLoadingStatus(true)
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then((res) => {
                this.props.getUsersFromApi(res.data.items)
                this.props.setTotalCount(res.data.totalCount)
                this.props.setLoadingStatus(false)
            })
    };

    getUsersForCurrentPage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setLoadingStatus(true)
        UsersAPI.getUsers(pageNumber, this.props.pageSize)
            .then((res) => {
                this.props.getUsersFromApi(res.data.items)
                this.props.setLoadingStatus(false)
            })
    }

    render() {
        return <UsersC getUsersForCurrentPage={this.getUsersForCurrentPage} users={this.props.users}
                       followUser={this.props.followUser} totalCount={this.props.totalCount}
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
export const UsersConnector = connect(mapStateToProps, {
    followUser, getUsersFromApi, setCurrentPage, setTotalCount, setLoadingStatus
})(UsersContainer)


export type mapStateToPropsType = {
    users: Array<UserType>
    totalCount: number
    currentPage: number
    pageSize: number
    loadingStatus: boolean
}

export type mapDispatchPropsType = {
    followUser: (isFollow: boolean, userID: number) => void
    getUsersFromApi: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
    setLoadingStatus: (status: boolean) => void
}
export type UsersCommonType = mapDispatchPropsType & mapStateToPropsType