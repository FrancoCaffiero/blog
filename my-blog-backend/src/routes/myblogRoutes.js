import {
    getHomePage,
    getArticles,
    addNewArticle,
    getArticleByTitle,
    updateArticleByTitle,
    deleteArticleByTitle,
} from '../controllers/myblogController';


const routes = (app) => {
    app.route('/')
        .get(getHomePage);

    app.route('/api/articles')
        .get(getArticles);


    app.route('/api/article/:title')
        .get(getArticleByTitle)
        .put(updateArticleByTitle)
        .delete(deleteArticleByTitle);


    app.route('/api/article/add-article')
        .post(addNewArticle);
};

export default routes;
