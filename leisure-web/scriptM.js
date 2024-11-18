// Armazenando as músicas e seus caminhos
const songs = {
    gotitbad: 'got_it_bad.mp3',
    nobody: 'nobody.mp3',
    alloveryou: 'all_over_you.mp3',
    falling: 'falling.mp3',
    knowyoubetter: 'know_you_better.mp3',
    man: 'man.mp3',
    money: 'money.mp3',
    slippingaway: 'slipping_away.mp3',
    sparkitup: 'spark_it_up.mp3',
    easywayout: 'easy_way_out.mp3'
};

let currentSong = '';  // Música atual tocando
let isPlaying = false;  // Estado da música (tocando ou pausada)
let songList = Object.keys(songs);

// Função para tocar uma música
function playSong(songId) {
    const audioPlayer = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");

    audioSource.src = songs[songId];
    audioPlayer.load();
    audioPlayer.play();

    currentSong = songId;
    isPlaying = true;

    // Atualizando o botão de play/pause
    updatePlayPauseButton();
}

// Função para pausar ou retomar a música
function togglePlayPause() {
    const audioPlayer = document.getElementById("audioPlayer");

    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }

    isPlaying = !isPlaying;
    updatePlayPauseButton();
}

// Função para ir para a próxima música
function nextSong() {
    let currentIndex = songList.indexOf(currentSong);
    currentIndex = (currentIndex + 1) % songList.length; // Avança para a próxima música, e volta ao começo
    playSong(songList[currentIndex]);
}

// Função para voltar para a música anterior
function prevSong() {
    let currentIndex = songList.indexOf(currentSong);
    currentIndex = (currentIndex - 1 + songList.length) % songList.length; // Volta para a música anterior
    playSong(songList[currentIndex]);
}

// Função para atualizar o botão de play/pausar
function updatePlayPauseButton() {
    const playPauseButton = document.getElementById("playPauseButton");

    if (isPlaying) {
        playPauseButton.innerHTML = '&#10074;&#10074;'; // Pausar
    } else {
        playPauseButton.innerHTML = '&#9658;'; // Play
    }
}
