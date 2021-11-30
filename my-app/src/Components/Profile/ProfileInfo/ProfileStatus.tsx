import React from "react";

type ProfileStatusType = {
    status:string
}


export class ProfileStatus extends React.Component<ProfileStatusType>{
    state = {
        editMode:false,
        status:this.props.status
    }
    activateEditMode=()=>{
        this.setState({
            editMode:true
        })
    }
    deActivateEditMode=()=>{
        this.setState({
            editMode:false
        })
    }
    render(){
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onBlur={this.deActivateEditMode} autoFocus={true} type="text" value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}