import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import * as actionCreators from '../store/actions/index';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Switch, Route, Redirect, Link, NavLink } from 'react-router-dom';

const Footer = (props) => {
    return (
        <Fragment>
            <BottomNavigation
                style={{ marginTop: '100px' }}
                color="primary"
                value="Recents"
                onChange={(event, newValue) => {
                    // setValue(newValue);
                }}
                showLabels
                // className={classes.root}
            >
                <BottomNavigationAction
                    label="Home"
                    component={Link}
                    to="/"
                    onClick={() => props.onPageChange(1)}
                />
                <BottomNavigationAction label="About" />
                <BottomNavigationAction label="Contact" />
            </BottomNavigation>
        </Fragment>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPageChange: (page) => dispatch(actionCreators.changePage(page)),
    };
};

export default connect(null, mapDispatchToProps)(Footer);
