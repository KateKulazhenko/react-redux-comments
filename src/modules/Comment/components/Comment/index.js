import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import styles from './styles';

const Comment = ({ classes, onSubmit, handleAuthorChange, author, handleTextChange, text }) => {
    
    return(
        <form onSubmit={onSubmit} className={classes.form}>
            <input
                type='text'
                placeholder='Name'
                value={author}
                onChange={handleAuthorChange}
                maxLength='20'
                className={classes.input}
                required
            />
            <input
                type='text'
                placeholder='Comment'
                value={text}
                onChange={handleTextChange}
            />
            <Button label="Send" type="submit">Post</Button>
        </form>
    );
};

Comment.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comment);