(function findVideo() {
  const YTIMG_REGEXP = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;

  const setupVideo = (video) => {
    const link = video.querySelector('.video__link');
    const youtube = video.querySelector('.video__media');
    const button = video.querySelector('.video__button');

    const parseMediaURL = (media) => {
      const url = media.src;
      const match = url.match(YTIMG_REGEXP);

      return match[1];
    };


    const createIframe = () => {
      const id = parseMediaURL(youtube);
      const iframe = document.createElement('iframe');
      const query = '?rel=0&showinfo=0&autoplay=1';

      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('allow', 'autoplay');
      iframe.setAttribute('src', `https://www.youtube.com/embed/${id}${query}`);
      iframe.classList.add('video__media');

      return iframe;
    };


    video.addEventListener('click', () => {
      const iframe = createIframe();

      link.remove();
      button.remove();
      video.appendChild(iframe);
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
