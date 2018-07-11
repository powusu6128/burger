var orm = require("../config/orm.js");

// console.log(orm);

var burgerFunc = {
    // Find all burgers
    selectAll: function (cb) {
        orm.selectAll("burgers", function (results) {
            cb(results);
        });
    },
    // insert new burger
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (results) {
            cb(results);
        })
    },
    // update already inserted burger
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (results) {
            cb(results);
        })
    },

    delete: function(objColVals,condition,cb){
        orm.delete("burgers", objColVals,condition, function(results){
            cb(results)
        });
    }

}


module.exports = burgerFunc;
