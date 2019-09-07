import axios from "axios";


export default {
    
    //Find Gym
    getGyms: function() {
        return axios.get("/api/gyms");
    },
    
//Create routines
    createRoutines: function(routineData) {
        return axios.get("/api/routines", routineData);
    }
};

// AIzaSyAr9PzQqMpjaO5J9DqQxj1PfR2W2XwhORA