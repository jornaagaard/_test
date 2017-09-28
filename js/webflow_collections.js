

//Hvor skal denne plasseres?
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



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
// For thumbnail: <a href="#" onclick="playVideo(player)">Play</a>

<div id="en"></div>

var = player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('en', {
    height: '100%',
    width: '100%',
    videoId: 'V-ncE-yR8mI',
  });
  players.push(player);
}

