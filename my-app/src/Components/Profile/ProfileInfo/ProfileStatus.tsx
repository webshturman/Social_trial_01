import React from "react";



export class ProfileStatus extends React.Component<any, any>{
    state = {
        editMode:false
    }
    render(){
        return (
            <div>
                {!this.state.editMode &&
                <div>{this.props.status}</div>
                }
                {this.state.editMode &&
                <div>
                    <input type="text" value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}