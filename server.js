'use strict';

let express = require('express');
let app = express();
let config = require(__dirname + '/config/env');

app.use(express.static(__dirname + '/'));

app.listen(config.PORT, () => {
  console.log(`listening on post ${config.PORT}`);
});
