var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT * FROM notedata WHERE id = 1;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});