'use strict';

var config = require(__dirname + '/config.js');

console.log(config.keyName);

var Poller = require('aws-sqs-poller'),
  options = {
    name: 'gamestream-dev-situation',
    accessKeyId: config.keyName,
    secretAccessKey: config.secret,
    region          : 'us-west-2'

  };

var newQueue = new Poller(options);

newQueue.start();

newQueue.on('message', function(msg) {
  console.log(msg);
  console.log('data = ', msg.body);

  newQueue.next();
});
