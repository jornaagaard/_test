const createAudioControls = function(classes) {
  classes = classes
    ? classes
    : {
        wrapper: ".audio",
        audio: ".audio-src",
        playButton: ".audio-play",
        pauseButton: ".audio-pause",
        timelineCurrent: ".audio-timeline-current",
        timeline: ".audio-timeline",
        timecode: ".audio-timecode"
      };

  function getAudioElements(event) {
    const wrapper = event.target.closest(classes.wrapper);
    const audio = wrapper.querySelector(classes.audio);
    const playButton = wrapper.querySelector(classes.playButton);
    const pauseButton = wrapper.querySelector(classes.pauseButton);
    const timelineCurrent = wrapper.querySelector(
      classes.timelineCurrent
    );
    const timeline = wrapper.querySelector(classes.timeline);
    const timecode = wrapper.querySelector(classes.timecode);
    return {
      audio,
      playButton,
      pauseButton,
      timelineCurrent,
      timeline,
      timecode
    };
  }

  function getAllAudioElements() {
    const audios = document.querySelectorAll(classes.audio);
    const playButtons = document.querySelectorAll(classes.playButton);
    const pauseButtons = document.querySelectorAll(classes.pauseButton);
    const timelineCurrents = document.querySelectorAll(
      classes.timelineCurrent
    );
    const timelines = document.querySelectorAll(classes.timelines);
    const timecodes = document.querySelectorAll(classes.timecodes);
    return {
      audios,
      playButtons,
      pauseButtons,
      timelineCurrents,
      timelines,
      timecodes
    };
  }

  function togglePlay(event) {
    const audio = getAudioElements(event).audio;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function updateButton(event) {
    const wrapper = getAudioElements(event);
    if (wrapper.audio.paused) {
      wrapper.pauseButton.style.display = "none";
      wrapper.playButton.style.display = "block";
    } else {
      wrapper.playButton.style.display = "none";
      wrapper.pauseButton.style.display = "flex";
    }
  }

  function handleProgress() {
    const wrapper = getAudioElements(event);
    const percent =
      (wrapper.audio.currentTime / wrapper.audio.duration) * 100;
    wrapper.timelineCurrent.style.flexBasis = `${percent}%`;
  }

  function displayTimeCode(event) {
    const wrapper = getAudioElements(event);
    var sec = parseInt(wrapper.audio.currentTime % 60);
    var min = parseInt((wrapper.audio.currentTime / 60) % 60);
    var durSec = parseInt(wrapper.audio.duration % 60);
    var durMin = parseInt((wrapper.audio.duration / 60) % 60);
    wrapper.timecode.innerText =
      (min < 0 ? "0" : "") +
      (min < 10 ? "0" : "") +
      min +
      ":" +
      (sec < 10 ? "0" : "") +
      sec +
      "/" +
      (durMin < 10 ? "0" : "") +
      durMin +
      ":" +
      (durSec < 10 ? "0" : "") +
      durSec;
  }

  function scrub(event) {
    const wrapper = getAudioElements(event);
    const scrubTime =
      (event.offsetX / wrapper.timeline.offsetWidth) *
      wrapper.audio.duration;
    wrapper.audio.currentTime = scrubTime;
  }

  function initialVolume() {
    const audios = document.querySelectorAll(classes.audio);
    for (let i = 0; i < audios.length; ++i) {
      audios[i].volume = 1;
    }
  }
  initialVolume();

  let mousedown = false;

  function setEventListeners() {
    const wrappers = getAllAudioElements();

    wrappers.audios.forEach(audio => {
      audio.addEventListener("play", updateButton);
      audio.addEventListener("pause", updateButton);
      audio.addEventListener("timeupdate", handleProgress);
      audio.addEventListener("timeupdate", displayTimeCode);
      audio.addEventListener("loadedmetadata", displayTimeCode);
    });
    wrappers.playButtons.forEach(playButton =>
      playButton.addEventListener("click", togglePlay)
    );
    wrappers.pauseButtons.forEach(pauseButton =>
      pauseButton.addEventListener("click", togglePlay)
    );
    wrappers.timelines.forEach(timeline => {
      timeline.addEventListener("click", scrub);
      timeline.addEventListener("mousemove", e => mousedown && scrub(e));
      timeline.addEventListener("mousedown", () => (mousedown = true));
      timeline.addEventListener("mouseup", () => (mousedown = false));
    });
  }
  setEventListeners();
};
createAudioControls({
  wrapper: ".audio",
  audio: ".audio-src",
  playButton: ".audio-play",
  pauseButton: ".audio-pause",
  timelineCurrent: ".audio-timeline-current",
  timeline: ".audio-timeline",
  timecode: ".audio-timecode"
});
