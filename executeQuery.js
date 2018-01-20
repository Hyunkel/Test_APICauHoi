var mysql = require("mysql2/promise");
var config = require("./config");
var Execute = async function (sql) {
    console.log(sql);
    var connection = null, data = null, fields = null;
    try {
        connection = await mysql.createConnection(config);
        console.log("ok");
        [data,fields] = await connection.execute(sql);
        await connection.end();
        return [data, fields]
        
    } catch (err) {
        await connection.end()
        console.log("=====================================")
        console.log(err)
        return [data, fields]
    }
}
module.exports = Execute;