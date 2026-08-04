/* =====================================================
   LOADER
===================================================== */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1500);

});

/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(0,0,0,.95)";

        navbar.style.backdropFilter =
            "blur(15px)";

        navbar.style.padding =
            "16px 8%";

    } else {

        navbar.style.background =
            "linear-gradient(to bottom, rgba(0,0,0,.8), transparent)";

        navbar.style.backdropFilter =
            "blur(0px)";

        navbar.style.padding =
            "20px 8%";

    }

});

/* =====================================================
   BACKGROUND MUSIC
===================================================== */

const music =
    document.getElementById("bgMusic");

let musicStarted = false;

function startMusic() {

    if (musicStarted) return;

    music.volume = 0.5;

    music.play().catch(() => {});

    musicStarted = true;

}

document.addEventListener(
    "click",
    startMusic,
    { once: true }
);

/* =====================================================
   HERO BUTTONS
===================================================== */

const playBtn =
    document.getElementById("playBtn");

const infoBtn =
    document.getElementById("infoBtn");

playBtn.addEventListener("click", () => {

    startMusic();

    document
        .getElementById("movies")
        .scrollIntoView({

            behavior: "smooth"

        });

});

infoBtn.addEventListener("click", () => {

    document
        .getElementById("letter")
        .scrollIntoView({

            behavior: "smooth"

        });

});

/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

document
.querySelectorAll('nav a')
.forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target =
            document.querySelector(
                link.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* =====================================================
   BUTTON HOVER SOUND (OPTIONAL)
===================================================== */

const buttons =
    document.querySelectorAll("button");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
            "translateY(-3px) scale(1.02)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
            "";

    });

});

/* =====================================================
   PAGE TITLE EFFECT
===================================================== */

const titles = [

    "Netflix Premium ❤️",

    "Watching Together 🎬",

    "Our Love Story ❤️",

    "Netflix Romantic Edition"

];

let titleIndex = 0;

setInterval(() => {

    document.title = titles[titleIndex];

    titleIndex++;

    if (titleIndex >= titles.length) {

        titleIndex = 0;

    }

}, 3000);

/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(

    ".fade-up, .zoom-in"

);

const revealObserver = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:0.15

}

);

revealElements.forEach(element=>{

    revealObserver.observe(element);

});

/* =====================================================
   AUTO ADD ANIMATION
===================================================== */

const sections = document.querySelectorAll(

"section"

);

sections.forEach(section=>{

    section.classList.add("fade-up");

    revealObserver.observe(section);

});

/* =====================================================
   HERO PARALLAX
===================================================== */

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    const scroll = window.pageYOffset;

    hero.style.backgroundPositionY =
        scroll * 0.45 + "px";

});

/* =====================================================
   FLOATING GRADIENT
===================================================== */

const glow =
document.querySelector(".floating-gradient");

window.addEventListener("mousemove",(e)=>{

    const x =
    (window.innerWidth/2-e.clientX)/35;

    const y =
    (window.innerHeight/2-e.clientY)/35;

    glow.style.transform=
    `translate(${x}px,${y}px)`;

});

/* =====================================================
   BUTTON RIPPLE EFFECT
===================================================== */

document
.querySelectorAll("button")
.forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple =
document.createElement("span");

const rect =
button.getBoundingClientRect();

const size =
Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=
e.clientX-rect.left-size/2+"px";

ripple.style.top=
e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});

/* =====================================================
   CARD STAGGER ANIMATION
===================================================== */

const cards =
document.querySelectorAll(

".movie-card"

);

const cardObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const index=
[...cards].indexOf(entry.target);

setTimeout(()=>{

entry.target.classList.add("show");

},index*100);

}

});

},

{

threshold:.2

}

);

cards.forEach(card=>{

card.classList.add("zoom-in");

cardObserver.observe(card);

});

/* =====================================================
   FEATURED CARD EFFECT
===================================================== */

const featured =
document.querySelector(".featured-card");

