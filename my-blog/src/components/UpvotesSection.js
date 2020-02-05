import React from 'react';
import propTypes from 'prop-types';

const UpvotesSection = ({ articleId, articleInfo, setArticleInfo }) => {
    const upvoteArticle = async () => {
        articleInfo.upvotes += 1;
        const result = await fetch(`/api/article/${articleId}`, {
            method: 'PUT',
            body: JSON.stringify(articleInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const body = await result.json();
        setArticleInfo(body);
    };
    return (
        <div id="upvotes-section">
            <button onClick={() => upvoteArticle()}>Add Upvote</button>
            <p>This post has been upvoted {articleInfo.upvotes} times</p>
        </div>
    );
};

UpvotesSection.propTypes = {
    articleId: propTypes.string,
    articleInfo: propTypes.object,
    setArticleInfo: propTypes.func
};

export default UpvotesSection;
