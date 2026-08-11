// 1. Select both video and audio tags together using a comma separator
const allMedia = document.querySelectorAll('video, audio');

allMedia.forEach(media => {
  media.addEventListener('play', () => {
    // 2. Loop through every single media item on the page
    allMedia.forEach(otherMedia => {
      // 3. If it's NOT the one that just started playing, pause it
      if (otherMedia !== media) {
        otherMedia.pause();
      }
    });
  });
});