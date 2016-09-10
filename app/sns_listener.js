'use strict';

let config = require('sqs.config.js');

let Poller = require('aws-sqs-poller'),
  options = {
    name: config.arn,
    accessKeyId:

  }
