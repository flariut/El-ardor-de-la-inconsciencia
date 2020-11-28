"use strict";

const audio = document.getElementById("audio");
const video = document.getElementById("video");
const textito = document.getElementById("textito");


async function leerTxt() {
    try {
        const response = await fetch("textitou.txt");
        const texto = await response.text();
        for(let i in texto) {
            setTimeout(() => textito.append(texto[i]), 10*i);
        }
    } catch (error) {
        console.log(error);
    }
}

function playAudio() {
    audio.play();
    video.src = "3.mp4";
    leerTxt();
    document.body.style.minHeight = "150vh";
}
