const db = require("../models");

module.exports = {

    postTopic:function(req,res){
        db.Forum
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    getTopic:function(req,res){
        db.Forum
        .findAll({include:db.Comment})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    addComment:function(req,res){
        console.log(req.body)
        db.Comment
        .create(req.body)
        .then(dbModel=> res.json(dbModel))
        .catch(err=> res.status(422).json(err))
    },
    getArticle:function(req,res){
        db.Forum
        .findOne({where:req,include:[db.Comment]})
        .then(dbModel=> res.json(dbModel))
        .catch(err=> res.status(422).json(err))
    }



}