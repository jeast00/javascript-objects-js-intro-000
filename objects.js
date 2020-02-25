const playlist = {
  "Bill" : "Get it"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, artistName, songTitle);
}
