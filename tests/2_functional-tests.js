const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    suite('Get Requests test', function() {

        //Viewing one stock: GET request to /api/stock-prices/
        test('Viewing one stock', function(done) {
            chai.request(server)
                .get('/api/stock-prices/')
                .set("content-type", "application/json")
                .query({stock: "TSLA"})
                .end(function(error, response) {
                    assert.equal(response.status, 200);
                    assert.equal(response.body.stockData.stock, "TSLA");
                    assert.exists(response.body.stockData.price, "TSLA has a price");
                    done();
                });
        });

        //Viewing one stock and liking it: GET request to /api/stock-prices/
        test('Viewing one stock and liking it', function(done) {
            chai.request(server)
                .get('/api/stock-prices/')
                .set("content-type", "application/json")
                .query({stock: "GOLD", like: true})
                .end(function(error, response) {
                    assert.equal(response.status, 200);
                    assert.equal(response.body.stockData.stock, "GOLD");
                    assert.equal(response.body.stockData.likes, 1);
                    assert.exists(response.body.stockData.price, "GOLD has a price");
                    done();
                });
        });

        //Viewing the same stock and liking it again: GET request to /api/stock-prices/
        test('Viewing the same stock and liking it again', function(done) {
            chai.request(server)
                .get('/api/stock-prices/')
                .set("content-type", "application/json")
                .query({stock: "GOLD", like: true})
                .end(function(error, response) {
                    assert.equal(response.status, 200);
                    assert.equal(response.body.stockData.stock, "GOLD");
                    assert.equal(response.body.stockData.likes, 1);
                    assert.exists(response.body.stockData.price, "GOLD has a price");
                    done();
                });
        });

        //Viewing two stocks: GET request to /api/stock-prices/
        test('Viewing two stocks', function(done) {
            chai.request(server)
                .get('/api/stock-prices/')
                .set("content-type", "application/json")
                .query({stock: ["AMZN", "T"]})
                .end(function(error, response) {
                    assert.equal(response.status, 200);
                    assert.equal(response.body.stockData[0].stock, "AMZN");
                    assert.equal(response.body.stockData[1].stock, "T");
                    assert.exists(response.body.stockData[0].price, "AMZN has a price");
                    assert.exists(response.body.stockData[1].price, "T has a price");
                    done();
                });
        });

        //Viewing two stocks and liking them: GET request to /api/stock-prices/
        test('Viewing two stocks and liking them', function(done) {
            chai.request(server)
                .get('/api/stock-prices/')
                .set("content-type", "application/json")
                .query({stock: ["MSFT", "GOOG"], like: true})
                .end(function(error, response) {
                    assert.equal(response.status, 200);
                    assert.equal(response.body.stockData[0].stock, "MSFT");
                    assert.equal(response.body.stockData[1].stock, "GOOG");
                    assert.exists(response.body.stockData[0].price, "MSFT has a price");
                    assert.exists(response.body.stockData[1].price, "GOOG has a price");
                    assert.exists(response.body.stockData[0].rel_likes, "has rel_likes");
                    assert.exists(response.body.stockData[1].rel_likes, "has rel_likes");
                    done();
                });
        });
    });
});
