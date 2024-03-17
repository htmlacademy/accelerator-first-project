(function () {
  const parseMediaURL = (media) => media.src;
  const generateURL = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.match(/[?&]v=([^&#]+)/)[1];
      return `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1`;
    } else if (url.includes('vimeo.com')) {
      const videoId = url.match(/vimeo.com\/(\d+)/)[1];
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    } else {
      return url;
    }
  };
  const createIframe = (id) => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('video__media');
    return iframe;
  };

  const setupVideo = (video) => {
    const link = video.querySelector('.video__link');
    const media = video.querySelector('.video__media');
    const button = video.querySelector('.video__button');
    const id = parseMediaURL(media);

    video.addEventListener('click', () => {
      const iframe = createIframe(id);
      video.appendChild(iframe);

      link.remove();
      button.remove();
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
  };

  const setupVideos = () => {
    document
      .querySelectorAll('.video')
      .forEach(setupVideo);
  };

  setupVideos();
})();
