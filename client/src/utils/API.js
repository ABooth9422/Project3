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
    addPost:function(post){
        return axios.post("/forumAPI/forum/post",post)
    },
    getPost:function(){
        return axios.get("/forumAPI/forum/find")
    },
    createComment: function(stuff){
        console.log(stuff)
        console.log("hit@20 api")
        return axios.post("/userAPI/users",stuff)
    }
};
