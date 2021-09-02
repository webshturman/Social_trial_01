import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {Button, Container, Grid, TextField} from "@material-ui/core";
import {AddPostPropsType} from "../Profile";


//------------------------------------------------------------------------------------------

export const MyPosts:React.FC<AddPostPropsType> = ({addPost}) => {
    const newPost = React.createRef<HTMLTextAreaElement>();
    const addingPost = () => {
        if(newPost.current){
            addPost(newPost.current.value)
            newPost.current.value = ""
        }
    }
    return (
        <div className={s.myposts}>
            <Container fixed>
                <form noValidate autoComplete="off" >
                    <TextField id="outlined-basic" label="Write a post" fullWidth={true} inputRef={newPost}
                               variant="outlined" style={{margin: "20px 0 10px 0"}} multiline={true}
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
                <Post/>
            </div>
        </div>
    )
}
