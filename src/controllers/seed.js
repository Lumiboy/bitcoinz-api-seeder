const config = require('config');

exports.apiList = (req, res, next) => {
  res.json({
    apiServers: config.apiServers
  });
};

exports.bwsList = (req, res, next) => {
  res.json({
    bwsServers: config.bwsServers
  });
};

exports.combinedList = (req, res, next) => {
  res.json({
    apiServers: config.apiServers,
    bwsServers: config.bwsServers,
  });
};
