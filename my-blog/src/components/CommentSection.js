import React from 'react';

const CommentSection = ({ comment }) => {
    return (
        <>
            <h3>{comment.username}</h3>
            <p>{comment.text}</p>
        </>
    )
};

export default CommentSection;