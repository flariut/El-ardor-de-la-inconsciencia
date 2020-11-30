"use strict";

const audio = document.getElementById("audio");
const video = document.getElementById("video");
const textito = document.getElementById("textito");

let dur;
audio.src = "media/fuego.mp3";
audio.onloadedmetadata = function () {
    dur = audio.duration;
};

video.onended = function() {
    if(!video.loop) {
        video.src = "media/2.mp4";
        video.loop = true;
        video.style.cursor = "pointer";
        video.addEventListener("click", playAudio);
    }
};

async function leerTxt() {
    try {
        const response = await fetch("texto.txt");
        const texto = await response.text();
        let t = 0;
        for (let i in texto) {
            t += Math.round(Math.random() * 100 + 10);
            setTimeout(() => textito.append(texto[i]), t);
        }
    } catch (error) {
        console.log(error);
    }
}

function playAudio() {
    audio.currentTime = Math.round(Math.random() * dur);
    audio.play();
    video.src = "media/3.mp4";
    leerTxt();
    document.body.style.paddingBottom = "50vh";
    video.removeEventListener("click", playAudio);
    video.style.cursor = "default";
}