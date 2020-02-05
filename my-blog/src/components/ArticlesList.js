import React from 'react';
import propTypes from 'prop-types';
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

ArticlesList.propTypes = {
    articles: propTypes.arrayOf({
        article: propTypes.shape({
            title: propTypes.string,
            articleBody: propTypes.string
        })
    })
};

export default ArticlesList;
