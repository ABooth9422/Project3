import axios from "axios";



export default {
    
    //Find Gym
    getGyms: function(cb) {
        const gymArray=[]
        axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=gym&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&location=35.808870399999996,-81.0426368&radius=10000&key=AIzaSyAr9PzQqMpjaO5J9DqQxj1PfR2W2XwhORA`)
        .then(function(response){
            // response.data.results.forEach(gym => {
            //     const gymDEETS={
            //         name:gym.name,
            //         photo:"",
            //         rating:gym.rating,
            //         address:gym.vicinity
            //       }
            //     if("photos" in gym){
            //         axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${gym.photos[0].photo_reference}&key=API-KEY`).then(function(res){
            //             gymDEETS.photo=res
            //             //https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${gym.photos[0].photo_reference}&key=API-KEY
            //          })

            //     }
            //   gymArray.push(gymDEETS)
            cb(response) 
            });
            

        
       
    },
    //https://maps.googleapis.com/maps/api/place/search/xml?location=Enter latitude,Enter Longitude&radius=10000&types=store&hasNextPage=true&nextPage()=true&sensor=false&key=Enter Google_Map_key
    
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
