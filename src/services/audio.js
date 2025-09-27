class AudioPlayer {
    static instance = null;
    static instancePromise = null;

    constructor(manifest, audioBaseUrl = '/audio/') {
        this.manifest = manifest;
        this.baseUrl = audioBaseUrl;
        this.audio = new Audio();

        this.audio.addEventListener('ended', () => console.log('Playback finished.'));
        this.audio.addEventListener('error', () => console.error(`Error: Could not play audio from ${this.audio.src}`));
    }

    static async create(manifestUrl) {
        return fetch(manifestUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch manifest: ${response.statusText}`);
                }
                return response.json();
            })
            .then(manifest => new AudioPlayer(manifest));
    }

    play(language, baseName) {
        const languageAudio = this.manifest[language];
        if (!languageAudio) {
            console.error(`Error: Language '${language}' not found in manifest.`);
            return;
        }

        const fullFileName = languageAudio[baseName];
        if (!fullFileName) {
            console.error(`Error: Audio with name '${baseName}' not found for language '${language}'.`);
            return;
        }

        // Construct the full path
        const audioUrl = `${this.baseUrl}${language}/${fullFileName}`;

        if (this.audio.src !== audioUrl) {
            this.stop();
            console.log(`Loading: ${audioUrl}`);
            this.audio.src = audioUrl;
            this.audio.load();
        }

        this.audio.play().catch(e => console.error("Play failed.", e));
    }

    pause() {
        this.audio.pause();
    }

    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }

    static getInstance() {
        if (!AudioPlayer.instancePromise) {
            // If the creation promise doesn't exist, make one.
            AudioPlayer.instancePromise = this.create('../../public/audio/manifest.json')
                .then(player => {
                    if (!player) {
                        throw new Error("AudioPlayer creation failed.");
                    }
                    // Once created, store the actual instance
                    AudioPlayer.instance = player;
                    return player;
                })
                .catch(error => {
                    // Make sure future calls also fail if creation fails
                    AudioPlayer.instancePromise = null; 
                    throw error;
                });
        }
        // Always return the promise. Subsequent calls will get the same promise.
        return AudioPlayer.instancePromise;
    }
}

const play = async(filename, language = 'default') => {
    try {
        const player = await AudioPlayer.getInstance();
        console.log("Player object", player);
        player.play(language, filename);
    } catch (error) {
        console.error("Failed to get audio player", error);
    }
}

export default {
    play
}