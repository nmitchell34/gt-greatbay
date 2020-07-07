// var mysql = require("mysql");
var inquirer = require("inquirer");
// var connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "",
//   database: " " // project_db
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
//   connection.end();
// });
var questions = [
  {
    type: "list",
    message: "Would you like to Post, Bid, or Exit?",
    name: "postOrBid",
    choices: ["Post An Item", "Bid On An Item", "Exit"],
  },
];
var postQuestions = []
var bidQuestions = []
function init() {
  return inquirer.prompt(questions);
}

init().then(function (res) {
  console.log(res.postOrBid)
  if (res.postOrBid == "Post An Item"){
    inquirer.prompt(postQuestions)
  }else if (res.postOrBid=="Bid On An Item"){
    inquirer.prompt(bidQuestions)
  }else{}
});

function postFunc() {}

function bidFunc() {}

function exit() {}
