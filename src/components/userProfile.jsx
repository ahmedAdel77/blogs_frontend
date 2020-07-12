import React, { Fragment } from 'react';

import { Box, Typography, Grid } from '@material-ui/core';

const UserProfile = (props) => {
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
                    Profile
                </Typography>
            </Box>
        </Fragment>
    );
};

export default UserProfile;
