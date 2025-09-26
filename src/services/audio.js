const playConsonant = (filename, language = 'default') => {
    let audio = new Audio(`/audio/${language}/consonants/${filename}.ogg`);
    audio.play();
}

const playVowel = (filename, language = 'default') => {
    let audio = new Audio(`/audio/${language}/vowels/${filename}.ogg`);
    audio.play();
}

export default {
    playConsonant,
    playVowel,
}

class AudioPlayer {
    constructor(manifest, audioBaseUrl = '/audio/') {
      this.manifest = manifest;
      this.baseUrl = audioBaseUrl;
      this.audio = new Audio(); // A single, reusable <audio> element
  
      // Event listener for playback finishing
      this.audio.addEventListener('ended', () => {
        console.log('Playback finished.');
      });
  
      // Event listener for errors
      this.audio.addEventListener('error', () => {
        console.error(`Error: Could not play audio from ${this.audio.src}`);
      });
    }
  
    /**
     * Factory method to create an instance by asynchronously loading the manifest.
     */
    static async create(manifestUrl) {
      try {
        const response = await fetch(manifestUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch manifest: ${response.statusText}`);
        }
        const manifest = await response.json();
        return new AudioPlayer(manifest);
      } catch (error) {
        console.error("Could not create audio player:", error);
        return null;
      }
    }
  
    // --- Public Methods ---
  
    play(baseName) {
      const fullFileName = this.manifest[baseName];
  
      if (!fullFileName) {
        console.error(`Error: Audio with base name '${baseName}' not found in manifest.`);
        return;
      }
  
      const audioUrl = this.baseUrl + fullFileName;
  
      // If it's a new file, update the source
      if (this.audio.src !== audioUrl) {
          this.stop();
          console.log(`Loading: ${audioUrl}`);
          this.audio.src = audioUrl;
          this.audio.load();
      }
      
      this.audio.play().catch(e => {
          console.error("Play failed. User may need to interact with the page first.", e);
      });
    }
  
    pause() {
      this.audio.pause();
    }
  
    stop() {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }