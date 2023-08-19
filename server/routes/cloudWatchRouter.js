const express = require('express');
const cloudWatchLogController = require('../controllers/cloudwatch/cloudWatchLogController.js');
const stsController = require('../controllers/stsController.js');
const cloudWatchRouter = express.Router();
const cloudWatchMetricsController = require('../controllers/cloudwatch/cloudWatchMetricsController.js');

//view function streams - user needs to specify function name
cloudWatchRouter.post('/getLogs', stsController.getCredentials, cloudWatchLogController.viewFunctionStreams, (req, res) => {

    return res.status(200).json(res.locals.logStreamNames);
});

//view timestamp and message - user needs to specify function name and stream name
cloudWatchRouter.post('/getStreamDetails', stsController.getCredentials, cloudWatchLogController.viewStreamInfo, (req, res) => {
  return res.status(200).json(res.locals.events);
});

// 1st req body { region, roleArn } // 2nd req body { funcName, sortBy, period, startDate, region }
cloudWatchRouter.post('/getMetrics', stsController.getCredentials, cloudWatchMetricsController.getMetrics, (req, res) => {
  return res.status(200).json(res.locals.metrics);
});

module.exports = cloudWatchRouter;