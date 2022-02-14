const Dbobj = require('pg').Pool;




const db_context = new Dbobj({
    user:"postgres",
    password:"12345",
    host:"localhost",
    port: 5432,
    database:"postgre_full_stack" 
});

module.exports = db_context;