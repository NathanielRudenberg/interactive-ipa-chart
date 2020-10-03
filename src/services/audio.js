const playSound = filename => {
    console.log('service playing sound');
    // let audio = new Audio('https://upload.wikimedia.org/wikipedia/commons/5/5c/Voiced_velar_approximant.ogg');
    let audio = new Audio(process.env.PUBLIC_URL + '/audio/consonants/' + filename + '.ogg');
    audio.play();
}

export default {
    playSound,
}