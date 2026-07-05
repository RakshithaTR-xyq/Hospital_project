const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    database: "hospital3",
});

connection.connect(function (err) {
    if (err) throw err;

    connection.query(
        "insert into patient values(01,'sahil kumar',25,'m'),(02,'sumit kumar',28,'m'),(03,'ajay kumar',28,'m'),(04,'suhani',27,'f')",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );
});

connection.connect(function (err) {
    if (err) throw err;

    connection.query(
        "insert into staff values(101,'amit',18,'m'),(102,'suketu',19,'m'),(103,'alvin',45,'m')",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );
});

connection.connect(function (err) {
    if (err) throw err;

    connection.query(
        "insert into doctor values(201,'dr patel',45,'m'),(202,'dr shah',29,'m')",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );
});

module.exports = connection;