const mongoose = require("mongoose");
const Upload = require("./models/upload");

exports.getVoteContent = async (req, res, next) => {
    console.log("Trying to get songs to vote on...");
    try {
        let content = await Upload.find({_id: {$nin: req.body.lst}}).limit(10);
        console.log(content);
        res.status(201).send({content});
    } catch (err) {
        console.log(err);
    }
}

exports.getRankedContent = async (req, res, next) => {
    console.log("Trying get ranked songs...");
    try {
        let content = await Upload.find().sort('-upvotes').limit(5+parseInt(req.params.timesVoted));
        console.log(content);
        res.status(201).send({content});
    } catch (err) {
        console.log(err);
    }
}

exports.postContent = async (req, res, next) => {
    console.log("Trying to post content...");
    try {
        let upload = await new Upload({
            _id: new mongoose.Types.ObjectId(),
            handle: req.body.handle,
            content: req.body.content
        });
        await upload.save();
        console.log("Saved content to Mongo!");
        res.status(200).send({});
    } catch (err) {
        console.log(err);
    }
}

exports.castVote = async (req, res, next) => {
    console.log("Trying to cast content vote...");
    console.log("ID: " + req.params.contentId);
    let data = req.params.contentId.split("_");
    try {
        let doc = await Upload.findById(data[1]);
        if (data[0] === "up") {
            doc.upvotes = doc.upvotes + 1
        } else if (data[0] === "dn") {
            doc.downvotes = doc.downvotes + 1
        } else if (data[0] === "in") {
            doc.inappropriate = doc.inappropriate + 1
        }

        if (doc.inappropriate >= 5) {
            console.log("Going to DELETE!")
            await Upload.findOneAndDelete({_id: doc._id}, function (err) {
                if (err) {
                    console.log(err);
                    res.status(500).send({error: "/deleteRoom - error"});
                } else {
                    console.log("deleted");
                    res.status(200).send({});
                }
            });
        } else {
            await doc.save();
            res.status(201).send({});
        }
    } catch (err) {
        console.log(err);
    }
}
