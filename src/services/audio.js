const playConsonant = filename => {
    let audio = new Audio(`${process.env.PUBLIC_URL}/audio/consonants/${filename}.ogg`);
    audio.play();
}

const playVowel = filename => {
    let audio = new Audio(`${process.env.PUBLIC_URL}/audio/vowels/${filename}.ogg`);
    audio.play();
}

export default {
    playConsonant,
    playVowel,
}