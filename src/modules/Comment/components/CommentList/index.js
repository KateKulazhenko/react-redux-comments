import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const CommentList = ({ author, comments }) => {
  return (
      <div className="list">
          {comments.length ?
              comments.map((item, index) =>
                  <div className="item" key={'comments_' + index}>
                      <div className="author">{author}</div>
                      <div className="text">{item}</div>
                  </div>
              )
              : 'Be first. Write a comment.'}

      </div>
  );
};

CommentList.propTypes = {
    author: PropTypes.string.isRequired,
    comments: PropTypes.array,
};

CommentList.defaultProps = {
    comments: []
};

export default CommentList;