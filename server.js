var express = require("express");
var morgan = require("morgan");
var path = require("path");

var app = express();
app.use(morgan("combined"));

var article = {
  "article-one": {
    title: "Abhay Goel",
    date: "14-06-2000",
    content: `
    <h1>What is Lorem Ipsum?<h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>  `
  },
  "article-two": {
    title: "Abram Goel",
    date: "14-06-2000",
    content: `
    <h1> This is second Article </h1>
    `
  },
  "article-three": {
    title: "Abram Goel",
    date: "14-06-2000",
    content: `
    <h1> this is 3rd Article </h1>
    `
  }
};

function createTemplate(data) {
  var heading = data.title;
  var date = data.date;
  var content = data.content;

  var articleTemplate = `
<!doctype html>
<html>
    <head>
        <link href="/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="center text-big bold">
            ${heading}
        </div>
        <div>
          ${date}
        </div>
        <div>
        ${content}
        </div>
        <script type="text/javascript" src="/main.js">
        </script>
    </body>
</html>
`;

  return articleTemplate;
}

app.get("/:articleName", function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(article[articleName]));
});
var counter = 0;
app.get("/counter", function (req, res) {
  counter = counter + 1;
  res.send(counter.toString());
});
// app.get('/article2', function (req, res) {
//   res.send(createTemplate(articleTwo));
// });

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// app.get('/article3', function (req, res) {
//   res.sendFile(path.join(__dirname,'Folder Name','File Name'));
// });

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
