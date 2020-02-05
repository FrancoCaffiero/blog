import React, { useState } from 'react';
import propTypes from 'prop-types';

const AddCommentForm = ({ articleName, articleInfo, setArticleInfo }) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        articleInfo.comments.push({ username, text: commentText });
        const result = await fetch(`/api/article/${articleName}`, {
            method: 'PUT',
            body: JSON.stringify(articleInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
    };

    return (
        <div id="add-comment-form">
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label>
                Comment:
                <textarea rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
            </label>
            <button onClick={() => addComment()} >Add Comment</button>
        </div>
    );
};

AddCommentForm.propTypes = {
    articleName: propTypes.string,
    articleInfo: propTypes.object,
    setArticleInfo: propTypes.func
};

export default AddCommentForm;