featured.addEventListener("mousemove",(e)=>{

const rect=
featured.getBoundingClientRect();

const x=
e.clientX-rect.left;

const y=
e.clientY-rect.top;

const rotateY=
(x/rect.width-.5)*12;

const rotateX=
(y/rect.height-.5)*-12;

featured.style.transform=

`perspective(1200px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.02)`;

});

featured.addEventListener("mouseleave",()=>{

featured.style.transform=
"perspective(1200px) rotateX(0) rotateY(0)";

});

/* =====================================================
   SCROLL PROGRESS BAR
===================================================== */

const progress =
document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-
window.innerHeight;

const percent=

(window.scrollY/total)*100;

progress.style.width=
percent+"%";

});

/* =====================================================
   RELATIONSHIP DAY COUNTER
===================================================== */

/*
   Ganti tanggal di bawah sesuai
   tanggal jadian kalian.
   Format: Tahun, Bulan-1, Tanggal
*/

const loveDate = new Date(2026, 03, 03);

const dayCounter =
document.getElementById("dayCounter");

function updateDayCounter(){

    const today = new Date();

    const diff =
    today.getTime() - loveDate.getTime();

    const days =
    Math.floor(diff / (1000 * 60 * 60 * 24));

    if(dayCounter){

        dayCounter.textContent =
        days.toLocaleString();

    }

}

updateDayCounter();

setInterval(updateDayCounter,60000);

/* =====================================================
   HOURS TOGETHER
===================================================== */

const hourCounter =
document.getElementById("hoursTogether");

function updateHoursTogether(){

    const now = new Date();

    const diff =
    now - loveDate;

    const hours =
    Math.floor(diff / (1000 * 60 * 60));

    if(hourCounter){

        hourCounter.textContent =
        hours.toLocaleString() + " Hours";

    }

}

updateHoursTogether();

setInterval(updateHoursTogether,60000);

/* =====================================================
   COUNT UP ANIMATION
===================================================== */

function animateValue(

element,
start,
end,
duration

){

    if(!element) return;

    let startTime = null;

    function animation(currentTime){

        if(!startTime)
        startTime = currentTime;

        const progress = Math.min(

            (currentTime-startTime)/
            duration,

            1

        );

        const value = Math.floor(

            progress *
            (end-start) +
            start

        );

        element.textContent =
        value.toLocaleString();

        if(progress < 1){

            requestAnimationFrame(animation);

        }

    }

    requestAnimationFrame(animation);

}

/* =====================================================
   STATS ANIMATION
===================================================== */

const statNumbers =
document.querySelectorAll(".stat-card h3");

const statObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const text =
entry.target.textContent;

if(text.includes("%")){

animateValue(
entry.target,
0,
100,
1800
);

setTimeout(()=>{

entry.target.textContent=
"100%";

},1800);

}

}

});

},

{

threshold:.4

}

);

statNumbers.forEach(stat=>{

statObserver.observe(stat);

});

/* =====================================================
   MATCH COUNTER
===================================================== */

const matchTitle =
document.querySelector(".match-card h2");

if(matchTitle){

const matchObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

let value = 0;

const interval =
setInterval(()=>{

value++;

matchTitle.textContent =
value + "% Compatibility";

if(value>=99){

clearInterval(interval);

}

},20);

}

});

},

{

threshold:.4

}

);

matchObserver.observe(matchTitle);

}

/* =====================================================
   WATCH CARD POP EFFECT
===================================================== */

const watchCards =
document.querySelectorAll(".watch-card");

watchCards.forEach((card,index)=>{

card.style.transitionDelay =
(index*0.12)+"s";

});

/* =====================================================
   LIVE CLOCK
===================================================== */

const footer =
document.querySelector(".footer");

const liveClock =
document.createElement("div");

liveClock.style.marginTop="20px";
liveClock.style.color="#888";
liveClock.style.fontSize="14px";

footer.appendChild(liveClock);

function updateClock(){

const now =
new Date();

liveClock.textContent =

"Watching since " +

now.toLocaleTimeString(
"id-ID"
);

}

