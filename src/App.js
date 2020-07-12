import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import * as actionCreators from './store/actions/index';

import {
    createMuiTheme,
    ThemeProvider,
    makeStyles,
} from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';

import AddIcon from '@material-ui/icons/Add';

import { Container, Fab, Box } from '@material-ui/core';

import Navbar from './components/navbar';
import BlogsList from './components/blogsList';
import AddBlog from './components/addBlog/addBlog';
import ViewBlog from './components/viewBlog';
import Footer from './components/footer';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import UserProfile from './components/userProfile';

// Colors: primary, secondary, action, error & disabled.

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#9ccdf8',
            main: '#6a9cc5',
            dark: '#386e94',
        },
        // secondary: orange,
        secondary: {
            light: '#fac398',
            main: '#c5936a',
            dark: '#92653f',
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
        },
        type: 'dark',
    },
});
const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

function App() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <div className="App">
                    <CssBaseline />
                    <header>
                        <meta
                            name="viewport"
                            content="minimum-scale=1, initial-scale=1, width=device-width"
                        />
                        <link
                            rel="stylesheet"
                            href="https://fonts.googleapis.com/icon?family=Material+Icons"
                        />

                        <link
                            href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap"
                            rel="stylesheet"
                        />
                    </header>

                    <Navbar />

                    <Container maxWidth="lg">
                        <Switch>
                            <Route
                                path="/blog/:id/edit"
                                render={(props) => <AddBlog {...props} />}
                            ></Route>
                            <Route
                                path="/blog/add"
                                render={(props) => <AddBlog {...props} />}
                            ></Route>
                            <Route
                                path="/blog/:id"
                                render={(props) => <ViewBlog {...props} />}
                            ></Route>
                            <Route
                                path="/login"
                                render={(props) => <LoginForm {...props} />}
                            ></Route>
                            <Route
                                path="/register"
                                render={(props) => <RegisterForm {...props} />}
                            ></Route>
                            <Route
                                path="/profile"
                                render={(props) => <UserProfile {...props} />}
                            ></Route>
                            <Route path="/">
                                {/* store. */}
                                <BlogsList />
                                <Link to="/blog/add">
                                    <Fab
                                        color="primary"
                                        aria-label="add"
                                        className={classes.fab}
                                    >
                                        <AddIcon />
                                    </Fab>
                                </Link>
                            </Route>
                        </Switch>
                    </Container>

                    <Footer />
                </div>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
