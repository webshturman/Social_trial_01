import React, {ChangeEvent, FC, useState} from "react";

type ProfileStatusType = {
    status:string
    handleUpdateStatus:(status:string)=> void
}


export const ProfileStatus: FC<ProfileStatusType> = ({status, handleUpdateStatus}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState<string>(status)

   const activateEditMode=()=>{
       setEditMode(true)
    }
    const deActivateEditMode=()=>{
        setEditMode(false)
        handleUpdateStatus(value)
    }
    const setUpdatedStatus=(event:ChangeEvent<HTMLInputElement>)=>{
        setValue(event.currentTarget.value)
    }
        return (
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status ? status : 'no status'}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input onBlur={deActivateEditMode} autoFocus={true} type="text"
                        value={value}
                    onChange={setUpdatedStatus}/>
                </div>
                }
            </div>
        )
}




// type ProfileStatusType = {
//     status:string
//     handleUpdateStatus:(status:string)=> void
// }
//
//
// export class ProfileStatus extends React.Component<ProfileStatusType>{
//     state = {
//         editMode:false,
//         value:this.props.status
//     }
//     activateEditMode=()=>{
//         this.setState({
//             editMode:true
//         })
//     }
//     deActivateEditMode=()=>{
//         this.setState({
//             editMode:false,
//         })
//         this.props.handleUpdateStatus(this.state.value)
//     }
//     setUpdatedStatus=(event:ChangeEvent<HTMLInputElement>)=>{
//         this.setState({
//             value:event.currentTarget.value
//         })
//     }
//
//     render(){
//         return (
//             <div>
//                 {!this.state.editMode &&
//                 <div>
//                     <span onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : 'no status'}</span>
//                 </div>
//                 }
//                 {this.state.editMode &&
//                 <div>
//                     <input onBlur={this.deActivateEditMode} autoFocus={true} type="text"
//                            value={this.state.value}
//                            onChange={this.setUpdatedStatus}/>
//                 </div>
//                 }
//             </div>
//         )
//     }
// }