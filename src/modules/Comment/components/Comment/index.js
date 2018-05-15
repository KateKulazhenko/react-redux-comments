import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

import styles from './styles';

const validate = values => {
    const error = {};
    if (!values.comment) {
        error.comment = 'Please, write a text';
    }

    return error;
};

const Comment = ({ handleSubmit, error, classes, onSubmit }) => {
    
    return(
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <Field name="comment" component="textarea" />
            {error && <div>{error}</div>}
            <Button label="Send" type="submit">Post</Button>
        </form>
    );
};

Comment.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default compose(
    reduxForm(),
    withStyles(styles)
)(Comment);