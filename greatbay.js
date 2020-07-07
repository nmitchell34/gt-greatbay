const mysql = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: '',
  database: 'great_bay_DB', // project_db
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('connected as id ' + connection.threadId);
  connection.end();
});

//bid or post function
const postOrBid = () => {
  inquirer.prompt([

  ])};

//create auction function
const createAuction = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What item are you auctioning?',
    },
  ])};
