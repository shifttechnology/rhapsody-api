var utils = require("./utils");

function Artists() {
  function getTop(key, params) {
    var u = utils.buildUrl("/artists/top", params, key);
    return utils.handlePromise(u);
  }
  function getDetails(key, artist) {
    var u = utils.buildUrl("/artists/" + artist, null, key);
    return utils.handlePromise(u);
  }
  function getBio(key, artist) {
    var u = utils.buildUrl("/artists/"+artist+"/bio", null, key);
    return utils.handlePromise(u);
  }
  function getNewReleases(key, artist, params) {
    var u = utils.buildUrl("/artists/"+artist+"/albums/new", params, key);
    return utils.handlePromise(u);
  }
  function getTopAlbums(key, artist, params) {
    var u = utils.buildUrl("/artists/"+artist+"/albums/top", params, key);
    return utils.handlePromise(u);
  }
  function getDiscography(key, artist, params) {
    var u = utils.buildUrl("/artists/"+artist+"/albums", params, key);
    return utils.handlePromise(u);
  }
  function getTopTracks(key, artist, params) {
    var u = utils.buildUrl("/artists/"+artist+"/tracks/top", params, key);
    return utils.handlePromise(u);
  }
  function getImages(key, artist) {
    var u = utils.buildUrl("/artists/"+artist+"/images", null, key);
    return utils.handlePromise(u);
  }
  function getSimilar(key, artist) {
    var u = utils.buildUrl("/artists/"+artist+"/similar", null, key);
    return utils.handlePromise(u);
  }
  function getEditorialPosts(key, artist) {
    var u = utils.buildUrl("/artists/"+artist+"/posts", null, key);
    return utils.handlePromise(u);
  }
  
  
  return {
    getTop:getTop,
    getDetails:getDetails,
    getBio:getBio,
    getNewreleases:getNewReleases,
    getTopAlbums:getTopAlbums,
    getDiscography:getDiscography,
    getTopTracks:getTopTracks,
    getImages:getImages,
    getSimilar:getSimilar,
    getEditorialPosts:getEditorialPosts
  }
}

module.exports = new Artists();