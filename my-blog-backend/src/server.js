import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/myblogRoutes';

const app = express();
const PORT = 8000;

//  helmet setup
app.use(helmet());

//  mongoose conection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/my-blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//  bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//  cors setup
app.use(cors());

//  serving static files
app.use(express.static(path.join(__dirname, '/build')));

routes(app);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
