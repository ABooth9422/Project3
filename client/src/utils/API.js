import axios from "axios";


export default {
    
    //Find Gym
    getGyms: function() {
        return axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyAr9PzQqMpjaO5J9DqQxj1PfR2W2XwhORA")
        .then(function(response){
            console.log(response)
        });
    },
    
//Create routines
    createRoutines: function(routineData) {
        return axios.get("/api/routines", routineData);
    }
};

// AIzaSyAr9PzQqMpjaO5J9DqQxj1PfR2W2XwhORA
//https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyAr9PzQqMpjaO5J9DqQxj1PfR2W2XwhORA
//within a range bottom example need to make sure we get back formats
//https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian%20grill&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=YOUR_API_KEY
//https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B61293744000&inputtype=phonenumber&fields=place_id&key=YOUR_API_KEY


//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&rankby=distance&type=food&key=YOUR_API_KEY