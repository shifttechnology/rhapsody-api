var utils = require("./utils");

function History() {
  function getArtists(token) {
    var u = utils.buildMeUrl("/recent/artists");
    return utils.handlePromise(u, token);
  }
  function getGenres(token) {
    var u = utils.buildMeUrl("/recent/genres");
    return utils.handlePromise(u, token);
  }
  function getHistory(token) {
    var u = utils.buildMeUrl("/listens");
    return utils.handlePromise(u, token);
  }
  return {
    getArtists:getArtists,
    getGenres:getGenres,
    getHistory:getHistory
  }
}

module.exports = new History();