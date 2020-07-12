import React from 'react';
import { Switch, Route, Redirect, Link, NavLink } from 'react-router-dom';

import { connect } from 'react-redux';

import * as actionCreators from '../store/actions/index';

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    activeLink: {
        fontWeight: 'bolder',
        color: '#ccc',
    },
    Link: {
        textDecoration: 'none',
    },
}));

const Navbar = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color=""
                        aria-label="menu"
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography
                        variant="h6"
                        className={classes.title}
                        color="primary"
                        // component={Link}
                        // to="/"
                        onClick={props.onPageChange(1)}
                    >
                        <Link
                            to="/"
                            style={{ textDecoration: 'none' }}
                            onClick={() => props.onPageChange(1)}
                        >
                            YouBlogs
                        </Link>
                    </Typography>
                    <NavLink
                        to="/"
                        activeClassName={classes.activeLink}
                        style={{ textDecoration: 'none' }}
                        onClick={() => props.onPageChange(1)}
                    >
                        <Button color="">Home</Button>
                    </NavLink>
                    <NavLink
                        to="/login"
                        activeClassName={classes.activeLink}
                        style={{ textDecoration: 'none' }}
                    >
                        <Button color="">Login</Button>
                    </NavLink>
                    <NavLink
                        to="/register"
                        activeClassName={classes.activeLink}
                        style={{ textDecoration: 'none' }}
                    >
                        <Button color="">Register</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPageChange: (page) => dispatch(actionCreators.changePage(page)),
    };
};

export default connect(null, mapDispatchToProps)(Navbar);
