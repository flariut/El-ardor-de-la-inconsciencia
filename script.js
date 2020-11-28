"use strict";

const audio = document.getElementById("audio");
const video = document.getElementById("video");
const textito = document.getElementById("textito");


async function leerTxt() {
    try {
        const response = await fetch("textitou.txt");
        const texto = await response.text();
        let t = 0;
        for(let i in texto) {
            t += Math.round(Math.random() * 100 + 10);
            setTimeout(() => textito.append(texto[i]), t);
        }
    } catch (error) {
        console.log(error);
    }
}

function playAudio() {
    audio.play();
    video.src = "3.mp4";
    leerTxt();
    // document.body.style.minHeight = "150vh";
    document.body.style.paddingBottom = "50vh";
}
