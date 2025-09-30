process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const should = chai.should();

chai.use(chaiHttp);

describe('Photos', function () {
  // Increase timeout for DB connection in CI/test environments
  this.timeout(60000);

  it('should load the home page (/) successfully', function (done) {
    chai
      .request(server)
      .get('/')
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.html; // ✅ expect HTML
        done();
      });
  });
});



