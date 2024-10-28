const playConsonant = (filename, language = 'default') => {
    let audio = new Audio(`/audio/default/consonants/${filename}.ogg`);
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