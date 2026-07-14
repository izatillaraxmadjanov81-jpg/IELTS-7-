const loading = document.getElementById("loading");
const warning = document.getElementById("warning");
const intro = document.getElementById("intro");
const database = document.getElementById("database");

setTimeout(() => {

    loading.classList.add("hidden");
    warning.classList.remove("hidden");

    warning.scrollIntoView({
        behavior:"smooth"
    });

}, 3000);

document.getElementById("continueBtn").onclick = () => {

    warning.classList.add("hidden");
    intro.classList.remove("hidden");

    setTimeout(() => {

        intro.scrollIntoView({
            behavior:"smooth"
        });

    },100);

};

document.getElementById("databaseBtn").onclick = () => {

    intro.classList.add("hidden");
    database.classList.remove("hidden");

    setTimeout(() => {

        database.scrollIntoView({
            behavior:"smooth"
        });

    },100);

};

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const fontSize = 14;

const columns = canvas.width / fontSize;

const drops = [];

for(let i=0;i<columns;i++){
    drops[i]=1;
}

function drawMatrix(){

    ctx.fillStyle="rgba(0,0,0,0.08)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#00ff00";
    ctx.font=fontSize+"px monospace";

    for(let i=0;i<drops.length;i++){

        const text =
        chars[Math.floor(Math.random()*chars.length)];

        ctx.fillText(
            text,
            i*fontSize,
            drops[i]*fontSize
        );

        if(
            drops[i]*fontSize >
            canvas.height &&
            Math.random()>0.975
        ){
            drops[i]=0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix,35);

function showVideos(person){

    const groups =
    document.querySelectorAll(".video-group");

    groups.forEach(group => {

        const videos =
        group.querySelectorAll("video");

        videos.forEach(video => {

            video.pause();

            video.currentTime = 0;

        });

        group.style.display = "none";

    });

    document.getElementById(person)
    .style.display = "block";

}

document
.querySelectorAll(".video-group video")
.forEach(video => {

    video.addEventListener("play", () => {

        document
        .querySelectorAll(".video-group video")
        .forEach(otherVideo => {

            if(otherVideo !== video){

                otherVideo.pause();

            }

        });

    });

});