var utils = require("./utils");

function Library() {
  function getAllArtists(token) {
    var u = utils.buildMeUrl("/library/artists");
    return utils.handlePromise(u, token);
  }
  function getAllTracksByArtist(token, artist) {
    var u = utils.buildMeUrl("/library/artists/"+artist);
    return utils.handlePromise(u, token);
  }
  function getAllTracks(token) {
    var u = utils.buildMeUrl("/library/tracks");
    return utils.handlePromise(u, token);
  }
  function addTrack(token, track) {
    var u = utils.buildMeUrl("/library/tracks");
    return utils.handlePostPromise(u, track, token);
  }
  function removeTrack(token, track) {
    var u = utils.buildMeUrl("/library/tracks/"+track);
    return utils.handleDelPromise(u, token);
  }
  function getAlbums(token) {
    var u = utils.buildMeUrl("/library/albums");
    return utils.handleDeletePromise(u, token);
  }
  function addAlbum(token, album) {
    var u = utils.buildMeUrl("/library/albums");
    return utils.handlePostPromise(u, album, token);
  }
  function removeAlbum(token, album) {
    var u = utils.buildMeUrl("/library/albums/" + album);
    return utils.handleDelPromise(u, token);
  }
  
  return {
    getAllArtists:getAllArtists,
    getAllTracksByArtist:getAllTracksByArtist,
    getAllTracks:getAllTracks,
    addTrack:addTrack,
    removeTrack:removeTrack,
    getAlbums:getAlbums,
    addAlbum:addAlbum,
    removeAlbum:removeAlbum
  }
}

module.exports = new Library();