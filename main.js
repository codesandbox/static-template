function publish() {
  var publisher = new window.red5prosdk.RTCPublisher();
  window.red5ProPublisher = publisher;

  return publisher
    .init(window.publisherConfig)
    .then(() => publisher.publish())
    .catch((error) => console.error(error));
}

function unPublish() {
  window.red5ProPublisher.unpublish().then(() => {
    const stream = window.red5ProPublisher.getMediaStream();
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
  });
}

function subscribe() {
  createPlayer();

  var subscriber = new window.red5prosdk.RTCSubscriber();

  // window.red5ProSubscriber = subscriber;

  subscriber.on(window.red5prosdk.SubscriberEventTypes.PLAY_UNPUBLISH, () => {
    subscriber.off("*", () => {});
    subscriber.unsubscribe();
  });

  subscriber
    .init(window.subscriberConfig)
    .then((subscriber) => subscriber.subscribe())
    .then((subscriber) => {
      const mediaStream = subscriber.getMediaStream();
      if (mediaStream) {
        updateMediaStream(mediaStream);
      }
    })
    .catch((error) => console.error(error));
}

function createPlayer() {
  const container = document.getElementById("player-container");
  const player = document.createElement("dl8-live-video");
  const source = document.createElement("source");

  player.setAttribute("format", "MONO_360");

  player.appendChild(source);

  container.appendChild(player);
}

function updateMediaStream(mediaStream) {
  const player = document.getElementById("player-container");

  console.log(" update media stream");
  if (mediaStream && player) {
    const observer = new MutationObserver(() => {
      // We need waiting for the video tag is ready
      setTimeout(() => {
        const video = player.querySelector("video");
        if (video && !video.srcObject) {
          video.srcObject = mediaStream;
          video.play();
          observer.disconnect();
        }
      });
    });
    observer.observe(player, { childList: true });
  }
}

(() => {
  document.getElementById("start").addEventListener("click", () => {
    publish().then(subscribe);
  });
  document.getElementById("stop").addEventListener("click", unPublish);
})();
