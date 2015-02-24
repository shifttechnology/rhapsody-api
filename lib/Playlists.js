var utils = require("./utils");

function Playlists() {
  function getAll(token) {
    var u = utils.buildMeUrl("/playlists");
    return utils.handlePromise(u, token);
  }
  function getDetails(token, playlist) {
    var u = utils.buildMeUrl("/playlists/"+playlist);
    return utils.handlePromise(u, token);
  }
  function getTracks(token, playlist) {
    var u = utils.buildMeUrl("/playlists/"+playlist+"/tracks");
    return utils.handlePromise(u, token);
  }
  
  return {
    getAll:getAll,
    getDetails:getDetails,
    getTracks:getTracks
  }
}

module.exports = new Playlists();