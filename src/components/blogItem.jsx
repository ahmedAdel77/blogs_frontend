import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
    makeStyles,
    Grid,
    Avatar,
    Typography,
    Box,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Link,
    Chip,
    Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        minWidth: 275,
        maxWidth: 800,
        overflow: 'hidden',
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

    coverContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '30%',
        height: '100%',
    },
    cover: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        // overflow: 'hidden',
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
}));

const BlogItem = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}></span>;

    return (
        <Fragment>
            <Box m={5}>
                <Card className={classes.root} variant="">
                    <div className={classes.coverContainer}>
                        <CardMedia
                            className={classes.cover}
                            component="img"
                            image={props.cover}
                            alt={props.cover}
                            // image="img/10js.jpeg"
                            // image="img/nodejs.png"
                            // image="img/angular.png"
                            // image="img/zurb.jpg"
                            title="Blog cover"
                        />
                    </div>

                    <CardContent className={classes.content}>
                        <Grid
                            container
                            direction="column"
                            justify="space-evenly"
                            alignItems="flex-start"
                        >
                            <CardContent>
                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="baseline"
                                >
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                        align="left"
                                        style={{ marginBottom: '2px' }}
                                    >
                                        {props.title}
                                        {/* 10 Simple & Effective tips to master
                                        JavaScript */}
                                    </Typography>
                                </Grid>
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
                                        className={
                                            (classes.title, classes.author)
                                        }
                                        color="textSecondary"
                                        gutterBottom
                                    >
                                        by
                                    </Typography>
                                    <Link href="#">Ahmed Adel</Link>
                                </Grid>

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
                                        noWrap
                                    >
                                        {props.body}
                                    </Typography>
                                    {/* </CardContent> */}
                                </Grid>
                                <Grid
                                    container
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="baseline"
                                >
                                    {/* <CardContent> */}
                                    {props.tags?.map((t) => (
                                        <Chip
                                            color="primary"
                                            size="small"
                                            variant="outlined"
                                            label={t}
                                            className={classes.author}
                                            clickable
                                        />
                                    ))}

                                    {/* </CardContent> */}
                                </Grid>
                            </CardContent>

                            <CardActions>
                                {/* <CardContent> */}

                                <Button
                                    color="primary"
                                    component={RouterLink}
                                    to={`/blog/${props.id}-${props.title}`}
                                >
                                    Read Article
                                </Button>
                                {/* </CardContent> */}
                            </CardActions>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </Fragment>
    );
};

export default BlogItem;
