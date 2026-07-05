const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    database: "hospital3",
});


connection.connect(function (err) {
    connection.query("create table doctor (pid int,pname varchar(25),age int,gender varchar(25))",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );
});
connection.connect(function (err) {
    connection.query("create table staff (pid int,pname varchar(25),age int,gender varchar(25))",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );
});

module.exports = connection;