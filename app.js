/* Require Dependencies */
var inquirer = require("inquirer");
var mysql = require("mysql");

/* Set up connection */
var connection = mysql.createConnection({
  host: 'localhost', 
  /* Username */
  user: 'root',
  /* Password */
  password: '',
  database: 'bamazon'
});

/* Connect to server */
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
/* Log Connection ID */
  console.log('connected as id ' + connection.threadId);
});

/* Display Inventory */
function displayInventory() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

    /* Log all results of the SELECT statement */
    console.log(res);
    connection.end();
    inquirer.prompt([
      {
        type: "input",
        message: "What would you like to buy?",
        name: "item"
      },
      {
        type: "input",
        message: "How many would you like to purchase?",
        name: "quantity"
      }
    ]).then(function (inquirerResponse) {
      console.log("You want to purchase " + inquirerResponse.quantity + " of " + inquirerResponse.item + ".");
    })
  });
}

displayInventory();

function purchaseItem(item) {
  console.log("Purchasing...\n");
  connection.query(
    "")
}