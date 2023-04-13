const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const nmessage = "not found"
    if (error) {
      console.error(`Error downloading resource: error is ${error}`);
      callback(error, null)
    } else if (response.statusCode !== 200) {
      const message = `Failed to download resource. Status code: ${response.statusCode}`;
      console.error(`Error: ${message}`);
      callback(message, null);      

    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.error(`Breed not found: ${breedName}`);
        console.error(`Error: ${message}`);
        callback(nmessage, null);

      } else {
        //console.log(data[0].description);
        //console.log(typeof data);
        const desc = data[0].description;
        callback (null, desc)
      }
    }
    
  });
};
module.exports = { fetchBreedDescription };

