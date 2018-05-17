import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Comment = ({ onSubmit, handleAuthorChange, author, handleTextChange, text }) => {
    return(
        <form onSubmit={onSubmit} className='form'>
            <input
                type='text'
                placeholder='Name'
                value={author}
                onChange={handleAuthorChange}
                maxLength='20'
                className='name-input'
                required
            />
            <input
                type='text'
                placeholder='Comment'
                value={text}
                className='input'
                onChange={handleTextChange}
            />
            <input
                type='submit'
                value='Post'
                className="button"
                disabled={!author || !text}
            />
        </form>
    );
};

Comment.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleAuthorChange: PropTypes.func.isRequired,
    handleTextChange: PropTypes.func.isRequired,
};

export default Comment;