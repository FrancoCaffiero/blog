import mongoose from 'mongoose';
import ArticleSchema from '../models/myblogModel';
import path from 'path';

const Article = mongoose.model('Article', ArticleSchema);

export const getHomePage = (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
};

export const getArticles = (req, res) => {
    Article.find({},(err, article) => {
        if (err) {
            res.send(err);
        }
        res.json(article);  
    });
};

export const getArticleByTitle = (req, res) => {
    Article.findOne({ title: req.params.title },(err, article) => {
        if (err) {
            res.send(err);
        }
        res.json(article);  
    });
};

export const updateArticleByTitle = (req, res) => {
    Article.findOneAndUpdate({ title: req.params.title }, req.body, { new: true, useFindAndModify: false }, (err, article) => {
        if (err) {
            res.send(err);
        }
        res.json(article);  
    });
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
    let newArticle = new Article(req.body);

    newArticle.save((err, article) => {
        if (err) {
            res.send(err);
        }
        res.json(article);  
    });
};

// app.post('/api/articles/:title/upvote', async (req, res) => {
//     withDB(async(db) => {
//         const articleTitle = req.params.title;
//         const articleInfo = await db.collection('articles').findOne({ title: articleTitle });
//         await db.collection('articles').updateOne({ title: articleTitle },{
//             '$set': {
//                 upvotes: articleInfo.upvotes + 1,
//             }
//         });
//         const updatedArticleInfo = await db.collection('articles').findOne({ title: articleTitle });
    
//         res.status(200).json(updatedArticleInfo);
//     }, res);
// });

// app.post('/api/articles/:title/add-comment', (req,res) => {
//     const { username, text } = req.body;
//     const articleTitle = req.params.title;

//     withDB(async (db) => {
//         const articleInfo = await db.collection('articles').findOne({ title: articleTitle });
//         await db.collection('articles').updateOne({ title: articleTitle },{
//             '$set': {
//                 comments: articleInfo.comments.concat({ username, text }),
//             },
//         });
//         const updatedArticleInfo = await db.collection('articles').findOne({ title: articleTitle });

//         res.status(200).json(updatedArticleInfo);
//     }, res)

// });
