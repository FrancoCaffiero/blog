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

export const getArticleById = (req, res) => {
    Article.findOne({ _id: req.params.id }, (err, article) => {
        if (err) {
            res.send(err);
        }
        res.json(article);
    });
};

export const updateArticleById = (req, res) => {
    Article.findOneAndUpdate(
        { _id: req.params.id },
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

export const deleteArticleById = (req, res) => {
    Article.findOneAndRemove({ _id: req.params.id }, (err) => {
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
