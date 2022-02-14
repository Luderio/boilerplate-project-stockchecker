'use strict';

const { response } = require("../server");
const mongoose = require('mongoose');
const requestIp = require('request-ip');

module.exports = function (app) {

  //https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/[symbol]/quote

  app.route('/api/stock-prices')
    .get(function (request, response){
      const stockSymbol = request.query.stock;
      const likeValue = request.query.like;
      const ipAddress = requestIp.getClientIp(request);


      
    });
    
};
