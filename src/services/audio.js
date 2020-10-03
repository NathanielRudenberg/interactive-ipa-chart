const playSound = filename => {
    let audio = new Audio(process.env.PUBLIC_URL + '/audio/consonants/' + filename + '.ogg');
    audio.play();
}

export default {
    playSound,
}