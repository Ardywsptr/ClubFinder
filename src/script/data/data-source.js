import clubs from "./clubs.js";

class DataSource{
  static searchClub(keyword) {
    //menggunakan AJAX dengan Fetch untuk API
    return fetch(`https://sports-api.dicoding.dev/teams/search?t=${keyword}`)
      
      .then(response =>{
        return response.json();
      })

      .then(responseJson =>{
        if(responseJson.teams){
          return Promise.resolve(responseJson.teams);
        }else{
          return Promise.reject(`${keyword} is not found`);
        }
      })



    // return new Promise ((resolved, reject )=>{
    //   const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));
    
    //   if (filteredClubs.length) {
    //     resolved(filteredClubs);
    //   } else {
    //     reject(`${keyword} is not found`);
    //   }
    // });
  }
}

export default DataSource;