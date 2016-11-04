class Library {
  constructor (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlist = [];
  }

  addPlaylist(pl) {
    this.playlist.push(pl)
  }

 }

class Playlist {
  constructor(name) {
  this.name = name;
  this.tracks = []
  }

  addTrack(x) {
    this.tracks.push(x)
  }
}

class Track {
  constructor(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
  }
 }

 Playlist.prototype.totalDuration = function() {
  var final = this.tracks.reduce(function(sum, nextTrack) {
    return sum + nextTrack.length;
  }, 0)
  return final;
 }

 Playlist.prototype.overallRating = function() {
  var final = this.tracks.reduce(function(sum, nextRating, index, tracks) {
    var added = sum + nextRating.rating;
    return added / tracks.length
  }, 0)
  return final
 }


var lib = new Library('library', 'justin')
var playlist1 = new Playlist("Justin's Playlist")
var song1 = new Track('Fire', 5, 120)
var song2 = new Track('Never', 3, 180)

lib.addPlaylist(playlist1)
playlist1.addTrack(song1)
playlist1.addTrack(song2)


console.log(playlist1.totalDuration())
console.log(playlist1.overallRating())

