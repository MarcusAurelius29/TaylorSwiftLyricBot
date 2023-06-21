var quote = document.getElementById("quote");
var song = document.getElementById("song");
var album = document.getElementById("album");

var albumCoverPhotos = {
    "Reputation" : "reputation.jpg",
    "Red" : "red.jpg",
    "Folklore" : "folklore.jpg",
    "Lover" : "lover.jpg",
    "Evermore" : "evermore.jpg",
    "Midnights" : "midnights.jpg",
    "Speak Now" : "speak-now.jpg",
    "Fearless" : "fearless.jpg",
    "1989" : "1989.jpg"
}

function generateText()
{
    quote.textContent = "Generating...";
    song.textContent = "";
    album.textContent = "";
    fetchLyrics("https://taylorswiftapi.onrender.com/get");
}

async function fetchLyrics(url) {
  try {
  const response = await fetch(url);
  const data = await response.json();
  const generatedQuote = data.quote;
  const generatedSong = data.song;
  const generatedAlbum = data.album;
  const albumCoverURL = albumCoverPhotos[generatedAlbum];
  if(albumCoverURL)
  {
    document.getElementById("background-photo-div").style.backgroundImage = `url(${albumCoverURL})`;
  }
  else
  {
    console.warn("Album cover not found")
  }
  quote.textContent = generatedQuote;
  quote.style.fontSize = "18px";
  quote.style.fontWeight = "bold";

  song.textContent = "Song: " + generatedSong;
  song.style.fontSize = "16px";
  song.style.fontWeight = "bold";

  album.textContent = "Album: " + generatedAlbum;
  album.style.fontSize = "16px";
  album.style.fontWeight = "bold";

} catch (error) {
    console.error("Error fetching data" , error);
    quote.textContent = "Error fetching data";
    song.textContent = "Error fetching data";
    album.textContent = "Error fetching data";
}

}


