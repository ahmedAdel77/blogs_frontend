import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actionCreators from '../store/actions/index';

import BlogItem from './blogItem';

import { Box, Typography, Grid } from '@material-ui/core';
import Pagination from './pagination';
// import { Pagination } from '@material-ui/lab';

const BlogsList = (props) => {
    // Pagination
    let filteredBlogs = [...props.blogs];
    const startIndex = (props.activePage - 1) * props.pageSize;
    let blogsToView = _(filteredBlogs)
        .slice(startIndex)
        .take(props.pageSize)
        .value();

    return (
        <Fragment>
            <Box m={5}>
                <Typography
                    variant="h3"
                    gutterBottom
                    style={{ fontFamily: `'Raleway', sans-serif` }}
                >
                    Featured Blogs
                </Typography>
            </Box>
            {blogsToView.map((blog) => (
                <Box mt={5}>
                    <BlogItem
                        key={blog.id}
                        id={blog.id}
                        title={blog.title}
                        body={blog.body}
                        tags={blog.tags}
                        cover={blog.cover}
                    />
                </Box>
            ))}

            <Box m={5} mt={7}>
                {props.blogs.length > props.pageSize && <Pagination />}
            </Box>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs,
        pageSize: state.pageSize,
        activePage: state.activePage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBlogsFetch: () => dispatch(actionCreators.fetchBlogs()),
        onBlogAdd: (title) => dispatch(actionCreators.addBlog(title)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogsList);
