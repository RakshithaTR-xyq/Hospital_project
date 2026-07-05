const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    database: "hospital3",
});

connection.connect(function (err) {
    connection.query(
        "select pname, age, gender from patient",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );
});

connection.connect(function (err) {
    connection.query(
        "select dname, age from doctor",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );
});

connection.connect(function (err) {
    connection.query(
        "select ename, gender from staff",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );
});

module.exports = connection;