document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('ryteg');
    const audioElement = document.getElementById('tegSound');

    videoElement.addEventListener('mouseover', () => {
      audioElement.play();
      videoElement.play();
    });
  
    videoElement.addEventListener('mouseout', () => {
      audioElement.pause();
      videoElement.pause();
      audioElement.currentTime = 0;
      videoElement.currentTime = 0;
    });
  });