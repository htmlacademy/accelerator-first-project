(function () {
  const YTIMG_REGEXP = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;

  const parseMediaURL = (media) => {
    const url = media.src;
    const match = url.match(YTIMG_REGEXP);
    return match[1];
  };

  const generateURL = (id) => {
    const query = '?rel=0&showinfo=0&autoplay=1';

    return `https://www.youtube.com/embed/${id}${query}`;
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
