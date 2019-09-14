const db = require("../models");

module.exports = {

    postTopic:function(req,res){
        console.log(req)
        db.Forum
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    getTopic:function(req,res){
        db.Forum
        .findAll({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }


}