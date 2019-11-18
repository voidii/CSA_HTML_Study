var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mydatabase.c9ukuxyqda4n.us-west-1.rds.amazonaws.com',
  user     : 'CSAUser',
  password : 'Csa666!!',
  database : 'workshop'
});
 
connection.connect();
 
connection.query('SELECT name from franl_try_now', function (error, results, fields) {
  if (error) throw error;
  console.log('The result is: ', results);
});
 
connection.end();