import React from 'react';

import {useFormik} from "formik";
import Grid from '@material-ui/core/Grid';
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email Required';
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (values.password.length < 2) {
                errors.password = 'Password should be at least 2 signs';
            }
            return errors;
        },
        onSubmit: values => {
            // dispatch(setLoginData(values))
            formik.resetForm()
        },

    })
    // if (isLoggedIn) return <Navigate to={'/'}/>

    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'}> here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField label='Email' margin="normal"
                                   {...formik.getFieldProps("email")}
                                   error={!!formik.errors.email && formik.touched.email}
                                   helperText={formik.touched.email ? formik.errors.email : ''}
                        />
                        <TextField type="password" label='Password' margin="normal"
                                   {...formik.getFieldProps("password")}
                                   error={!!formik.errors.password && formik.touched.password}
                                   helperText={formik.touched.password ? formik.errors.password : ''}
                            // name={"password"}
                            // onChange={formik.handleChange}
                            // value={formik.values.password}
                            // onBlur={formik.handleBlur}
                        />
                        <FormControlLabel label={'Remember me'} control={
                            <Checkbox checked={formik.values.rememberMe}
                                      {...formik.getFieldProps("rememberMe")}/>
                        }/>
                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Login
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
};

