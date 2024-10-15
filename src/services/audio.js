const playConsonant = filename => {
    let audio = new Audio(`/audio/consonants/${filename}.ogg`);
    audio.play();
}

const playVowel = filename => {
    let audio = new Audio(`/audio/vowels/${filename}.ogg`);
    audio.play();
}

export default {
    playConsonant,
    playVowel,
}