var assert = require("assert"),
    should = require("chai").should(),
    key = process.env.KEY,
    rhapsody = require("../rhapsody")(key);

describe("rhasody", function() {  
  describe(".topArtists", function() {
    it("Should return a list of top artists.", function(done) {
      rhapsody.topArtists().then(function(response) {
        try {
          should.exist(response);
          response.should.be.an('array');
          done();
        } catch (e) {
          done(e);
        }
      }), function(err) {
        done(err);
      };
    });
  });
  describe(".artistDetail", function() {
    it("Should return a given artists details", function(done) {
      rhapsody.artistDetails("art.954").then(function(response){
        try {
          should.exist(response);
          response.should.be.an('object');
          done();
        } catch (e) {
          done(e);
        }
      }, function(err) { done(err); });
    });
  });
  describe(".artistBio", function() {
    it("Should return a given artists details", function(done) {
      rhapsody.artistBio("art.954").then(function(response){
        try {
          should.exist(response);
          response.should.be.an('object');
          done();
        } catch (e) {
          done(e);
        }
      }, function(err) { done(err); });
    });
  });
  
  describe(".artistNewReleases", function() {
    it("Should return a given artists details", function(done) {
      rhapsody.artistNewReleases("art.954").then(function(response){
        try {
          should.exist(response);
          response.should.be.an('array');
          done();
        } catch (e) {
          done(e);
        }
      }, function(err) { done(err); });
    });
  });
  
  describe(".artistTopAlbums", function() {
    it("Should return a given artists details", function(done) {
      rhapsody.artistTopAlbums("art.954").then(function(response){
        try {
          should.exist(response);
          response.should.be.an('array');
          done();
        } catch (e) {
          done(e);
        }
      }, function(err) { done(err); });
    });
  });
  
  describe(".artistDiscography", function() {
    it("Should return a given artists details", function(done) {
      rhapsody.artistDiscography("art.954").then(function(response){
        try {
          should.exist(response);
          response.should.be.an('array');
          done();
        } catch (e) {
          done(e);
        }
      }, function(err) { done(err); });
    });
  });
  
  describe(".artistImages", function() {
    it("Should return a given artist's images", function(done) {
      rhapsody.artistImages("art.954").then(function(response){
        try {
          should.exist(response);
          response.should.be.an('array');
          done();
        } catch (e) {
          done(e);
        }
      }, function(err) { done(err); });
    });
  });
  
  describe(".artistSimilar", function() {
    it("Should return similar artists", function(done) {
      rhapsody.artistSimilar("art.954").then(function(response){
        try {
          should.exist(response);
          response.should.be.an('object');
          done();
        } catch (e) {
          done(e);
        }
      }, function(err) { done(err); });
    });
  });
  
  describe(".artistEditorialPosts", function() {
    it("Should return a given artist's editorial posts", function(done) {
      rhapsody.artistEditorialPosts("art.954").then(function(response){
        try {
          should.exist(response);
          response.should.be.an('array');
          done();
        } catch (e) {
          done(e);
        }
      }, function(err) { done(err); });
    });
  });
  
//    newAlbums:newAlbums,
//    staffPickAlbums:staffPickAlbums,
//    topAlbums:topAlbums,
//    albumDetails:albumDetails,
//    albumTracks:albumTracks,
//    albumImages:albumImages,
//    similarAlbums:similarAlbums,
//    albumReviews:albumReviews,
//    albumEditorialPosts:albumEditorialPosts,
//    
//    getTopTracks:getTopTracks,
//    getTrackDetails:getTrackDetails,
  
});