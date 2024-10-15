const playConsonant = filename => {
    let audio = new Audio(`/audio/default/consonants/${filename}.ogg`);
    audio.play();
}

const playVowel = filename => {
    let audio = new Audio(`/audio/default/vowels/${filename}.ogg`);
    audio.play();
}

export default {
    playConsonant,
    playVowel,
}