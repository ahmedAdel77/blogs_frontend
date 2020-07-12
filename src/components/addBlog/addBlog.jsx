import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { DropzoneArea } from 'material-ui-dropzone';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import * as actionCreators from '../../store/actions/index';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    TextField,
    Button,
    Box,
    Grid,
    Chip,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import ChipInput from 'material-ui-chip-input';

import './addBlog.css';

const useStyles = makeStyles((theme) => ({
    inputField: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const schema = yup.object().shape({
    title: yup
        .string()
        .required('Title is Required')
        .test('len', 'Must be more than 3 characters', (val) => val.length > 3),
    body: yup.string().required('Body is Required'),
    tags: yup.array().of(yup.string()),

    // .test('len', 'Must be more than 3 characters', (val) => val.length <= 3)
});

const AddBlog = (props) => {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema,
        mode: 'onBlur',
    });

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [tags, setTags] = useState([]);
    const [cover, setCover] = useState('');

    useEffect(() => {
        if (paramsAction === 'edit') {
            setTitle(props.blog.title);
            setBody(props.blog.body);
            setTags(props.blog.tags);
            setCover(props.blog.cover);
        }
    }, []);

    let paramsAction = props.match.url.split('/')[3];

    const titleChangedHandler = (event) => {
        setTitle(event.target.value);
    };

    const bodyChangedHandler = (event) => {
        setBody(event.target.value);
    };

    const blogAddHandler = (event) => {
        event.preventDefault();

        console.log({ title, body, tags });
        // console.log(data);
        // if (paramsAction === 'edit') {
        //     props.onBlogEdit(props.blog.id, title, body, tags, cover);
        //     setTitle('');
        //     setBody('');
        //     setTags([]);
        //     setCover('');
        // } else {
        //     props.onBlogAdd(title, body, tags, cover);
        //     setTitle('');
        //     setBody('');
        //     setTags([]);
        //     setCover('');
        // }
        // props.history.replace('/');
    };

    const handleAddChip = (tag) => {
        setTags([...tags, tag]);
    };

    const handleDeleteTag = (tag, index) => {
        setTags(tags.filter((t) => t !== tag));
    };

    // const handleFileUpload = (img) => {
    //     setCover(img);
    //     // console.log(cover);
    // };

    const classes = useStyles();

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
                    {paramsAction === 'edit'
                        ? 'Edit Your Blog'
                        : 'Add Your Blog'}
                </Typography>
            </Box>

            <Box m={5}>
                <form onSubmit={blogAddHandler}>
                    <TextField
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        type="text"
                        name="title"
                        fullWidth
                        className={classes.inputField}
                        autoFocus
                        value={title}
                        onChange={titleChangedHandler}
                        placeholder="e.g. Top 10 Interview tips"
                        // inputRef={register}
                        // error={errors.title}
                        // helperText={errors.title?.message}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Body"
                        type="text"
                        name="body"
                        multiline
                        rows={15}
                        fullWidth
                        variant="outlined"
                        className={classes.inputField}
                        value={body}
                        onChange={bodyChangedHandler}
                        placeholder="Here is the body of your blog that is full of information."
                        // inputRef={register}
                        // error={!!errors.body}
                        // helperText={errors.body?.message}
                    />

                    {/* <ChipInput
                        style={{ marginBottom: '50px' }}
                        value={tags}
                        onAdd={(tag) => handleAddChip(tag)}
                        onDelete={(tag, index) => handleDeleteTag(tag, index)}
                        className={classes.inputField}
                        variant="outlined"
                        label="Tags"
                        name="tags"
                        fullWidth
                        placeholder="Write the TAG name you want to add, then press ENTER"
                        inputRef={register}
                        error={!!errors.tags}
                        helperText={errors.tags?.message}
                    /> */}

                    <ChipInput
                        style={{ marginBottom: '50px' }}
                        // value={tags}
                        // onAdd={(tag) => handleAddChip(tag)}
                        // onDelete={(tag, index) => handleDeleteTag(tag, index)}
                        className={classes.inputField}
                        variant="outlined"
                        label="Tags"
                        name="tags"
                        fullWidth
                        placeholder="Write the TAG name you want to add, then press ENTER"
                        inputRef={register}
                        error={errors.tags}
                        helperText={errors.tags?.message}
                    />

                    {/* <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={['top100Films']}
                        getOptionLabel={() => 'label'}
                        // defaultValue={[top100Films[13]]}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                label="filterSelectedOptions"
                                placeholder="Favorites"
                            />
                        )}
                    /> */}

                    <Autocomplete
                        multiple
                        fullWidth
                        className={classes.inputField}
                        variant="outlined"
                        options={[]}
                        // options={top100Films.map((option) => option.title)}
                        // defaultValue={[top100Films[13].title]}
                        freeSolo
                        renderTags={(tags, getTagProps) =>
                            tags.map((option, index) => (
                                <Chip
                                    variant="outlined"
                                    label={option}
                                    {...getTagProps({ index })}
                                />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                name="tags"
                                label="Tags"
                                placeholder="Write the TAG name you want to add, then press ENTER"
                            />
                        )}
                        // inputRef={register}
                        // error={errors.tags}
                        // helperText={errors.tags?.message}
                        value={tags}
                        onChange={({ target }) => handleAddChip(target.value)}
                        // value={tags}
                        // onAdd={(tag) => handleAddChip(tag)}
                        // onDelete={(tag, index) => handleDeleteTag(tag, index)}
                    />

                    {/* <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button
                            variant="contained"
                            color="primary"
                            component="span"
                        >
                            Upload
                        </Button>
                    </label> */}

                    {/* <box
                        mt={100}
                        style={{
                            color: 'cornflowerblue',
                            margin: '500px',
                        }}
                    >
                        <DropzoneArea
                            showFileNames
                            filesLimit={1}
                            style={{ width: '50px' }}
                            onChange={handleFileUpload.bind(this)}
                        />
                    </box> */}

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
                                {paramsAction === 'edit'
                                    ? 'Edit Blog'
                                    : 'Add Blog'}
                            </Button>
                        </Grid>
                    </Box>
                </form>
            </Box>
        </Fragment>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        blog: state.blogs.find(
            (blog) => blog.id === parseInt(ownProps.match.params.id)
        ),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBlogAdd: (title, body, tags, cover) =>
            dispatch(actionCreators.addBlog(title, body, tags, cover[0])),
        onBlogEdit: (id, title, body, tags, cover) =>
            dispatch(actionCreators.editBlog(id, title, body, tags, cover[0])),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBlog);
