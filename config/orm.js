// Require -------------------------------------
var connection = require("../config/connection.js");

//create the methods that will execute the necessary MySQL commands in the controllers. 
// These are the methods you will need to use in order to retrieve and store data in your database.

// * `selectAll()`
// * `insertOne()`
// * `updateOne()`

// Object for all our SQL statement functions.
var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function ( colToSearch, valOfCol, cb) {
    //INSERT INTO burgers (burger_name) VALUES ('Classic');
      var queryString = "INSERT INTO burgers (??) VALUES (?);";
  
      connection.query(queryString, [colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
  updateOne: function (objColVals, condition, cb) {
    var queryString = "UPDATE burgers SET ? WHERE ? = ;";
    connection.query(queryString, [objColVals, condition], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export file -----------------------------------------------
module.exports = orm;