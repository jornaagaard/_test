
/* Audio player*/



/* Get Our Elements */
const audioPlayer = document.getElementById("audio_1");
const audio = audioPlayer.querySelector('.audio-src');
const playButton = audioPlayer.querySelector('.audio-play');
const pauseButton = audioPlayer.querySelector('.audio-pause');
const timeline = audioPlayer.querySelector('.audio-timeline');
const timelineCurrent = audioPlayer.querySelector('.audio-timeline-current');
const timecode = audioPlayer.querySelector('.audio-timecode');



/* Build out functions */
function togglePlay() {
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
	}
}

function updateButton() {
	if (audio.paused) {
		pauseButton.style.display = "none";
		playButton.style.display = "block";
	} else {
		playButton.style.display = "none";
		pauseButton.style.display = "flex";
	}
}

function initialVolume() {
	audio.volume = 1;
	console.log('Audio volume set to 1');
}
initialVolume();

function handleProgress() {
  const percent = (audio.currentTime / audio.duration) * 100;
  timelineCurrent.style.flexBasis = `${percent}%`;
}



/* Hook up the event listeners */
audio.addEventListener('play', updateButton);
audio.addEventListener('pause', updateButton);
playButton.addEventListener('click', togglePlay);
pauseButton.addEventListener('click', togglePlay);
audio.addEventListener('timeupdate', handleProgress);
