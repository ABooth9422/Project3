const db = require("../models");

module.exports = {

getWorkout:function(req,res){
    db.Workouts.findAll()
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
}



}