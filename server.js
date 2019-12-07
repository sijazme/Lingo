var express = require('express');
var bodyParser = require("body-parser");

var app = express();

var port = process.env.PORT || 8080;

var words = [];


var fs = require("fs");

try {
    // read contents of the file
    const data = fs.readFileSync('words.txt', 'UTF-8');

    // split the contents by new line
    words = data.split(/\r?\n/);

    // print all lines
    //lines.forEach((line) => {
    //    console.log(line);
    //});

} catch (err) {
    console.error(err);
}

app.use(express.static("public"));

app.set('view engine', 'ejs');

// set the body parser
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {

    res.render("index", { words: words });
});


app.post('/updatetask', function (req, res) {

    console.log("update task[" + req.body.i + "] = " + req.body.value);
    var index = parseInt(req.body.i);
    var value = req.body.value;
    task[index] = value;

    res.redirect("/");
});


app.listen(port, function () {
    console.log('server listen start port 8080')
});