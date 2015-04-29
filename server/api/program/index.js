'use strict';

var express = require('express');

var controller = require('./program.controller');


var router = express.Router();

/*
* GET     /program              ->  index
* GET     /program/:id          ->  show
* POST    /program              ->  create
* PUT     /program/:id          ->  update
* DELETE  /program/:id          ->  destroy
*/

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.add);
/*router.put('/:id', controller.edit);*/
router.delete('/:id', controller.delete);


module.exports = router;
