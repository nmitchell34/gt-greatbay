const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "great_bay_DB", // project_db
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

var questions = [
  {
    type: "list",
    message: "Would you like to Post, Bid, or Exit?",
    name: "postOrBid",
    choices: ["Post An Item", "Bid On An Item", "Exit"],
  },
];

var postQuestions = [
  {
    type: "input",
    message: "What item would you like to post?",
    name: "newItem",
  },
  {
    type: "number",
    message: "What is the starting bid price?",
    name: "bidPrice",
  },
  {
    type: "input",
    message: "What is your username?",
    name: "userName",
  },
];



function init() {
  return inquirer.prompt(questions);
}

init().then(function (res) {
  console.log(res.postOrBid);
  if (res.postOrBid == "Post An Item") {
    postFunc();
  } else if (res.postOrBid == "Bid On An Item") {
    bidFunc();
  } else {
    exit();
  }
});

function postFunc() {
  inquirer.prompt(postQuestions).then(createProduct(res));
}

function bidFunc() {
// Query for existing items goes here"


  var bidQuestions = [
    {
      type: "list",
      message: "What would you like to bid on?",
      name: "bidList",
      choices: [],
    },
    {
      type: "number",
      message: "How much would you like to bid?",
      name: "bidAmt",
    }
  ];
  inquirer.prompt(bidQuestions).then(function(res){
    if (res.bidAmt<'QUERY PRICE HERE'){}
  });

}


function exit() {}


function createProduct(res) {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO products SET ?",
    {
      user_name: res.userName,
      item: res.newItem,
      bid_price: res.bidPrice,
      available: true,
    },
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " product inserted!\n");
    }
  );
}