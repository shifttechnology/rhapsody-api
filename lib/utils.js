var request = require("request"),
    Promise = require("promise"),
    config = require("./config");


function Utils() {
  function handlePromise(u, access_token) {
    return new Promise(function(fulfill, reject) {
      get(u, access_token, function(err, res) {
        if (err) reject(err);
        else fulfill(res);
      });
    });
  }
  function handlePostPromise(u, data, access_token) {
    return new Promise(function(fulfill, reject) {
      post(u, data, access_token, function(err, res) {
        if (err) reject(err);
        else fulfill(res);
      });
    });
  }
  
  function handlePutPromise(u, data, access_token) {
  }
  
  function handleDelPromise(u, data, access_token) {
    return new Promise(function(fulfill, reject) {
      del(u, access_token, function(err, res) {
        if (err) reject(err);
        else fulfill(res);
      });
    });
  }
  
  /**
   * Build a URL for the API
   * @param   {String} path   api path
   * @param   {Object}   params object
   * @returns {String} an URL to load data from the API service
   */
  function buildUrl(path, params, apikey) {
    var u = config.url + config.version + path + "?apikey=" + apikey;
    if (params !== null) {
      if (typeof params === 'object') {
        if (typeof params.limit === 'number') {
          u += "&limit=" + params.limit;
        }
        if (typeof params.offset === 'number') {
          u += "&offset=" + params.offset;
        }
      }
    }
    return u;
  }
  
  function buildMeUrl(path) {
    var u = "https://api.rhapsody.com/"+config.version+"/me" + path;
    return u;
  }
    /**
   * @private
   * A function to help ease development. So as not to rewrite the same thing over and over again.
   */
  function get(url, token, callback) {
    if (typeof token === 'function') {
      callback = token;
    }
    if (typeof callback !== 'function') {
      callback = function(e,d){};
    }
    
    var tokenStr = "Bearer ";
    var opts = {
      url: url
    };
    if (typeof token === 'string') {
      opts.headers = { Authorization: tokenStr + token };
    }
    request.get(opts, function(error, body, response) {
      if (error) {
        console.log(error);
        callback(error, null);
      } else {
        if (body.statusCode != 200) {
          callback(JSON.parse(response), null);
        } else {
          callback(null, JSON.parse(response));
        }
      }
    });
  }
  
  function post(url, data, token, callback) {
    var opts = {
      url: url,
      headers: {
        Authorization: "Bearer: " + token
      },
      formData: data
    };
    request.post(opts, function(error, body, response) {
      if (error) {
        callback(error, null);
      } else {
        if (body.statusCode != 200) {
          callback(JSON.parse(response), null);
        } else {
          callback(null, JSON.parse(response));
        }
      }
    });
  }
  
  function put(url, token, callback) {
    var opts = {
      url: url,
      headers: {
        Authorization: "Bearer: " + token
      }
    };
    request.put(opts, function(error, body, response) {
      if (error) {
        callback(error, null);
      } else {
        if (body.statusCode != 200) {
          callback(JSON.parse(response), null);
        } else {
          callback(null, JSON.parse(response));
        }
      }
    });
  }
  
  function del(url, token, callback) {
    var opts = {
      url: url,
      headers: {
        Authorization: "Bearer: " + token
      }
    };
    request.delete(opts, function(error, body, response) {
      if (error) {
        callback(error, null);
      } else {
        if (body.statusCode != 200) {
          callback(JSON.parse(response), null);
        } else {
          callback(null, JSON.parse(response));
        }
      }
    });
  }
  
  return {
    handlePromise: handlePromise,
    handlePostPromise: handlePostPromise,
    handlePutPromise: handlePutPromise,
    handleDelPromise: handleDelPromise,
    
    buildUrl: buildUrl,
    buildMeUrl: buildMeUrl
  }
}

module.exports = new Utils();