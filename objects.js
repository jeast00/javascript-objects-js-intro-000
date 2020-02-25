const playlist = {
  "Bob": "All I want"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, artistName, songTitle);
}
