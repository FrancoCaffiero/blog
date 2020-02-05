import mongoose from 'mongoose';
import path from 'path';
import ArticleSchema from '../models/myblogModel';

const Article = mongoose.model('Article', ArticleSchema);

export const getHomePage = (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
};

export const getArticles = (req, res) => {
    Article.find({}, (err, article) => {
        if (err) {
            res.send(err);
        }
        res.json(article);
    });
};

export const getArticleByTitle = (req, res) => {
    Article.findOne({ title: req.params.title }, (err, article) => {
        if (err) {
            res.send(err);
        }
        res.json(article);
    });
};

export const updateArticleByTitle = (req, res) => {
    Article.findOneAndUpdate(
        { title: req.params.title },
        req.body,
        { new: true, useFindAndModify: false },
        (err, article) => {
            if (err) {
                res.send(err);
            }
            res.json(article);
        },
    );
};

export const deleteArticleByTitle = (req, res) => {
    Article.findOneAndRemove({ title: req.params.title }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json(`${req.params.title} deleted sucesfully`);
    });
};

export const addNewArticle = (req, res) => {
    const newArticle = new Article(req.body);

    newArticle.save((err, article) => {
        if (err) {
            res.send(err);
        }
        res.json(article);
    });
};
