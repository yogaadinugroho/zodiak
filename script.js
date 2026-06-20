const zodiacData = {
    aries: {
        name: "Aries",
        symbol: "♈",
        emoji: "🐏",
        element: "Api",
        lucky: "9",
        power: 92,
        desc: "Pemimpin alami dengan semangat membara. Keberanianmu akan membawamu jauh."
    },
    taurus: {
        name: "Taurus",
        symbol: "♉",
        emoji: "🐮",
        element: "Bumi",
        lucky: "6",
        power: 95,
        desc: "Stabil dan kuat. Ketekunanmu adalah kekuatanmu yang sesungguhnya."
    },
    gemini: {
        name: "Gemini",
        symbol: "♊",
        emoji: "👯",
        element: "Udara",
        lucky: "5",
        power: 88,
        desc: "Cerdas dan adaptif. Fleksibilitasmu membuka banyak peluang."
    },
    cancer: {
        name: "Cancer",
        symbol: "♋",
        emoji: "🦀",
        element: "Air",
        lucky: "2",
        power: 91,
        desc: "Intuitif dan berempati. Hatimu adalah kompas spiritual."
    },
    leo: {
        name: "Leo",
        symbol: "♌",
        emoji: "🦁",
        element: "Api",
        lucky: "1",
        power: 97,
        desc: "Karismatik dan percaya diri. Bersinar adalah sifat alami mu."
    },
    virgo: {
        name: "Virgo",
        symbol: "♍",
        emoji: "🌾",
        element: "Bumi",
        lucky: "7",
        power: 87,
        desc: "Teliti dan rapi. Perhatian terhadap detail adalah keunggulanmu."
    },
    libra: {
        name: "Libra",
        symbol: "♎",
        emoji: "⚖️",
        element: "Udara",
        lucky: "6",
        power: 89,
        desc: "Seimbang dan diplomatik. Harmoni adalah cita-citamu."
    },
    scorpio: {
        name: "Scorpio",
        symbol: "♏",
        emoji: "🦂",
        element: "Air",
        lucky: "9",
        power: 93,
        desc: "Misterius dan intens. Kekuatanmu terletak pada kedalaman."
    },
    sagittarius: {
        name: "Sagittarius",
        symbol: "♐",
        emoji: "🏹",
        element: "Api",
        lucky: "3",
        power: 90,
        desc: "Petualang dan optimis. Kebebasan adalah napasmu."
    },
    capricorn: {
        name: "Capricorn",
        symbol: "♑",
        emoji: "🐐",
        element: "Bumi",
        lucky: "8",
        power: 98,
        desc: "Ambisius dan disiplin. Langkahmu pasti menuju puncak."
    },
    aquarius: {
        name: "Aquarius",
        symbol: "♒",
        emoji: "🏺",
        element: "Udara",
        lucky: "4",
        power: 86,
        desc: "Inovatif dan humanis. Visimu mengubah dunia."
    },
    pisces: {
        name: "Pisces",
        symbol: "♓",
        emoji: "🐟",
        element: "Air",
        lucky: "7",
        power: 94,
        desc: "Imajinatif dan artistik. Mimpimu adalah manifestasi."
    }
};

const themeBtn = document.getElementById('themeBtn');
const zodiacSelect = document.getElementById('zodiacSelect');
const revealBtn = document.getElementById('revealBtn');
const resultContent = document.getElementById('resultContent');

let isDarkMode = false;

themeBtn.addEventListener('click', (event) => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    themeBtn.textContent = isDarkMode ? '🌿 BUMI CERAH' : '🚀 LUAR ANGKASA';
    createClickSpark(event);
});

revealBtn.addEventListener('click', (event) => {
    const selected = zodiacSelect.value;
    if (!selected) {
        alert('Silakan pilih zodiakmu terlebih dahulu! 🌟');
        return;
    }

    const data = zodiacData[selected];
    displayResult(data);
    createClickSpark(event);
});

zodiacSelect.addEventListener('change', () => {
    if (zodiacSelect.value) {
        const data = zodiacData[zodiacSelect.value];
        displayResult(data);
    }
});

function displayResult(data) {
    resultContent.innerHTML = `
        <div class="hero-card">
            <div class="hero-icon">${data.emoji}</div>
            <div class="hero-content">
                <h3>${data.name} ${data.symbol}</h3>
                <p>${data.desc}</p>
            </div>
        </div>

        <div class="features-grid">
            <div class="feature-card" onclick="createClickSpark(event)">
                <div class="feature-label">Element</div>
                <div class="feature-value">🔥 ${data.element}</div>
                <div class="feature-desc">Elemen Kosmik</div>
            </div>
            <div class="feature-card" onclick="createClickSpark(event)">
                <div class="feature-label">Lucky Number</div>
                <div class="feature-value">🎰 ${data.lucky}</div>
                <div class="feature-desc">Angka Keberuntungan</div>
            </div>
        </div>

        <div class="meter-wrapper">
            <div class="meter-label">
                <span>Cosmic Power</span>
                <span>${data.power}%</span>
            </div>
            <div class="meter-bar">
                <div class="meter-fill" style="width: 0%; --accent-primary: ${getColorByElement(data.element)}"></div>
            </div>
        </div>

        <div class="feature-card" onclick="createClickSpark(event)">
            <div class="feature-label">🌙 Ramalan Hari Ini</div>
            <div class="feature-value">${generateFortune(data.name)}</div>
            <div class="feature-desc">Cosmic Guidance</div>
        </div>
    `;

    setTimeout(() => {
        const meter = resultContent.querySelector('.meter-fill');
        if(meter) meter.style.width = data.power + '%';
    }, 100);
}

function getColorByElement(element) {
    const colors = {
        'Api': '#FF6B6B',
        'Bumi': '#4ECDC4',
        'Udara': '#45B7D1',
        'Air': '#9B59B6'
    };
    return colors[element] || '#FFD700';
}

function generateFortune(zodiac) {
    const fortunes = {
        'Aries': '💰 Kesempatan emas menanti!',
        'Taurus': '🌟 Stabilitas membawa berkah',
        'Gemini': '🎯 Komunikasi adalah kunci',
        'Cancer': '❤️ Intuisi membimbing jalan',
        'Leo': '👑 Hari cemerlang untukmu',
        'Virgo': '📚 Detail membuka pintu',
        'Libra': '⚖️ Keseimbangan adalah jawaban',
        'Scorpio': '🔮 Transformasi menanti',
        'Sagittarius': '🚀 Petualangan baru dimulai',
        'Capricorn': '🎖️ Puncak sudah dekat',
        'Aquarius': '💡 Ide cemerlang lahir hari ini',
        'Pisces': '🌊 Mimpi menjadi nyata'
    };
    return fortunes[zodiac] || '✨ Keberuntungan bersama mu';
}

function createClickSpark(e) {
    if (!e) return;
    const sparks = isDarkMode ? ['🚀', '⭐', '💫', '🌌'] : ['🌸', '🍃', '☀️', '✨'];
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const spark = document.createElement('div');
            spark.className = 'click-spark';
            spark.textContent = sparks[Math.floor(Math.random() * sparks.length)];
            spark.style.left = e.clientX + 'px';
            spark.style.top = e.clientY + 'px';
            spark.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
            spark.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
            document.body.appendChild(spark);
            setTimeout(() => spark.remove(), 800);
        }, i * 50);
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && zodiacSelect.value) revealBtn.click();
    if (e.key === 't' || e.key === 'T') themeBtn.click();
});

console.log('🔮 Zodiac Oracle loaded! Press T to toggle theme, Enter to reveal fortune.');
