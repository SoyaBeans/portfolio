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
  response.sendFile(__dirname + "/views/home.html");
});

/*
app.get("/projects.html", function(request, response) {
  response.sendFile(__dirname + "/views/projects.html");
});

app.get("/contact.html", function(request, response) {
  response.sendFile(__dirname + "/views/contact.html");
});

// PROJECT PAGES (LINKED)

app.get("/projects/clickproject.html", function(request, response) {
  response.sendFile(__dirname + "/projects/clickproject.html");
});

app.get("/projects/idlegame.html", function(request, response) {
  response.sendFile(__dirname + "/projects/idlegame.html");
});

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

/*

// PRIVATE PAGES (AUTH REQUIRED)

var CVUser = "Guest";
var CVPass = process.env.CVPASS;

var LOGUser = "Logger";
var LOGPass = process.env.LOGPASS;

var basicAuth = require("basic-auth");
app.get("/portfolio.html", function(request, response) {
  var user = basicAuth(request);
  if (!user || user.name !== CVUser || user.pass !== CVPass) {
    response.set("WWW-Authenticate", 'Basic realm="site"');
    return response.status(401).sendFile(__dirname + "/errors/err401.html");
  }
  return response.sendFile(__dirname + "/views/portfolio.html");
});

app.use(function(request, response) {
  response.status(404).sendFile(__dirname + "/errors/err404.html");
});
*/

const listener = app.listen(5000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
