 var connection = require("../config/connection.js");

 var orm = {
        selectAll: function(tableInput, cb) {
            var queryString = "SELECT * FROM ??";
            connection.query(queryString, [tableInput], function(err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
                });
        },

//   insertOne: function(whatToSelect, tableInput) {
//     var queryString = "SELECT ?? FROM ??";
//     connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
//       if (err) {
//         throw err;
//       }
//       console.log(result);
//     });
//   },
//   updateOne: function(whatToSelect, tableInput) {
//     var queryString = "SELECT ?? FROM ??";
//     connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
//       if (err) {
//         throw err;
//       }
//       console.log(result);
//     });
//   },
   }

module.exports = orm;   