const express = require('express')
const app = express()
var mysql = require("./executeQuery")


app.get('/cauhoi', async function(req, res){
    let reg = new RegExp('^[0-9]+$');
    let levels =  (req.query.level).match(reg)
    let query = `SELECT cauhoi, dapana, dapanb, dapanc, dapand, ketqua, level FROM dulieu WHERE level = '${levels}' ORDER BY RAND() LIMIT 1`;
    let result = await mysql(query);
    var data = result[0][0];
    if (data){
        res.send({
            'error_code': 0,
            'res': data,
        })
    }
    else{
        res.send({
            'error_code' : 1,
            'res': 'Khong Tim Thay Cau Hoi Tuong Ung Level'
        })
    }
});



app.listen(3005, function(){
    console.log('Example app listening on port 3000!');
})
module.exports = app;