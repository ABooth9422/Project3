const db = require("../models");

module.exports = {

    createForumTopic:function(req,res){
        db.ForumTopic
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    getForumTopics:function(req,res){
        db.ForumTopic
        .findAll(
        {
            include: 
            [
                {
                    model: db.User,
                   
                },
                {
                    model: db.Comment,
                    include: 
                    [
                        {
                            model: db.User,
                            
                        }
                    ] 
                }, 
            ],

            order: 
            [
                ['createdAt', "DESC"]
            ]
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => {
            console.log(err)
            res.status(422).json(err)
        });
    },
    getForumTopic:function(req,res){
        db.ForumTopic
        .findOne(
            {   where: {id: req.params.id},
                include: 
                [
                    {
                        model: db.User,
                        
                    },
                    {
                        model: db.Comment,
                        include: 
                        [
                            {
                                model: db.User,
                                
                            }
                        ] 
                    }, 
                ]
            })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    updateTopic: function(req, res){
        db.ForumTopic
        .update(req.body, {where: {id: req.params.id}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    createComment:function(req,res){
        db.Comment
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    getComments:function(req,res){
        db.Comment
        .findAll({include: [db.ForumTopic, db.User]})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    getComment:function(req,res){
        db.Comment
        .findOne({where: {id: req.params.id},
            include: [db.ForumTopic, db.User]})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
   



}