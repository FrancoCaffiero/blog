import {
    getHomePage,
    getArticles,
    addNewArticle,
    getArticleById,
    updateArticleById,
    deleteArticleById,
} from '../controllers/myblogController';


const routes = (app) => {
    app.route('/')
        .get(getHomePage);

    app.route('/api/articles')
        .get(getArticles);


    app.route('/api/article/:id')
        .get(getArticleById)
        .put(updateArticleById)
        .delete(deleteArticleById);


    app.route('/api/article/add-article')
        .post(addNewArticle);
};

export default routes;
