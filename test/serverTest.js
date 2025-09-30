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



















//process.env.NODE_ENV = 'test';   
//
//var chai = require('chai');
//var chaiHttp = require('chai-http');
//
//var server = require('../server');
//var should = chai.should();
//var expect = chai.expect;
//
//chai.use(chaiHttp);
//
//describe('Photos', function(){
//

    //it('should list ALL photos on / GET', function(done){
        //this.timeout(60000);
        //chai.request(server)
        //.get('/')
        //.end(function(err,res){
        //    res.should.have.status(200);
        //    res.should.be.html;
        //    res.body.should.be.a('object')
        //    done();
        //})
    //});
//})
