var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jZXUwGev5WKFxKfthA9f",
  database: "users"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT cauhoi, dapana, dapanb, dapanc, dapand, ketqua, level FROM dulieu WHERE level = '1' ORDER BY RAND() LIMIT 1;", function (err, result) {
    if (err) throw err;
    console.log("=======================");
    console.log(result);
  });
});