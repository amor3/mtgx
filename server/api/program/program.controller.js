/**
 * GET     /program              ->  index
 * POST    /program              ->  create
 * GET     /program/:id          ->  show
 * PUT     /program/:id          ->  update
 * DELETE  /program/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var mysql = require('mysql');


// MySQL Pool
var pool      =    mysql.createPool({
  connectionLimit : 100, //important
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mtgx',
  debug    :  false
});

// Get all programs
exports.index = function(req, res) {

  pool.getConnection(function(err,connection){
    if (err) {
      connection.release();
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }

    console.log('connected as id ' + connection.threadId);

    connection.query("SELECT * FROM program",function(err,rows){
      connection.release();
      if(!err) {
        res.json(rows);
      }
    });

    connection.on('error', function(err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    });
  });

};


// Get specific program
exports.show = function(req, res) {

  pool.getConnection(function(err,connection){
    if (err) {
      connection.release();
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }

    console.log('connected as id ' + connection.threadId);

    connection.query("SELECT * FROM program WHERE id = " + req.params.id, function(err,rows){
      connection.release();
      if(!err) {
        res.json(rows);
      }
    });

    connection.on('error', function(err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    });
  });

};


// Create a program
exports.add = function(req, res) {

  pool.getConnection(function(err,connection){
    if (err) {
      connection.release();
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }

    console.log('connected as id ' + connection.threadId);

    connection.query('INSERT INTO program SET ?', req.body, function(err,rows){
      connection.release();
      if(!err) {


        res.json(rows);
      }
    });

    connection.on('error', function(err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    });
  });

};


// Delete a program
exports.delete = function(req, res) {

  pool.getConnection(function(err,connection){
    if (err) {
      connection.release();
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    }
    console.log('connected as id ' + connection.threadId);

    connection.query("DELETE FROM program WHERE id = " + req.params.id, function(err,rows){
      connection.release();
      if(!err) {
        res.json(rows);
      }
    });

    connection.on('error', function(err) {
      res.json({"code" : 100, "status" : "Error in connection database"});
      return;
    });
  });

};
