const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    database: "hospital3",
});

connection.connect(function (err) {
    connection.query(
        "delete from patient where pid=4",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );
});

connection.connect(function (err) {
    connection.query(
        "delete from staff where pid =  3",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );
});

connection.connect(function (err) {
    connection.query(
        "delete from doctor where pname='dr.shah'",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );
});

module.exports = connection;