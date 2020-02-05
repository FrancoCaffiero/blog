import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
        {articles.map((article, key) => (
            <Link className="article-list-item" key={key} to={`/article/${article.title}`}>
                <h3>{article.title}</h3>
                <p>{article.articleBody}...</p>
            </Link>
        ))}
    </>
);

export default ArticlesList;