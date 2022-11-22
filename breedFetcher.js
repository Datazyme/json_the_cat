const request = require('request');
//const breedName = process.argv[2];
const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds', (error, response, body) => {
    if (error) return callback(error, null);
      const data = JSON.parse(body);//turns array into object
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCose} when fetching breed: ${body}`), null);
      return;
    };
    //looks through each object in array and pulls out description for node argument of breed ex "Siberian". breed is capitalized
    for (let i in data) {
      if (data[i].name === breedName) {
        desc = data[i].description
        callback(null, desc);
        return;
      };
    };
  //have to use callback here with string inside. The return at the end like that ends the if statement
    if(data.name !== breedName) {
    callback("Breed not found");
    return;
   }
  });
};
module.exports = {fetchBreedDescription}

