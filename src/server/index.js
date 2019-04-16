//NPM Module dependencies.
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Routes = require("./routes");

const startServer = async () => {
    let app = express();
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(express.static('dist'));
    app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        if (req.method === 'OPTIONS') { //wont be handled by graphql correctly so dont next() it, return
            return res.sendStatus(200);
        }
        next(); //req can continue its journey
    });

    app.post("/getVoteContent", Routes.getVoteContent);
    app.get("/getRankedContent", Routes.getRankedContent);
    app.post("/postContent", Routes.postContent);
    app.post("/castVote:contentId", Routes.castVote);

    try {
        await mongoose.connect("mongodb://localhost:32772/songrank", {useNewUrlParser: true});
        console.log("Mongoose connected!");
    } catch (err) {
        console.log("Could not connect to mongo...");
        process.exit(-1);
    }


    app.listen(process.env.PORT || 8080, () => {
        console.log(`Listening on port ${process.env.PORT || 8080}!`);
    });
};

startServer();
