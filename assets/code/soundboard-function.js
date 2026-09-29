// Funktion zum Abspielen der Sounds

console.log("Soundboard JavaScript ohne jegliche Probleme geldaden.");


function playSound(id) {
  const audio = document.getElementById(id);
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(error => {
      console.log("Fehler beim Abspielen:", error);
    });
  } else {
    console.log("Audio-Element nicht gefunden:", id);
  }
}

// Funktion zum Stoppen aller Sounds
function stopAllSounds() {
  const allAudios = document.querySelectorAll('audio');
  allAudios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

// Taste Q zum Stoppen aller Sounds
document.addEventListener('keydown', function(event) {
  if (event.key === 'q' || event.key === 'Q') {
    stopAllSounds();
  }
});
