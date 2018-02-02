/* Require Dependencies */
var inquirer = require("inquirer");
var mysql = require("mysql");
var Table = require("cli-table");

/* Create Table */
var table = new Table({
  head: ['ID', 'Product', 'Department', 'Price', 'Availability'],
  colWidths: [5, 20, 20, 20, 20]
});

/* Set up connection */
var connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  password: '',
  database: 'bamazon',
});

/* Server Connect */
connection.connect(function (err) {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
});

/* Display Inventory */
connection.query("SELECT * FROM products", function (err, res) {
  if (err) throw err;

  /* Push inventory to table */
  for (var i = 0; i < res.length; i++) {
    table.push(
      [res[i].product_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
    );
  }

  /* Display Table */
  console.log(table.toString());

  purchase();
});

var purchase = function() {
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
  ]).then(function (response) {
    
    /* Store responses in a variable */
    var customerPurchase = [
      item = response.item,
      quantity = response.quantity
    ];

    connection.query('SELECT * FROM products WHERE product_id = ?', customerPurchase.item, function (err, response) {
      if (err) throw err;
      if (response.stock_quantity < customerPurchase.quantity) {
        console.log("INSUFFICIENT PRODUCT");
        connection.end();
      } else {
        console.log("You have purchased " + customerPurchase.quantity + " of Product ID: " + customerPurchase.item);
        var salePrice = response.price * customerPurchase.quantity;
        console.log(salePrice);
      }
    })
    })
}