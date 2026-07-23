document.addEventListener("DOMContentLoaded", () => {

    /* ============================================
       ELEMENTS
    ============================================ */

    const loader = document.getElementById("loader");

    const music = document.getElementById("music");

    const musicButton = document.getElementById("musicButton");

    const scenes = document.querySelectorAll(".scene");

    const startBtn = document.getElementById("startBtn");

    const readLetter = document.getElementById("readLetter");

    const letterOverlay = document.getElementById("letterOverlay");

    const closeLetter = document.getElementById("closeLetter");

    const continueJourney = document.getElementById("continueJourney");

    const letterBody = document.getElementById("letterBody");

    /* ============================================
       LETTER
    ============================================ */

    const letter = `Happiest Birthday, Arsh! ❤️

To the most amazing, kind, and pure-hearted person.

To the person who always makes me smile.

To the person who listens to all my nonsense.

Thank you for being exactly who you are.

May Allah bless you with happiness, success, peace, and endless smiles.

May every dream in your heart come true.

Ameen.

Enjoy this little journey made especially for you. ❤️`;

    /* ============================================
       LOADER
    ============================================ */

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 2500);

    /* ============================================
       SCENES
    ============================================ */

    function showScene(id){

        scenes.forEach(scene=>{

            scene.classList.remove("active");

        });

        document.getElementById(id).classList.add("active");

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

    /* ============================================
       MUSIC
    ============================================ */

    let playing = false;

// Start music when the user clicks "Begin"
startBtn.addEventListener("click", () => {

    if (!playing) {
        music.play().catch(() => {});
        playing = true;
        musicButton.textContent = "🔊";
    }

    showScene("birthday");
});

// Music button
musicButton.addEventListener("click", () => {

    if (playing) {

        music.pause();
        playing = false;
        musicButton.textContent = "🎵";

    } else {

        music.play().catch(() => {});
        playing = true;
        musicButton.textContent = "🔊";

    }

});
    /* ============================================
       START
    ============================================ */

    startBtn.addEventListener("click",()=>{

        showScene("birthday");

    });

    /* ============================================
       TYPEWRITER
    ============================================ */

    function sleep(ms){

        return new Promise(resolve=>setTimeout(resolve,ms));

    }

    async function typeWriter(element,text,speed=25){

        element.textContent="";

        for(const ch of text){

            element.textContent+=ch;

            await sleep(speed);

        }

    }
        /* ============================================
       LETTER POPUP
    ============================================ */

    readLetter.addEventListener("click", async () => {

        letterOverlay.classList.remove("hidden");

        letterBody.textContent = "";

        continueJourney.classList.add("hidden");

        await typeWriter(letterBody, letter, 25);

        continueJourney.classList.remove("hidden");

    });

    closeLetter.addEventListener("click", () => {

        letterOverlay.classList.add("hidden");

    });

    continueJourney.addEventListener("click", () => {

        letterOverlay.classList.add("hidden");

        showScene("memories");

    });

    /* ============================================
       MEMORIES
    ============================================ */

    const memoryImage = document.getElementById("memoryImage");

    const memoryTitle = document.getElementById("memoryTitle");

    const memoryCaption = document.getElementById("memoryCaption");

    const memoryCounter = document.getElementById("memoryCounter");

    const prevMemory = document.getElementById("prevMemory");

    const nextMemory = document.getElementById("nextMemory");

    const toStars = document.getElementById("toStars");

    const memories = [

        {
            image:"assets/images/8.jpg",
            title:"A Beautiful Beginning ❤️",
            caption:"Every beautiful journey begins with one unforgettable moment."
        },

        {
            image:"assets/images/2.jpg",
            title:"Smiles 😊",
            caption:"Your smile can brighten even the darkest day."
        },

        {
            image:"assets/images/3.jpg",
            title:"Special Moments ✨",
            caption:"Some memories stay in our hearts forever."
        },

        {
            image:"assets/images/4.jpg",
            title:"Laughter",
            caption:"The best moments are the ones filled with genuine laughter."
        },

        {
            image:"assets/images/5.jpg",
            title:"Precious Time 💙",
            caption:"Time spent with wonderful people becomes priceless."
        },

        {
            image:"assets/images/6.jpg",
            title:"Happiness 🌸",
            caption:"May your life always be filled with happiness and peace."
        },

        {
            image:"assets/images/7.jpg",
            title:"Dreams ⭐",
            caption:"Never stop believing in yourself and your dreams."
        },

        {
            image:"assets/images/10.jpg",
            title:"Forever Grateful ❤️",
            caption:"Thank you for simply being yourself."
        },

        {
            image:"assets/images/9.jpg",
            title:"Happy Birthday 🎂",
            caption:"May Allah bless you with endless happiness. Ameen."
        }

    ];

    let currentMemory = 0;

    function loadMemory() {

        const memory = memories[currentMemory];

        memoryImage.src = memory.image;

        memoryTitle.textContent = memory.title;

        memoryCaption.textContent = memory.caption;

        memoryCounter.textContent =
            `${currentMemory + 1} / ${memories.length}`;

    }

    nextMemory.addEventListener("click", () => {

        currentMemory++;

        if(currentMemory >= memories.length){

            currentMemory = 0;

        }

        loadMemory();

    });

    prevMemory.addEventListener("click", () => {

        currentMemory--;

        if(currentMemory < 0){

            currentMemory = memories.length - 1;

        }

        loadMemory();

    });

    loadMemory();

    toStars.addEventListener("click", () => {

        showScene("starsScene");

    });
        /* ============================================
       CONSTELLATION
    ============================================ */

    const stars = document.querySelectorAll(".star");
    const wishBox = document.getElementById("wishBox");
    const toGift = document.getElementById("toGift");

    const wishes = [
        "⭐ May Allah bless you with endless happiness.",
        "🌸 May your smile never fade.",
        "💙 May every dream of yours come true.",
        "✨ May success follow you wherever you go.",
        "🤍 May peace always stay in your heart.",
        "🌙 May Allah protect you every single day.",
        "🎂 Happy Birthday, Arsh! Stay amazing always. ❤️"
    ];

    let openedStars = 0;

    stars.forEach((star, index) => {

        star.addEventListener("click", () => {

            if (star.classList.contains("active")) return;

            star.classList.add("active");

            wishBox.textContent = wishes[index];

            openedStars++;

            if (openedStars === stars.length) {

                toGift.classList.remove("hidden");

            }

        });

    });

    toGift.addEventListener("click", () => {

        showScene("giftScene");

    });

    /* ============================================
       GIFT
    ============================================ */

    const giftBox = document.getElementById("giftBox");
    const giftMessage = document.getElementById("giftMessage");
    const toFinale = document.getElementById("toFinale");

    giftBox.addEventListener("click", () => {

        giftBox.style.transform = "scale(1.25) rotate(12deg)";
        giftBox.textContent = "💝";

        giftMessage.classList.remove("hidden");
        toFinale.classList.remove("hidden");

    });

    toFinale.addEventListener("click", () => {

        showScene("finale");

        createHearts();

    });

    /* ============================================
       REPLAY
    ============================================ */

    const replay = document.getElementById("replay");

    replay.addEventListener("click", () => {

        currentMemory = 0;
        loadMemory();

        openedStars = 0;

        stars.forEach(star => {

            star.classList.remove("active");

        });

        wishBox.textContent = "✨ Tap a star to reveal your first wish.";

        giftMessage.classList.add("hidden");
        toFinale.classList.add("hidden");

        giftBox.textContent = "🎁";
        giftBox.style.transform = "";

        continueJourney.classList.add("hidden");
        letterOverlay.classList.add("hidden");

        showScene("intro");

    });

    /* ============================================
       FLOATING HEARTS
    ============================================ */

    function createHearts() {

        for (let i = 0; i < 40; i++) {

            const heart = document.createElement("div");

            heart.textContent = "❤️";

            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = "100vh";
            heart.style.fontSize = (18 + Math.random() * 22) + "px";
            heart.style.pointerEvents = "none";
            heart.style.zIndex = "99999";
            heart.style.transition = "all 5s linear";

            document.body.appendChild(heart);

                        requestAnimationFrame(() => {

                heart.style.top = "-100px";
                heart.style.opacity = "0";
                heart.style.transform =
                    `translateX(${(Math.random()-0.5)*250}px) rotate(${Math.random()*360}deg)`;

            });

            setTimeout(() => {

                heart.remove();

            }, 5000);

        }

    }

});