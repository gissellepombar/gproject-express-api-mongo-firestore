import express from "express";
import cors from "cors";
import functions from "firebase-functions";

import { getAllDoc, postDoc } from "./src/functions.js";

const app = express();
app.use(cors());


// Setup Routes

//GET: Get All
app.get("/getall", getAllDoc);

//POST: Post Doc 
app.post("/post", postDoc);

//Testing cloud functions 
app.get('/test', (req, res) => {
    res.send('Holy crap. 💩 We made a cloud function!')
});

app.get('/test2', (req, res) => {
    res.send('This other route also works!')
});


export const api = functions.https.onRequest(app);
