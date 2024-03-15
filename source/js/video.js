// script взят с https://github.com/pepelsbey/playground/tree/main/12

const findAllVideos = () => {
  const videos = document.querySelectorAll('[data-video]');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
};

function setupVideo(video) {
  const link = document.querySelector('[data-video-link]');
  const media = document.querySelector('[data-video-media]');
  const button = document.querySelector('[data-video-button]');
  const id = parseMediaURL(media);

  video.addEventListener('click', () => {
    const iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('is-active');
}

function parseMediaURL(media) {
  const regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  const url = media.src;
  const match = url.match(regexp);

  return match[1];
}

function createIframe(id) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  const query = '?rel=0&showinfo=0&autoplay=1';

  return `https://www.youtube.com/embed/${ id }${query}`;
}

findAllVideos();
