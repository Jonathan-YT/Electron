const videoElement = document.querySelector('video');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const videoSelectBtn = document.getElementById('videoSelectBtn');

// videoSelectBtn.onclick = getVideoSources;
videoSelectBtn.addEventListener('click', getVideoSources);

const { desktopCapture, desktopCapturer } = require('electron');
const { Menu } = remote;

async function getVideoSources() {
  const inputSources = await desktopCapturer.getSources({
    types: ['window', 'screen'],
  });
}
