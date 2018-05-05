// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    updateOne: function(id, cb) {
        orm.updateOne("burgers", id, cb);
    },

    insertOne: function(name, cb) {
        orm.insertOne("burgers", name, cb);
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;

