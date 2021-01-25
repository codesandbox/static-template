window.publisherConfig = {
  protocol: "wss",
  port: 443,
  host: "test-media-stream.syminar.com",
  app: "live",
  streamName: "syminar-test-delight-vr",
  rtcConfiguration: {
    iceServers: [{ urls: "stun:stun2.l.google.com:19302" }],
    iceCandidatePoolSize: 2,
    bundlePolicy: "max-bundle"
  },
  streamMode: "live",
  mediaElementId: "red5pro-publisher",
  bandwidth: {
    audio: 56,
    video: 512
  },
  mediaConstraints: {
    audio: true,
    video: {
      width: {
        exact: 640
      },
      height: {
        exact: 480
      },
      frameRate: {
        min: 8,
        max: 24
      }
    }
  }
};

window.subscriberConfig = {
  protocol: "wss",
  port: 443,
  host: "test-media-stream.syminar.com",
  app: "live",
  streamName: "syminar-test-delight-vr",
  rtcConfiguration: {
    iceServers: [{ urls: "stun:stun2.l.google.com:19302" }],
    iceCandidatePoolSize: 2,
    bundlePolicy: "max-bundle"
  },
  subscriptionId: "mystream" + Math.floor(Math.random() * 0x10000).toString(16),
  videoEncoding: "NONE",
  audioEncoding: "NONE",
  mediaElementId: undefined
};
