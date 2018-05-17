import React from 'react';

import CommentList from '../CommentList';
import Comment from '../Comment';

const CommentContent = ({ onSubmit, handleAuthorChange, handleTextChange, author, text, comments }) => {
    return[
        <CommentList key="list"
            author={author}
            comments={comments}
        />,
        <Comment key="form"
             onSubmit={onSubmit}
             handleAuthorChange={handleAuthorChange}
             handleTextChange={handleTextChange}
             author={author}
             text={text}
        />
    ]
};

export default CommentContent;