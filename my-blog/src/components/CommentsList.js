import React from 'react';
import propTypes from 'prop-types';
import CommentSection from './CommentSection';

const CommentsList = ({ comments = [] }) => {
    return (
        <>
            <h3>Comments:</h3>
            {comments.map((comment, key) => (
                <div className="comment" key={key}>
                    <CommentSection comment = {comment} />
                </div>
            ))}
        </>
    );
};

CommentsList.propTypes = {
    comments: propTypes.arrayOf({
        comment: propTypes.shape({
            username: propTypes.string,
            text: propTypes.string
        })
    })
};

export default CommentsList;
