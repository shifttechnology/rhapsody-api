var utils = require("./utils");

function Tracks() {
  function getTop(apikey, params) {
    var u = utils.buildUrl("/tracks/top", params, apikey);
    return utils.handlePromise(u);
  }
  function getDetails(apikey, track) {
    var u = utils.buildUrl("/tracks/"+track, null, apikey);
    return utils.handlePromise(u);
  }
  
  return {
    getTop:getTop,
    getDetails:getDetails
  }
}

module.exports = new Tracks();