import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    status:string
    handleUpdateStatus:(status:string)=> void
}


export class ProfileStatus extends React.Component<ProfileStatusType>{
    state = {
        editMode:false,
        value:this.props.status
    }
    activateEditMode=()=>{
        this.setState({
            editMode:true
        })
    }
    deActivateEditMode=()=>{
        this.setState({
            editMode:false,
        })
        this.props.handleUpdateStatus(this.state.value)
    }
    setUpdatedStatus=(event:ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            value:event.currentTarget.value
        })
    }

    render(){
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : 'no status'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onBlur={this.deActivateEditMode} autoFocus={true} type="text"
                        value={this.state.value}
                    onChange={this.setUpdatedStatus}/>
                </div>
                }
            </div>
        )
    }
}