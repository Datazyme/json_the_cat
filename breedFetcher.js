const request = require('request');
const args = process.argv.slice(2);
let breed = args[0];

//returns description of cat breed enetered by user. Searches through api below
request('https://api.thecatapi.com/v1/breeds', (error, response, body) => {  
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);//turns array into object
  //looks through each object in array and pulls out description for node argument of breed ex "Siberian". breed is capitalized
  for (let i in data) {
    if (data[i].name === breed) {
      console.log(data[i].description);
    }
  }
  //put this if here to get all the i's checked and then print message if breed is not found
  if (data.name !== breed) {
    console.log("Breed not found");
  }
});