updateClock();

setInterval(updateClock,1000);

/* =====================================================
   NETFLIX HORIZONTAL SLIDER
===================================================== */

const movieRows =
document.querySelectorAll(".movie-row");

movieRows.forEach((row)=>{

let isDown = false;

let startX;

let scrollLeft;

row.addEventListener("mousedown",(e)=>{

isDown = true;

row.classList.add("dragging");

startX =
e.pageX-row.offsetLeft;

scrollLeft =
row.scrollLeft;

});

row.addEventListener("mouseleave",()=>{

isDown = false;

row.classList.remove("dragging");

});

row.addEventListener("mouseup",()=>{

isDown = false;

row.classList.remove("dragging");

});

row.addEventListener("mousemove",(e)=>{

if(!isDown) return;

e.preventDefault();

const x =
e.pageX-row.offsetLeft;

const walk =
(x-startX)*2;

row.scrollLeft =
scrollLeft-walk;

});

});

/* =====================================================
   TOUCH SUPPORT
===================================================== */

movieRows.forEach((row)=>{

let startTouch = 0;

let startScroll = 0;

row.addEventListener("touchstart",(e)=>{

startTouch =
e.touches[0].clientX;

startScroll =
row.scrollLeft;

});

row.addEventListener("touchmove",(e)=>{

const current =
e.touches[0].clientX;

const move =
(current-startTouch)*2;

row.scrollLeft =
startScroll-move;

});

});

/* =====================================================
   MOUSE WHEEL
===================================================== */

movieRows.forEach((row)=>{

row.addEventListener("wheel",(e)=>{

e.preventDefault();

row.scrollLeft += e.deltaY;

});

});

/* =====================================================
   MOVIE CARD HOVER
===================================================== */

const movieCards =
document.querySelectorAll(".movie-card");

movieCards.forEach((card)=>{

card.addEventListener("mouseenter",()=>{

card.style.zIndex="99";

});

card.addEventListener("mouseleave",()=>{

card.style.zIndex="1";

});

});

/* =====================================================
   CARD CLICK EFFECT
===================================================== */

movieCards.forEach((card)=>{

card.addEventListener("click",()=>{

card.animate(

[

{

transform:
"scale(1)"

},

{

transform:
"scale(.95)"

},

{

transform:
"scale(1)"

}

],

{

duration:300

}

);

});

});

/* =====================================================
   FEATURED BUTTON
===================================================== */

const watchBtn =
document.querySelector(".watch-btn");

if(watchBtn){

watchBtn.addEventListener("click",()=>{

startMusic();

watchBtn.innerHTML=

'<i class="fa-solid fa-circle-check"></i> Playing';

setTimeout(()=>{

watchBtn.innerHTML=

'<i class="fa-solid fa-play"></i> Watch Now';

},2500);

});

}

/* =====================================================
   RANDOM BADGE
===================================================== */

const badges=[

"TOP 10",

"NEW",

"TRENDING",

"POPULAR",

"NETFLIX",

"❤️ FOR YOU"

];

movieCards.forEach((card)=>{

const badge=

document.createElement("span");

badge.className="top-badge";

badge.textContent=

badges[
Math.floor(
Math.random()*badges.length
)
];

card.appendChild(badge);

});

/* =====================================================
   RANDOM QUALITY
===================================================== */

const qualities=[

"HD",

"FULL HD",

"4K",

"HDR",

"DOLBY"

];

movieCards.forEach((card)=>{

const quality=

document.createElement("span");

quality.className="quality";

quality.textContent=

qualities[
Math.floor(
Math.random()*qualities.length
)
];

card.appendChild(quality);

});

/* =====================================================
   CONTINUE WATCHING EFFECT
===================================================== */

movieCards.forEach((card)=>{

const progress=

document.createElement("div");

progress.style.position="absolute";

progress.style.left="0";

progress.style.bottom="0";

progress.style.height="4px";

progress.style.width=

(Math.random()*100)+"%";

progress.style.background="#E50914";

progress.style.zIndex="5";

card.appendChild(progress);

});

