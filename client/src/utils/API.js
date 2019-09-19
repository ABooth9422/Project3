import axios from "axios";



export default {

    getGymsWithoutLocation: function(query) {
        return axios.get(`/placesAPI/places/noLocation/${query}`);
    },

    getGymsWithLocation: function(query) {
        return axios.get(`/placesAPI/places/location/${query}`);
    },

    getGymPhoto: function(query) {
        return axios.get(`/placesAPI/places/details/${query}`);
    },
    

    createRoutines: function(routineData) {
        return axios.get("/api/routines", routineData);
    },

    createForumTopic:function(topic){
        return axios.post("/forumAPI/forums/createForumTopic", topic)
    },
    getAllForumTopics:function(){
        return axios.get("/forumAPI/forums/getForumTopics")
    },
    getForumTopic:function(id){
        return axios.get(`/forumAPI/forums/getForumTopic/${id}`)
    },
    updateFormTopic:function(id, obj){
        return axios.put(`/forumAPI/forums/updateTopic/${id}`, obj)
    },
    createComment:function(comment){
        return axios.post("/forumAPI/forums/createComment", comment)
    },
    getAllComments:function(){
        return axios.get("/forumAPI/forums/getComments")
    },
    getComment:function(id){
        return axios.get(`/forumAPI/forums/getComment/${id}`)
    },   
    
    createProfile:function(userObj){
        return axios.post("/userAPI/users/",userObj)
    },
    getUser:function(id){
        return axios.get(`/userAPI/users/${id}`)
    }
};
