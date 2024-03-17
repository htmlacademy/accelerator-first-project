(function () {
  const YTIMG_REGEXP = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;

  const parseMediaURL = (media) => {
    const url = media.src;
    const match = url.match(YTIMG_REGEXP);
    return match[1];
  };

  const createIframe = (src) => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', src);
    iframe.classList.add('video__media');
    return iframe;
  };

  const setupVideo = (video) => {
    const link = video.querySelector('.video__link');
    const youtube = video.querySelector('.video__media');
    const button = video.querySelector('.video__button');

    const id = parseMediaURL(youtube);
    const query = '?rel=0&showinfo=0&autoplay=1';
    const iframeSrc = `https://www.youtube.com/embed/${id}${query}`;

    video.addEventListener('click', () => {
      const iframe = createIframe(iframeSrc);
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
      .forEach((video) => {
        setupVideo(video);
      });
  };

  setupVideos();
})();
