import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {Button, Container, Grid, TextField} from "@material-ui/core";


//------------------------------------------------------------------------------------------

export const MyPosts: React.FC = () => {
    // @ts-ignore
    return (
        <div className={s.myposts}>
            My post
            <Container fixed>

                <form noValidate autoComplete="off">

                    <TextField id="outlined-basic" label="Write a post" fullWidth={true}
                               variant="outlined"
                               style={{margin: "20px 0 10px 0"}}
                    />
                    <Grid container
                          justify={"flex-end"}
                    >
                        <div></div>
                        <Button variant="contained" color="primary" size={'small'}>
                            SEND
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
