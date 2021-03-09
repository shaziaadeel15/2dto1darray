const express = require("express");
const conversion = require('./conversion');

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("2d to 1d conversion utility");
});

app.get("/convert2dto1d", function(request, response) {
  conversion.convert2dto1d(request, response); 
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}, application support following API
              /convert2dto1d:  for converting 2d array to 1d, it return data in form of JSON { data: [output_array], min: min_val, max: max_val}`);
});
