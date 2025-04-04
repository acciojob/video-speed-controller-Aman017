const video = document.querySelector("video");
const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");

speed.addEventListener("mousemove", function (e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.5;
    const max = 2;
    const playbackRate = percent * (max - min) + min;
    
    video.playbackRate = playbackRate;
    speedBar.style.height = `${percent * 100}%`;
    speedBar.textContent = playbackRate.toFixed(1) + "×";
});
