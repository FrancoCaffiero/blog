import React from 'react';
import CommentSection from './CommentSection';

const CommentsList = ({ comments = []}) => {
    return (
        <>
            <h3>Comments:</h3>
            {comments.map((comment, key) => (
                <div className="comment" key={key}>
                    <CommentSection comment = {comment} />
                </div>
            ))}
        </>
    )
};

export default CommentsList;
