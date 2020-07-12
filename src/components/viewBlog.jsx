import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import * as actionCreators from '../store/actions/index';

import {
    Box,
    Typography,
    Grid,
    CardMedia,
    Link,
    Avatar,
    Chip,
    Fab,
    Modal,
    Backdrop,
    Fade,
    Button,
} from '@material-ui/core';

import { Edit, Delete } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        minWidth: 275,
        maxWidth: 800,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
    },
    bullet: {
        display: 'inline-flex',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    pos: {
        marginBottom: 12,
    },
    author: {
        marginRight: '5px',
    },
    orange: {
        // color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
    },
    cover: {
        marginBottom: '50px',
        borderRadius: '5px',
    },
    content: {
        position: 'relative',
        top: 0,
        left: '10%',
        width: '60%',
        height: '100%',
        overflow: 'hidden',
    },
    RouterLink: {
        // textDecoration: 'none',
        // fontStyle: 'none',
    },
    editFab: {
        position: 'fixed',
        bottom: theme.spacing(12),
        right: theme.spacing(2),
    },
    deleteFab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        // backgroundColor: 'darkred',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const ViewBlog = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteBlog = () => {
        props.onBlogDelete(props.blog.id);
        props.onPageChange(1);
        props.history.replace('/');
    };

    return (
        <Fragment>
            <Box m={10}>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {/* <img src="/img/10js.jpeg" alt="" /> */}

                    <CardMedia
                        className={classes.cover}
                        component="img"
                        image={`/${props.blog.cover}`}
                        // image="/img/angular.png"
                        // image="/img/10js.jpeg"
                        title="Blog cover"
                    />

                    <Typography
                        variant="h3"
                        component="h3"
                        style={{ marginBottom: '2px' }}
                    >
                        {props.blog.title}
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="baseline"
                    >
                        <Avatar
                            className={[
                                classes.author,
                                classes.small,
                                classes.orange,
                            ]}
                        >
                            <Typography>AA</Typography>
                        </Avatar>
                        <Typography
                            paragraph
                            className={(classes.title, classes.author)}
                            color="textSecondary"
                            gutterBottom
                        >
                            by
                        </Typography>
                        <Typography>
                            <Link href="#">Ahmed Adel</Link>
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="baseline"
                    >
                        {/* <CardContent> */}
                        {props.blog.tags.map((t) => (
                            <Chip
                                color="primary"
                                size="small"
                                variant="outlined"
                                label={t}
                                className={classes.author}
                                clickable
                            />
                        ))}

                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                        >
                            {/* <CardContent> */}
                            <Typography
                                color="textSecondary"
                                component="p"
                                align="left"
                                paragraph
                                style={{ marginTop: '40px' }}
                            >
                                {props.blog.body}
                            </Typography>
                            {/* </CardContent> */}
                        </Grid>
                        {/* </CardContent> */}
                    </Grid>
                </Grid>
            </Box>

            <Fab
                color="secondary"
                aria-label="add"
                className={classes.editFab}
                component={RouterLink}
                to={`/blog/${props.blog.id}/edit`}
            >
                <Edit />
            </Fab>

            <Fab
                color={red}
                aria-label="delete"
                className={classes.deleteFab}
                // component={RouterLink}
                onClick={handleOpen}
                // to="/blog/add"
            >
                <Delete />
            </Fab>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography variant="h4" paragraph>
                                Are you sure you want to delet this blog ?
                            </Typography>
                            <Grid
                                container
                                direction="row"
                                justify="space-evenly"
                                alignItems="center"
                            >
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={handleClose}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {
                                        handleDeleteBlog();
                                    }}
                                >
                                    Confirm
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Fade>
            </Modal>
        </Fragment>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        blog: state.blogs.find(
            (blog) =>
                blog.id === parseInt(ownProps.match.params.id.split('-')[0])
        ),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBlogDelete: (id) => dispatch(actionCreators.deleteBlog(id)),
        onPageChange: (page) => dispatch(actionCreators.changePage(page)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewBlog);
