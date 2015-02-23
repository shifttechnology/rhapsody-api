var Artists = require("./Artists"),
    Albums = require("./Albums"),
    Tracks = require("./Tracks"),
    Favorites = require("./Favorites");

function Rhapsody(data) {
  var apikey = '';
  
  if (typeof data === 'undefined') {
    throw new Error("apikey required");
  } else if (typeof data === 'string') {
    apikey = data;
  } else { // assume object
    if (typeof data.apikey === 'undefined') {
      throw new Error("apikey required");
    } else {
      apikey = data.apikey;
    }
  }

  function topArtists(params) {
    return Artists.getTop(apikey, params);
  }
  
  function artistDetails(artist) {
    return Artists.getDetails(apikey, artist);
  }
  
  function artistBio(artist) {
    return Artists.getBio(apikey, artist);
  }
  
  function artistNewReleases(artist, params) {
    return Artists.getNewReleases(apikey, artist, params);
  }
  function artistTopAlbums(artist, params) {
    return Artists.getTopAlbums(apikey, artist, params);
  }
  
  function artistDiscography(artist, params) {
    return Artists.getDiscography(apikey, artist, params);
  }
  
  function artistTopTracks(artist, params) {
    return Artists.getTopTracks(apikey, artist, params);
  }
  
  function artistImages(artist) {
    return Artists.getImages(apikey, artist);
  }
  
  function artistSimilar(artist) {
    return Artists.getSimilar(apikey, artist);
  }
  
  function artistEditorialPosts(artist) {
    return Artists.getEditorialPosts(apikey, artist);
  }
  
  function newAlbums(params) {
    return Albums.getNewReleases(apikey, params);
  }
  function staffPickAlbums(params) {
    return Albums.getStaffPicks(apikey, params);
  }
  function topAlbums(params) {
    return Albums.getTopAlbums(apikey, params);
  }
  function albumDetails(album, params) {
    return Albums.getAlbumDetails(apikey, album);
  }
  function albumTracks(album, params) {
    return Albums.getAlbumTracks(apikey, album);
  }
  function albumImages(album, params) {
    return Albums.getAlbumImages(apikey, album);
  }
  function similarAlbums(album, params) {
    return Albums.getSimilarAlbums(apikey, album);
  }
  function albumReviews(album, params) {
    return Albums.getAlbumReviews(apikey, album);
  }
  function albumEditorialPosts(album, params) {
    return Albums.getAlbumPosts(apikey, album);
  }
  
  function getTopTracks(params) {
    return Tracks.getTop(apikey, params);
  }
  function getTrackDetails(track) {
    return Tracks.getDetails(apikey, track);
  }
  
  function myFavorites(token) {
    return Favorites.getAll(token);
  }
  function addFavorite(token, tracks) {
  }
  function removeFavorite(token, track) {
  }
  
  return {
    topArtists:topArtists,
    artistDetails:artistDetails,
    artistBio:artistBio,
    artistNewReleases:artistNewReleases,
    artistTopAlbums:artistTopAlbums,
    artistDiscography:artistDiscography,
    artistTopTracks:artistTopTracks,
    artistImages:artistImages,
    artistSimilar:artistSimilar,
    artistEditorialPosts:artistEditorialPosts,
    
    newAlbums:newAlbums,
    staffPickAlbums:staffPickAlbums,
    topAlbums:topAlbums,
    albumDetails:albumDetails,
    albumTracks:albumTracks,
    albumImages:albumImages,
    similarAlbums:similarAlbums,
    albumReviews:albumReviews,
    albumEditorialPosts:albumEditorialPosts,
    
    getTopTracks:getTopTracks,
    getTrackDetails:getTrackDetails,
    
    myFavorites:myFavorites
  }
}

module.exports = Rhapsody;