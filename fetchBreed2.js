const request = require('request');
const fs = require('fs');
if (process.argv.length === 4) {
  const requestedResource = process.argv[2];
  const localFilePath = process.argv[3];
  
  request(requestedResource, (err, status, body) => {
    if (!err) {
      if (body && status.statusCode === 200) {
        fs.writeFile(localFilePath, body, (err) => {
          if (!err) {
            fs.stat(localFilePath, (err, stats) => {
              if (!err) {
                console.log(`Fetched & saved ${stats.size} bytes to ${localFilePath} successfully.`);
              } else {
                console.log('Could not obtain the file size.');
              }
            });
          } else {
            console.log("Could not save to the the specified path.", err);
          }
        });
      } else {
        console.log("Body of the requested URL is empty or the statusCode recived was not 200");
        console.log(`Status Code: ${status.statusCode} \r\n Staus: \r\n ${status} \r\n Body: \r\n ${body}`);
      }
    } else {
      console.log("Could not fetch the specified webpage.", err);
    }
  });
} else {
  console.log("Expected");
  console.log("node fetcher '[URL]' '[LOCAL FILE PATH]' \r\n\r\n\r\n");

  console.log("Help: Try the following command");
  console.log("node fetcher http://example.com/ ./index.html");
}