/* =====================================================
   AUTO SCROLL MOVIE ROW
===================================================== */

const rows = document.querySelectorAll(".movie-row");

rows.forEach((row) => {

    let autoScroll = setInterval(() => {

        row.scrollLeft += 1.2;

        if (
            row.scrollLeft >=
            row.scrollWidth - row.clientWidth
        ) {

            row.scrollLeft = 0;

        }

    }, 20);

    row.addEventListener("mouseenter", () => {

        clearInterval(autoScroll);

    });

    row.addEventListener("mouseleave", () => {

        autoScroll = setInterval(() => {

            row.scrollLeft += 1.2;

            if (
                row.scrollLeft >=
                row.scrollWidth - row.clientWidth
            ) {

                row.scrollLeft = 0;

            }

        }, 20);

    });

});

/* =====================================================
   FLOATING PARTICLES
===================================================== */

const particleContainer = document.createElement("div");

particleContainer.style.position = "fixed";
particleContainer.style.left = "0";
particleContainer.style.top = "0";
particleContainer.style.width = "100%";
particleContainer.style.height = "100%";
particleContainer.style.pointerEvents = "none";
particleContainer.style.zIndex = "-1";

document.body.appendChild(particleContainer);

function createParticle() {

    const particle = document.createElement("span");

    particle.style.position = "absolute";
    particle.style.width = "4px";
    particle.style.height = "4px";
    particle.style.borderRadius = "50%";
    particle.style.background = "rgba(229,9,20,.7)";

    particle.style.left =
        Math.random() * window.innerWidth + "px";

    particle.style.top =
        window.innerHeight + "px";

    particle.style.opacity = Math.random();

    particleContainer.appendChild(particle);

    const duration = 5000 + Math.random() * 3000;

    particle.animate(

        [

            {
                transform: "translateY(0)",
                opacity: 1
            },

            {
                transform: `translateY(-${window.innerHeight + 150}px)`,
                opacity: 0
            }

        ],

        {

            duration: duration,
            easing: "linear"

        }

    );

    setTimeout(() => {

        particle.remove();

    }, duration);

}

setInterval(createParticle, 250);

/* =====================================================
   HERO PARALLAX SCALE
===================================================== */

window.addEventListener("scroll", () => {

    const value = window.scrollY * 0.0004;

    hero.style.transform =
        `scale(${1 + value})`;

});

/* =====================================================
   KEYBOARD SHORTCUT
===================================================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowRight") {

        rows.forEach((row) => {

            row.scrollLeft += 350;

        });

    }

    if (e.key === "ArrowLeft") {

        rows.forEach((row) => {

            row.scrollLeft -= 350;

        });

    }

});

/* =====================================================
   BACK TO TOP BUTTON
===================================================== */

const topButton = document.createElement("button");

topButton.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topButton.id = "backTop";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#E50914";
topButton.style.color = "#fff";
topButton.style.fontSize = "18px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* =====================================================
   RANDOM NETFLIX QUOTES
===================================================== */

const quotes = [

    "Continue Watching ❤️",

    "Our Love Never Ends.",

    "Best Romance Ever.",

    "Only On Netflix Premium.",

    "Episode Baru Setiap Hari."

];

setInterval(() => {

    const random =
        quotes[
            Math.floor(Math.random() * quotes.length)
        ];

    const ending =
        document.querySelector(".ending p");

    if (ending) {

        ending.textContent = random;

    }

}, 4000);

/* =====================================================
   PAGE VISIBILITY
===================================================== */

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        document.title = "Come Back ❤️";

    } else {

        document.title = "Netflix Premium ❤️";

    }

});

/* =====================================================
   FINAL INITIALIZATION
===================================================== */

console.log("====================================");

console.log("Netflix Premium Romantic Edition");

console.log("Website Loaded Successfully ❤️");

console.log("====================================");
