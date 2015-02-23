var utils = require("./utils");

function Favorites() {
  function getAll(token) {
    var u = utils.buildMeUrl("/favorites");
    return utils.handlePromise(u, token);
  }
  
  function add(token, tracks) {
  }
  
  function remove(token, track) {
  }
  
  return {
    getAll:getAll,
    add:add,
    remove:remove
  }
}

module.exports = new Favorites();