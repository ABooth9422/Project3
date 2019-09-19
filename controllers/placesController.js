const axios = require('axios');
require('dotenv').config();

module.exports = {
    findGymsWithoutLocation: function(req, res){

        getLocation(req.params.query, (response)=>{
            if(response.data.results.length > 0){
                let location = response.data.results[0].geometry.location;
                getGymsNearby(location, (response)=>{
                    res.json({
                        center: location,
                        gyms: response.data.results
                    });
                })
            }else{
                res.status(404).end();
            }
        })

        
    },

    findGymsWithLocation: function(req, res){
        res.end();
    },
    findGymPhoto: function(req, res){
        
        getGymPhoto(req.params.query, (response)=>{
            res.json(response);
        })
    }


}

function getLocation(address, cb){
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_KEY}`)
    .then(response =>{
        cb(response);
    }).catch(err => {
        console.log(err);
        cb(err.response);
    })
}

function getGymsNearby(location, cb){
    axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=17000&keyword=gym&key=${process.env.REACT_APP_GOOGLE_KEY}`)
    .then(response =>{
        cb(response);
    }).catch(err => {
        console.log(err);
        cb(err.response);
    })
}

function getGymPhoto(gym, cb){
    axios.get(`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${gym}&key=${process.env.REACT_APP_GOOGLE_KEY}`)
    .then(response =>{
        cb(response.data)
    }).catch(err => {
        console.log(err);
    })
}