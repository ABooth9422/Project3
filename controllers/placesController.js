const axios = require('axios');

module.exports = {
    findGyms: function(req, res){
        res.json({key: process.env.googleKey})
    }
}