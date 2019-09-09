import axios from "axios";


export default {
    
    //Find Gym
    getGyms: function() {
        return axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=gyms&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:20000@35.808870399999996,-81.0426368&key=${process.env.REACT_APP_GOOGLE_KEY}`)
        .then(function(response){
            console.log(response)
        });
    },
    
//Create routines
    createRoutines: function(routineData) {
        return axios.get("/api/routines", routineData);
    },

    createComment: function(stuff){
        console.log(stuff)
        console.log("hit@20 api")
        return axios.post("/userAPI/users",stuff)
    }
};
