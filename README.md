rhapsody-api
===

NodeJS API wrapper for Rhapsody/Napster
This library implements promises.


## Installation
```
npm install rhapsody-api
```

## Usage
```javascript
var Rhapsody = require("rhapsody-api")("YOUR-ACCESS-TOKEN");

Rhapsody.topArtists().then(function(resp){
  console.log(resp);
});
```


