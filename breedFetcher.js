const request = require('request');
const breed  = process.argv[2];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
   
  if (error) {
    console.error(`Error downloading resource: error is ${error}`);
    
  } else if (response.statusCode !== 200) {
    console.error(`Failed to download resource. Status code: ${response.statusCode}`);
    

  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.error(`Breed not found: ${breed}`);

    } else {
      console.log(data[0].description);
      console.log(typeof data);
    }
  }
  
});

