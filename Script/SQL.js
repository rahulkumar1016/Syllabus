const { Server } = require("http");
const sql = require("mssql/msnodesqlv8");
var config = {
    Server : "RAHUL-SHARMA\\SQLEXPRESS",
    database : "PPUSyllabus",
    driver : "msnodesqlv8",
    Option : {
        trustedConnection:true
    }
}

sql.connect(config, function(err){
    if(err)console.log(err);
    var request = new sql.Request();
    request.query("select * from name",function(err, records){
        if(err)console.log(err);

        else{
            console.log(records)
        }
    })
})