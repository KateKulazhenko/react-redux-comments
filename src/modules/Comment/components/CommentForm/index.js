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

const CommentForm = ({ handleSubmit, classes }) => {
    return(
        <div>
            <form onSubmit={handleSubmit} className={classes.form}>
                <Field name="comment" component={TextField} />
                <Button classes={classes.button} label="Send" type="submit"/>
            </form>
        </div>
    );
};

CommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default compose(
    reduxForm({
        form: 'comment',
        validate,
    }),
    withStyles(styles)
)(CommentForm);