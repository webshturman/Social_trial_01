import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {Button, Container, Grid, TextField} from "@material-ui/core";
import {AddPostPropsType} from "../Profile";


//------------------------------------------------------------------------------------------

export const MyPosts:React.FC<AddPostPropsType> = (
    {postData,dispatch}
) => {


    const changeNewPostMessage = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        // changingPostMessage(e.currentTarget.value)
        dispatch({type: 'CHANGE-POST-MESSAGE', newText:e.currentTarget.value})
    }
    const addingPost = () => {
        dispatch({type: 'ADD-POST'})
    }
    return (
        <div className={s.myposts}>
            <Container fixed>
                <form noValidate autoComplete="off" >
                    <TextField id="outlined-basic" label="Write a post" fullWidth={true} onChange={changeNewPostMessage}
                               value={postData.newPostMessage}  variant="outlined" style={{margin: "20px 0 10px 0"}} multiline={true}
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
