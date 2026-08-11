 const videos = document.querySelectorAll('video');

    videos.forEach(video => {
      video.addEventListener('play', () => {
        videos.forEach(otherVideo => {
          if (otherVideo !== video) {
            otherVideo.pause();
          }
        });
      });
    });


        // Get all audio elements
    const audios = document.querySelectorAll('audio');

    audios.forEach(audio => {
      audio.addEventListener('play', () => {
        audios.forEach(otherAudio => {
          if (otherAudio !== audio) {
            otherAudio.pause();
          }
        });
      });
    });