
function setpause() {
  player.pause()
}

function startplay() {
  player.play()
}

var options = {
    id: 176701928,
    width: 640,
    portrait: false,
    title: false,
    byline: false,
    color: "ffffff"
};

var player = new Vimeo.Player("made-in-ny", options);
