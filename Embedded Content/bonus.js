const audioFiles = [
    { name: "HaHa", src: "haha.mp3" },
    { name: "Glass Breaking", src: "Glass Breaking.mp3" },
    { name: "HeartBeat", src: "HeartBeat.mp3" },
    { name: "Slow Clapping", src: "Slow Clapping.mp3" },
    { name: "Sword Slash", src: "SWORD SLASH.mp3" },
    { name: "Typing", src: "Typing.mp3" },
    { name: "Whistle", src: "Whistle.mp3" },
    { name: "Sneeze", src: "Sneeze.mp3" },
    { name: "Sample 9", src: "audio/sample9.mp3" },
    { name: "Sample 10", src: "audio/sample10.mp3" },
    // Add more audio samples as needed
];

let currentPage = 1;
const samplesPerPage = 9;

const soundboard = document.getElementById('soundboard');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const textInput = document.getElementById('text-input');
const speakBtn = document.getElementById('speak-btn');

// Function to play audio
function playAudio(src) {
    const audio = new Audio(src);
    audio.play();
}

// Function to display audio samples
function displaySamples() {
    soundboard.innerHTML = '';
    const startIndex = (currentPage - 1) * samplesPerPage;
    const endIndex = startIndex + samplesPerPage;
    const pageSamples = audioFiles.slice(startIndex, endIndex);

    pageSamples.forEach(sample => {
        const button = document.createElement('button');
        button.textContent = sample.name;
        button.addEventListener('click', () => playAudio(sample.src));

        const sampleDuration = new Audio(sample.src);
        sampleDuration.onloadedmetadata = () => {
            const duration = Math.round(sampleDuration.duration);
            const durationDisplay = document.createElement('div');
            durationDisplay.textContent = `${duration}s`;
            button.appendChild(durationDisplay);
        };

        soundboard.appendChild(button);
    });

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage * samplesPerPage >= audioFiles.length;
}

// Text-to-speech functionality
speakBtn.addEventListener('click', () => {
    const text = textInput.value;
    if (text) {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }
});

// Pagination functionality
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displaySamples();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage * samplesPerPage < audioFiles.length) {
        currentPage++;
        displaySamples();
    }
});
function playAudio(src) {
    const audio = new Audio(src);
    audio.preload = 'auto';
    audio.play();
}


displaySamples();
