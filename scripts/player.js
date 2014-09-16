// I am not a js developer. These folks might be:
// http://www.html5rocks.com/en/tutorials/file/dndfiles/
// http://stackoverflow.com/a/9349984

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  var files = evt.dataTransfer.files; // FileList object.
  var url = URL.createObjectURL(files[0]);

  var container = document.getElementById("outer");
  var videoPlayer = document.getElementById("player");

  container.style.display = "none";
  videoPlayer.style.display = "";
  videoPlayer.src = url;
}

function handleKeys(e) {
  var player = document.getElementById("player");

  if ( e.keyCode == 32 ) { // spacebar
    if ( player.paused ) {
      player.play();
    } else {
      player.pause();
    }
  }

  if ( e.keyCode == 102 || e.keyCode == 70 ) { // f
    if (player.webkitRequestFullscreen) {
      if (document.webkitIsFullScreen) {
        document.webkitCancelFullScreen();
      } else {
        player.webkitRequestFullscreen();
      }
    }
  }
}

document.onkeypress = handleKeys;

window.addEventListener("dragover",function(e){
  e = e || event;
  e.preventDefault();
  handleDragOver(e);
},false);

window.addEventListener("drop",function(e){
  e = e || event;
  e.preventDefault();
  handleFileSelect(e);
},false);
