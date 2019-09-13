const axios = require('axios');
require('dotenv').config();

module.exports = {
    findGymsWithoutLocation: function(req, res){

        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.query}&key=${process.env.REACT_APP_GOOGLE_KEY}`).then(response =>{

            if(response.data.results.length > 0){
                let location = response.data.results[0].geometry.location;
                axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=17000&keyword=gym&key=${process.env.REACT_APP_GOOGLE_KEY}`)
                .then(response => {
                    res.json({
                        center: location,
                        gyms: response.data.results
                    });
                }).catch(err => console.log(err))
                
            }else{
                res.status(404).end();
            }
                
        }).catch(err => console.log(err));
    },

    findGymsWithLocation: function(req, res){
        res.end();
        // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.query}&key=${process.env.REACT_APP_GOOGLE_KEY}`).then(response =>{
            
        //     if(response.data.results.length > 0){
        //         let location = response.data.results[0].geometry.location;
        //         axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=17000&keyword=gym&key=${process.env.REACT_APP_GOOGLE_KEY}`)
        //         .then(response => {
        //             console.log(response.data.results);
        //             res.json({
        //                 center: location,
        //                 gyms: response.data.results
        //             });
        //         }).catch(err => console.log(err))
                
        //     }else{
        //         res.status(404).end();
        //     }
                
        // }).catch(err => console.log(err));
    },


}