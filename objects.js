const playlist = {
  "Billy Joel" : "New York State of Mind"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  return Object.delete(playlist, {[artistName]});
}
