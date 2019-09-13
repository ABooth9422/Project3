import axios from "axios";



export default {

    getGymsWithoutLocation: function(query) {
        return axios.get(`/placesAPI/places/noLocation/${query}`);
    },

    getGymsWithLocation: function(query) {
        return axios.get(`/placesAPI/places/location/${query}`);
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
