import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {Button, Container, Grid, TextField} from "@material-ui/core";
import {AddPostPropsType} from "../Profile";
import {addPostAC} from "../../redux/actions";

//------------------------------------------------------------------------------------------

export const MyPosts:React.FC<AddPostPropsType> = (
    {postData,dispatch}
) => {
    const [value,setValue]=useState('')
    const changeNewPostMessage = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setValue(e.currentTarget.value)
    }
    const addingPost = () => {
        dispatch(addPostAC(value))
        setValue('')
    }
    return (
        <div className={s.myposts}>
            <Container fixed>
                <form noValidate autoComplete="off" >
                    <TextField id="outlined-basic" label="Write a post" fullWidth={true} onChange={changeNewPostMessage}
                               value={value}  variant="outlined" style={{margin: "20px 0 10px 0"}} multiline={true}
                    />
                    <Grid container justify={"flex-end"}>
                        <div></div>
                        <Button variant="contained" color="primary" size={'small'} onClick={addingPost}>
                            ADD POST
                        </Button>
                    </Grid>
                </form>
            </Container>
            <div>
                <Post post={postData.post}/>
            </div>
        </div>
    )
}
