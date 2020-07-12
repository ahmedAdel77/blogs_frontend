import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../store/actions/index';

import { Pagination as MaterialPagination } from '@material-ui/lab';

const Pagination = (props) => {
    const pagesNumber = Math.ceil(props.blogs.length / props.pageSize);

    return (
        <Fragment>
            <MaterialPagination
                count={pagesNumber}
                variant="outlined"
                color="primary"
                page={props.activePage}
                onChange={({}, page) => props.onPageChange(page)}
            />
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
        onPageChange: (page) => dispatch(actionCreators.changePage(page)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
