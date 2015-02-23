var assert = require("assert"),
    should = require("chai").should(),
    rhapsody = require("../rhapsody");

describe("rhasody", function() {  
  describe(".topArtists", function() {
    it("Should return a list of top artists.", function(done) {
      rhapsody.topArtists(function(error, response) {
        try {
          should.not.exist(error);
          should.exist(response);
          response.should.be.an('object');
          done();
        } catch (e) {
          done(e);
        }
      });
    });
  });
});