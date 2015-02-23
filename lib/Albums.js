var utils = require("./utils");

function Albums() {
  function getNewReleases(key, params) {
    var u = utils.buildUrl("/albums/new", params, key);
    return utils.handlePromise(u);
  }
  function getStaffPicks(key, params) {
    var u = utils.buildUrl("/albums/picks", params, key);
    return utils.handlePromise(u);
  }
  function getTopAlbums(key, params) {
    var u = utils.buildUrl("/albums/top", params, key);
    return utils.handlePromise(u);
  }
  function getAlbumDetails(key, album) {
    var u = utils.buildUrl("/albums/"+album, null, key);
    return utils.handlePromise(u);
  }
  function getAlbumTracks(key, album) {
    var u = utils.buildUrl("/albums/"+album+"/tracks", null, key);
    return utils.handlePromise(u);
  }
  function getAlbumImages(key, album) {
    var u = utils.buildUrl("/albums/"+album+"/images", null, key);
    return utils.handlePromise(u);
  }
  function getSimilarAlbums(key, album) {
    var u = utils.buildUrl("/albums/"+album+"/similar", null, key);
    return utils.handlePromise(u);
  }
  function getAlbumReviews(key, album) {
    var u = utils.buildUrl("/albums/"+album+"/reviews", null, key);
    return utils.handlePromise(u);
  }
  function getAlbumPosts(key, album) {
    var u = utils.buildUrl("/albums/"+album+"/posts", null, key);
    return utils.handlePromise(u);
  }
  
  return {
    getNewReleases:getNewReleases,
    getStaffPicks:getStaffPicks,
    getTopAlbums:getTopAlbums,
    getAlbumDetails:getAlbumDetails,
    getAlbumTracks:getAlbumTracks,
    getAlbumImages:getAlbumImages,
    getSimilarAlbums:getSimilarAlbums,
    getAlbumReviews:getAlbumReviews,
    getAlbumPosts:getAlbumPosts
  }
}

module.exports = new Albums();