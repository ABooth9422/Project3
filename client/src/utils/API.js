import axios from "axios";



export default {
    
    //Find Gym
    getGyms: function() {
        return axios.get('/places');
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
