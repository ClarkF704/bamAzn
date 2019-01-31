var mysql = require("mysql");
var inquirer = require("inquirer");
var stock = [];
var stockQu;
var itemID;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
})

connection.connect(function (err) {
    console.log("Connected as id: " + connection.threadId);
    afterConnection();
})

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
          for(i=0;i<res.length;i++){
            stock[i] = res[i].stock_quantity

            console.log("=================="+stock[i])
            
        }
        start();
    });
}

function start() {
    inquirer.prompt({
        name: "item_id",
        message: "Would you like to purchase? (Please identify by ID)",
        type: 'input'

    }).then(function (answer1) {
        itemID = answer1.item_id
        connection.query("SELECT * FROM products WHERE ?", {
            "item_id": answer1.itemID
        }, function (err, res) {
            if (err) throw err;
          
            inquirer.prompt([{
                name: "stock_q",
                message: "How many would you like ?",
                type: 'input'
            }]).then(function (answer2) {
                console.log(answer2.stock_q)
                console.log(stock[itemID-1])
                if (answer2.stock_q > stock[itemID-1]) {
                    console.log("not enough in stock")
                    inquirer.prompt([{
                        name: "stock_check",
                        message: "We do not have enough in stock. The current stock is " + stock[itemID-1] + " please try again",
                    }])
                    start();
                } else {
                    inquirer.prompt([{
                        name: "stock_request",
                        message: "We do have that in stock! Would you like to place your order?",
                        type:'input'
                    }]).then(function (answer3) {
                            console.log(answer3)
                        if(answer3.stock_request === "yes") {
                            ("UPDATE products SET ? WHERE ?", [
                                { stock_quantity : 20 }, 
                                { item_id: itemID }
                           ]),
                                function (err, res) {
                                    if (err) throw err
                                    console.log(res);
                                }
                                console.log(itemID)
                                console.log("Your order has been placed. Have a nice day!")
                                start();
                        }else{
                            console.log("Please visit us again. I will now re route you to the main menu")
                            start();
                        }
                    })
                }

            })
        })
    })
}