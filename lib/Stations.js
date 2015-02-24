var utils = require("./utils");
function Stations() {
  function getAll(token) {
    var u = utils.buildMeUrl("/stations");
    return utils.handlePromise(u, token);
  }
  return {
    getAll:getAll
  }
}

module.exports = new Stations();