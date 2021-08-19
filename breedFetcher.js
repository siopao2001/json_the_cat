const request = require('request');
let keyWord = process.argv.slice(2);
request(`https://api.thecatapi.com/v1/breeds/search?q=${keyWord}`, (error, response, body) => {
  if (error) {
    console.log('Error:', error);
  };
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Breed not found");
  } else {
    console.log(data[0].description);
  }
});
 

