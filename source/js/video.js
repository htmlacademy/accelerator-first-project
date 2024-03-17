(function () {
  const YT_REGEXP = /[?&]v=([^&#]+)/;
  const VM_REGEXP = /vimeo.com\/(\d+)/;

  const parseMediaURL = (media) => media.src;
  const generateURL = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.match(YT_REGEXP)[1];
      return `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1`;
    } else if (url.includes('vimeo.com')) {
      const videoId = url.match(VM_REGEXP)[1];
      return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
    } else {
      return url;
    }
  };
  const createIframe = (url) => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', url);
    iframe.classList.add('video__media');
    return iframe;
  };

  const setupVideo = (video) => {
    const link = video.querySelector('.video__link');
    const media = video.querySelector('.video__media');
    const button = video.querySelector('.video__button');
    const url = parseMediaURL(media);
    const embedUrl = generateURL(url);

    video.addEventListener('click', () => {
      const iframe = createIframe(embedUrl);
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
