import * as functions from 'firebase-functions';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

export default functions.https.onRequest(app);