const playlist = {
  "Slowdive"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, artistName, songTitle);
}
