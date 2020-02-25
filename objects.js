const playlist = {
  "Bill" : songTitle
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, artistName, songTitle);
}
