const socket = io();
const room = 'room1';

const localVideo = document.getElementById('local');
const remoteVideo = document.getElementById('remote');

let localStream;
let pc;

const config = {
  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
};

navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
  localVideo.srcObject = stream;
  localStream = stream;

  socket.emit('join', room);

  socket.on('ready', () => {
    pc = createPeer();
    localStream.getTracks().forEach(t => pc.addTrack(t, localStream));
    pc.createOffer().then(offer => {
      pc.setLocalDescription(offer);
      socket.emit('offer', { room, offer });
    });
  });

  socket.on('offer', offer => {
    pc = createPeer();
    localStream.getTracks().forEach(t => pc.addTrack(t, localStream));
    pc.setRemoteDescription(offer);
    pc.createAnswer().then(answer => {
      pc.setLocalDescription(answer);
      socket.emit('answer', { room, answer });
    });
  });

  socket.on('answer', answer => {
    pc.setRemoteDescription(answer);
  });

  socket.on('ice-candidate', candidate => {
    pc.addIceCandidate(new RTCIceCandidate(candidate));
  });
});

function createPeer() {
  const peer = new RTCPeerConnection(config);

  peer.ontrack = e => {
    remoteVideo.srcObject = e.streams[0];
  };

  peer.onicecandidate = e => {
    if (e.candidate) {
      socket.emit('ice-candidate', { room, candidate: e.candidate });
    }
  };

  return peer;
}
