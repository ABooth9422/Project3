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
        db.Comment
        .create(req.body)
        .then(dbModel=> res.json(dbModel))
        .catch(err=> res.status(422).json(err))
    },
    getArticle:function(req,res){
        db.Forum
        .findOne({
            where: {
                id: req.params.id
              },
              include: [db.Comment]
        })
        .then(dbModel=> res.json(dbModel))
        .catch(err=> res.status(422).json(err))
    },
    updateLike:function(req,res){
        db.Forum
        .update({likes:req.body.likes},{where:{id:req.body.id}})
        .then(()=> 
        db.Forum
        .findOne({
            where: {
                id: req.body.id
              }
        })
        .then(dbModel=> res.json(dbModel))
        
        )
        
        
        .catch(err=> res.status(422).json(err))

        
        
    }



}