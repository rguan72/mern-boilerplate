'use strict'

import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import auth from '../routes/user.routes';
import dotenv from 'dotenv'

dotenv.config()
const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern-boilerplate';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.use(bodyParser.json(), cors());
app.use('/auth', auth);

app.all('*', (req, res) => {
    console.log('Returning 404 from catch all route');
    res.sendStatus(404);
})

export const start = () => {
    app.listen(PORT, () =>{
        console.log(`Listening on port: ${PORT}`)
    })
}
  
export const stop = () => {
    app.close(PORT, () => {
        console.log(`Shut down on port: ${PORT}`)
    })
}