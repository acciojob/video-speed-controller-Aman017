document.addEventListener('DOMContentLoaded', () => {
  const speed = document.querySelector('.speed');
  const speedBar = document.querySelector('.speed-bar');
  const video = document.querySelector('video');

  // Event listener for mouse movement over the speed bar
  speed.addEventListener('mousemove', function (e) {
    const y = e.pageY - this.offsetTop; // Calculate the mouse Y position within the speed bar
    const percent = y / this.offsetHeight; // Get the percentage of the bar
    const min = 0.5;  // Minimum speed
    const max = 2;    // Maximum speed
    const height = Math.round(percent * 100) + '%'; // Height of the speed bar
    const playbackRate = percent * (max - min) + min; // Calculate playback rate

    speedBar.style.height = height; // Update the height of the speed bar
    speedBar.textContent = playbackRate.toFixed(1) + '×'; // Display the speed as text
    video.playbackRate = playbackRate; // Update the video playback rate
  });
});
