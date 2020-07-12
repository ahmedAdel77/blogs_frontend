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
    name: yup
        .string()
        .required('Name is Required')
        .test(
            'len',
            'Name must be more than 2 characters',
            (val) => val.length > 2
        ),
    email: yup
        .string()
        .required('Email is Required')
        .email('Invalid email address'),
    password: yup
        .string()
        .required('Password is Required')
        .min(6, 'Password must be at least 6 characters'),
});

const RegisterForm = (props) => {
    const classes = useStyles();

    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema,
        mode: 'onBlur',
    });

    const registerHandler = (data) => {
        alert(JSON.stringify(data));
        console.log(data);
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const nameChangedHandler = (event) => {
        setName(event.target.value);
    };

    const emailChangedHandler = (event) => {
        setEmail(event.target.value);
    };

    const passwordChangedHandler = (event) => {
        setPassword(event.target.value);
    };

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
                    Register
                </Typography>
            </Box>

            <Box m={5} mb={16}>
                <form onSubmit={handleSubmit(registerHandler)}>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        type="text"
                        name="name"
                        fullWidth
                        className={classes.inputField}
                        autoFocus
                        // value={name}
                        // onChange={nameChangedHandler}
                        placeholder="e.g. Ahmed Adel"
                        inputRef={register}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        type="email"
                        name="email"
                        fullWidth
                        className={classes.inputField}
                        // value={email}
                        // onChange={emailChangedHandler}
                        placeholder="e.g. person@example.com"
                        inputRef={register}
                        error={!!errors.email}
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
                        error={!!errors.password}
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
                                Register
                            </Button>
                        </Grid>
                    </Box>
                </form>
            </Box>
        </Fragment>
    );
};

export default RegisterForm;
