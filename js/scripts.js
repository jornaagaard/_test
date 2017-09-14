// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var players = [];

var player;
var playerto;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('en', {
    height: '100%',
    width: '100%',
    videoId: 'V-ncE-yR8mI',
  });
  playerto = new YT.Player('to', {
    height: '100%',
    width: '100%',
    videoId: 'tccqzw-ACgU',
  });
  players.push(player);
  players.push(playerto);
}

function pauseVideo(speller) {
  speller.pauseVideo();
}

function playVideo(speller) {
  speller.playVideo();
}

function pauseAllVideo(speller) {
  for (var i = 0, len = speller.length; i < len; i++) {
    speller[i].pauseVideo();
  }
}








// Inside Head tag
var players = [];

// Before </body>
function pauseVideo(speller) {
  speller.pauseVideo();
}

function playVideo(speller) {
  speller.playVideo();
}

function pauseAllVideo(speller) {
  for (var i = 0, len = speller.length; i < len; i++) {
    speller[i].pauseVideo();
  }
}

// Hver gang
<a href="#" onclick="playVideo(player)">Play</a>
var = player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('en', {
    height: '100%',
    width: '100%',
    videoId: 'V-ncE-yR8mI',
  });
  players.push(player);
}

