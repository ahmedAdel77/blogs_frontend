import React, { Fragment, useState } from 'react';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    inputField: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const schema = yup.object().shape({
    email: yup
        .string()
        .required('Email is Required')
        .email('Invalid email address'),
    password: yup
        .string()
        .required('Password is Required')
        .min(6, 'Password must be at least 6 characters'),
});

const LoginForm = (props) => {
    const classes = useStyles();

    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema,
        mode: 'onBlur',
    });

    const loginHandler = (data) => {
        alert(JSON.stringify(data));
        alert(JSON.stringify(errors));
        console.log(data);
    };

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const emailChangedHandler = (event) => {
    //     setEmail(event.target.value);
    // };

    // const passwordChangedHandler = (event) => {
    //     setPassword(event.target.value);
    // };

    return (
        <Fragment>
            <Box m={5}>
                <Typography
                    variant="h4"
                    gutterBottom
                    style={{
                        fontFamily: `'Raleway', sans-serif`,
                        textAlign: 'center',
                    }}
                >
                    Login
                </Typography>
            </Box>

            <Box m={5} mb={25}>
                <form onSubmit={handleSubmit(loginHandler)}>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        type="email"
                        name="email"
                        fullWidth
                        className={classes.inputField}
                        autoFocus
                        // value={email}
                        // onChange={emailChangedHandler}
                        placeholder="e.g. person@example.com"
                        inputRef={register}
                        error={errors.email}
                        helperText={errors.email?.message}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type="password"
                        name="password"
                        fullWidth
                        className={classes.inputField}
                        // value={password}
                        // onChange={passwordChangedHandler}
                        placeholder="********"
                        inputRef={register}
                        error={errors.password}
                        helperText={errors.password?.message}
                    />
                    <Box mt={3}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="baseline"
                        >
                            <Button
                                pt={10}
                                variant="contained"
                                color="primary"
                                type="submit"
                                className={classes.inputField}
                                // fullWidth
                                size="large"
                            >
                                Login
                            </Button>
                        </Grid>
                    </Box>
                </form>
            </Box>
        </Fragment>
    );
};

export default LoginForm;
