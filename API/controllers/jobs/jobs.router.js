var express = require('express');
var router = express.Router();

// Controllers
var jobsController = require ('./jobs.controller');

// Se ingresa la solicitud por empresa
router.get('/jobs', jobsController.submitRequest);



module.exports = router;