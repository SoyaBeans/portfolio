const express = require("express");
const app = express();

app.get("/robots.txt", function(request, response) {
  response.sendFile(__dirname + "/robots.txt");
});

app.get("/robots", function(request, response) {
  response.sendFile(__dirname + "/robots.txt");
});

app.use(express.static("public"));

// PUBLIC PAGES (PUBLIC)

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/public/");
});

app.get("/#about", function(request, response) {
  response.sendFile(__dirname + "/public/#about");
});

app.get("/#experience", function(request, response) {
  response.sendFile(__dirname + "/public/#experience");
});

app.get("/#education", function(request, response) {
  response.sendFile(__dirname + "/public/#education");
});

app.get("/#projects", function(request, response) {
  response.sendFile(__dirname + "/public/#projects");
});

app.get("/#skills", function(request, response) {
  response.sendFile(__dirname + "/public/#skills");
});

app.get("/#contact", function(request, response) {
  response.sendFile(__dirname + "/public/#contact");
});

app.post("/email", function(request, response) {
  console.log(req.body);
});

/*

// DOWNLOAD (CLICKPROJECT)

app.get("/clickproject/1-2-0.msi", function(request, response) {
  response.redirect(
    "https://github.com/soyabn09/website-uploads/blob/master/soyabnandhla/downloads/how-fast-can-you-click/How-fast-can-you-click-1-2-0.msi?raw=true"
  );
});
*/

// DOWNLOAD (PORTFOLIO)

app.get("/CV19", function(request, response) {
  response.redirect(
    "https://github.com/soyabn09/website-uploads/blob/master/soyabnandhla/downloads/portfolio/Soyab%20Nandhla%20CV19.docx?raw=true"
  );
});

app.get("/CV20", function(request, response) {
  response.redirect(
    "https://github.com/soyabn09/website-uploads/blob/master/soyabnandhla/downloads/portfolio/Soyab%20Nandhla%20CV20.docx?raw=true"
  );
});

app.use(function(request, response) {
  response.sendStatus(404);
});

const listener = app.listen(5000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
