'use strict';

// var configN = require(__dirname + '/sqs.config.js');

var Poller = require('aws-sqs-poller'),
  options = {
    name: 'gamestream-dev-situation',
    accessKeyId: 'AKIAJKJB3EFCZL6LJQ3A',
    secretAccessKey: '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',
    region          : 'us-west-2'

  };

var newQueue = new Poller(options);

newQueue.start();

newQueue.on('message', function(msg) {
  console.log(msg);
  console.log('data = ', msg.body);

  newQueue.next();
});
