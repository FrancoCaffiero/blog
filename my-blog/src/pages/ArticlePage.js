import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';

import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
    const id = match.params.id;
    const [otherArticles, setOtherArticles] = useState([{}]);
    const [articleInfo, setArticleInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/article/${id}`);
            const body = await result.json();

            setArticleInfo(body);

            if (body) {
                const result2 = await fetch('/api/articles');
                const body2 = await result2.json();

                setOtherArticles(body2.filter(article => article._id !== body._id));
            };
        };
        fetchData();
    }, [id]);

    if (!articleInfo) return <NotFoundPage />;

    return (
        <>
            <h1>{articleInfo.title}</h1>
            <p>{articleInfo.articleBody}</p>
            <UpvotesSection articleId = {id} articleInfo = {articleInfo} setArticleInfo = {setArticleInfo} />
            <CommentsList comments = {articleInfo.comments} />
            <AddCommentForm articleId = {id} articleInfo = {articleInfo} setArticleInfo = {setArticleInfo} />
            <h3>Other articles</h3>
            <ArticlesList articles = {otherArticles} />
        </>
    );
};

ArticlePage.propTypes = {
    match: propTypes.shape({
        params: propTypes.shape({
            id: propTypes.string
        })
    })
};

export default ArticlePage;
