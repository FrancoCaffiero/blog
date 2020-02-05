import React, { useState, useEffect } from 'react';

import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';

import NotFoundPage from './NotFoundPage'

const ArticlePage = ({ match }) => {

    const name = match.params.name;
    
    const [otherArticles, setOtherArticles] = useState([{}]);
    const [articleInfo, setArticleInfo] = useState({});

    useEffect(() => {
        const fetchData = async() => {
            const result = await fetch(`/api/article/${name}`);
            const body = await result.json();

            setArticleInfo(body);

            if (body){

                const result2 = await fetch(`/api/articles`);
                const body2 = await result2.json();
                
                setOtherArticles(body2.filter(article => article.title !== body.title));

            }
            
        }
        fetchData();
    }, [name]);

    if (!articleInfo) return <NotFoundPage />

    return(
        <>
            <h1>{articleInfo.title}</h1>
            <p>{articleInfo.articleBody}</p>
            <UpvotesSection articleName = {name} articleInfo = {articleInfo} setArticleInfo = {setArticleInfo} />
            <CommentsList comments = {articleInfo.comments} />
            <AddCommentForm articleName = {name} articleInfo = {articleInfo} setArticleInfo = {setArticleInfo} />
            <h3>Other articles</h3>
            <ArticlesList articles = {otherArticles} />
        </>
    );
}

export default ArticlePage;