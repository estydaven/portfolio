const player = document.querySelector('.player');
const playerCover = document.querySelector('.player__cover');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const toggle = player.querySelector('.toggle');
const play = player.querySelector('.player__btn');
const volume = player.querySelector('.vol');
const volumeBar = player.querySelector('.volume');
const timer = player.querySelector('.timer');
const timerEnd = player.querySelector('.timer-end');
const skipButtons = player.querySelectorAll('[data-skip]');
let currentVolume;
let mousedown = false;
let volumeReturn;

function togglePlay() {
    playerCover.classList.add('player__cover_none');
    if (video.paused) {
        video.play();
        play.classList.add('player__btn_none');
    } else {
        video.pause();
        play.classList.remove('player__btn_none');
    }

    setInterval(() => {
        if (video.currentTime < 10) {
            timer.innerText = `00:0${Math.floor(video.currentTime)}`;
            timerEnd.innerText = `00:${Math.floor(video.duration)}`;
        } else {
            timer.innerText = `00:${Math.floor(video.currentTime)}`;
            timerEnd.innerText = `00:${Math.floor(video.duration)}`;
        }       
    }, 1000);
}

function updateButton() {
    if (this.paused) {
        toggle.classList.add('pause');
    } else {
        toggle.classList.remove('pause');
    }    
}

function volumeBarVolume(e) {
    volumeBar.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${e.offsetX}%, #FFFFFF ${e.offsetX}%, #FFFFFF 100%)`;
    volumeReturn = e.offsetX / 100;
}

function volumeBarVolumeChange() {
    volumeBar.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${this.value * 100}%, #FFFFFF ${this.value * 100}%, #FFFFFF 100%)`;
}

function videoReturn() {
    video.currentTime = 0;
    playerCover.classList.remove('player__cover_none');
    play.classList.remove('player__btn_none');
}

function changeVolume(e) {
    currentVolume = video.volume;
    video.volume = e.target.value;
    if (video.volume === 0) {
        volume.classList.add('mute');
    } else {
        volume.classList.remove('mute');
    }
}

function volumeMute() {
    if (video.volume != 0) {
        currentVolume = video.volume
        video.volume = 0;
        volume.classList.toggle('mute');
        volumeBar.value = video.volume;
        volumeBar.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${volumeBar.value *100}%, #FFFFFF ${volumeBar.value *100}%, #FFFFFF 100%)`;
    } else if (video.volume === 0 && typeof volumeReturn == 'undefined') {
        video.volume = currentVolume;
        volumeBar.value = video.volume;
        volume.classList.toggle('mute');
        volumeBar.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${video.volume *100}%, #FFFFFF ${video.volume *100}%, #FFFFFF 100%)`;
    } else {
        video.volume = currentVolume;
        volumeBar.value = video.volume;
        volume.classList.toggle('mute');
        volumeBar.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${video.volume *100}%, #FFFFFF ${video.volume *100}%, #FFFFFF 100%)`;        
    }
}

function skip() {    
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.background = `linear-gradient(to right, #BDAE82 0%, #BDAE82 ${percent}%, #FFFFFF ${percent}%, #FFFFFF 100%)`;
    progress.value = percent;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('ended', function() {
    setTimeout(videoReturn, 1000);
});
play.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
skipButtons.forEach(button => button.addEventListener('click', skip));
volume.addEventListener('click', volumeMute);
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
volumeBar.addEventListener('change', changeVolume);
volumeBar.addEventListener('input', changeVolume);
volumeBar.addEventListener('touchmove', changeVolume);
volumeBar.addEventListener('pointerdown', volumeBarVolume);
volumeBar.addEventListener('change', volumeBarVolumeChange);
volumeBar.addEventListener('mousemove', volumeBarVolumeChange);
volumeBar.addEventListener('touchmove', volumeBarVolumeChange);

export {togglePlay, updateButton, volumeBarVolume, volumeBarVolumeChange, videoReturn, changeVolume, volumeMute, skip, handleProgress, scrub};