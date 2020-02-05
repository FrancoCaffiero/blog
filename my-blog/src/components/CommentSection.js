import React from 'react';
import propTypes from 'prop-types';

const CommentSection = ({ comment }) => {
    return (
        <>
            <h3>{comment.username}</h3>
            <p>{comment.text}</p>
        </>
    );
};

CommentSection.propTypes = {
    comment: propTypes.shape({
        username: propTypes.string,
        text: propTypes.string
    })
};

export default CommentSection;
