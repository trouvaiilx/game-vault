// Game data
const games = [
    { title: "Tekken 8", image: "images/tekken8.jpg", username: "vector2931", password: "vba3cpzdg0wi" },
    { title: "Ghost of Tsushima", image: "images/ghostoftsushima.jpg", username: "gregoryhess7r", password: "exlE1pOD511991" },
    { title: "Cyberpunk 2077", image: "images/cyberpunk2077.jpg", username: "anastasiyajevrakova96", password: "XomCamRtTYt3PtvUiVFT" },
    { title: "Detroit Become Human", image: "images/detroitbecomehuman.jpg", username: "kachapkinvyacheslav92", password: "4EKbobbyeIhav1" },
    { title: "God of War", image: "images/godofwar.jpg", username: "tamirhameleh222", password: "T2XDM3692D68" },
    { title: "Assassin's Creed Collection", image: "images/assassinscreed.jpg", username: "AssasinCollection", password: "Assasin2reYd3%8$8" },
    { title: "Uncharted LOTC", image: "images/uncharted.jpg", username: "josepacheco1n", password: "Pi0fwACNMx1990" },
    { title: "Hogwarts Legacy", image: "images/hogwartslegacy.jpg", username: "kristinesun9z", password: "dQIRB5Fme02001" },
    { title: "Final Fantasy XV", image: "images/ffxv.jpg", username: "cirulevilya96", password: "S3vrb7Ooipi9doWU" },
    { title: "Death Stranding", image: "images/deathstranding.jpg", username: "sdke316618", password: "X8S5E9C5754B" },
    { title: "Mafia Trilogy", image: "images/mafiatrilogy.jpg", username: "naomip1961", password: "ID7RRttp9YROUme3WvDe" },
    { title: "Bright Memory Infinite", image: "images/brightmemoryinfinite.jpg", username: "BrightMemoryInfinite", password: "Bright45%&$6&5Memory" },

    { title: "Black Myth: Wukong", image: "images/wukong.jpg", username: "riptide_family01", password: "RiptideGameShop01" },
    { title: "Days Gone", image: "images/daysgone.jpg", username: "juscelinolira", password: "CDTBTD66XEX6" },
    { title: "Nier: Automata", image: "images/nierautomata.jpg", username: "iftodipasha89", password: "3dm!ArsEq3" },
    { title: "Baldur's Gate 3", image: "images/baldur.jpg", username: "jondunn1z", password: "3QHKTg95UZ1984" },
    { title: "Red Dead Redemption 2", image: "images/rdr2.jpg", username: "reddead2347", password: "Reddead3$76" },
    { title: "Shin Megami Tensei V: Vengeance", image: "images/shin5.jpg", username: "bumerpedust1970", password: "rvjD3ktpLL1983" },
    { title: "Like a Dragon: Infinite Wealth", image: "images/likeadragoniw.jpg", username: "dawnpater3d", password: "enNp5N@jIwMDI" },
    { title: "Yakuza Kiwami Series", image: "images/yakuzakiwami.jpg", username: "pandagame4588", password: "pandagame9463" },
    { title: "Like a Dragon: Pirate Yakuza in Hawaii", image: "images/likeadragonpyih.jpg", username: "Candrinannr81", password: "clSKS0KE8Zq7vy2" },
    { title: "Like a Dragon Gaiden: The Man Who Erased His Name", image: "images/likeadragongaiden.jpg", username: "nightmarishself", password: "qRl51vwpP451" },
    { title: "Elden Ring", image: "images/eldenring.jpg", username: "anhnta2609", password: "retii1337+" },

    { title: "Hitman World of Assassination", image: "images/hitmanwoa.jpg", username: "timurtaradaiko", password: "3fRK47CDwYaY" },
    { title: "Ready or Not", image: "images/readyornot.jpg", username: "ReadyorNottt", password: "ReadyorNo6%6" },
    { title: "Marvel's Spider-Man Remastered", image: "images/spidermanremastered.jpg", username: "SOHAM123419", password: "Funpay-0nibist" },
    { title: "Marvel's Spider-Man: Miles Morales", image: "images/spidermanmilesmorales.jpg", username: "qtixe43976", password: "ezlbgwezA6661eE!1" },
    { title: "Sekiro: Shadows Die Twice", image: "images/sekiro.jpg", username: "f2ile50nze", password: "sekiro$678" },
    { title: "Omori", image: "images/omori.jpg", username: "HeeHeelios", password: "D49S4B76YSC5" },
    { title: "Devil May Cry 5", image: "images/dmc5.jpg", username: "tyraanderson88", password: "h9veaqfk" },
    { title: "Love is All Around", image: "images/loveisallaround.jpg", username: "laurabrown7c", password: "g79cQhPpFX1991" },
    { title: "Five Hearts Under One Roof", image: "images/fiveheartsunderoneroof.jpg", username: "dangates5d", password: "cY0wd6V8Ka1986" },
    { title: "Knowledge, or know Lady", image: "images/knowledgelady.jpg", username: "raucontdepnie1985", password: "5yqlECyGk41980" },
    { title: "Grand Theft Auto: San Andreas", image: "images/gtasa.jpg", username: "coolmaxxx", password: "TECD7AYMCKMX" },
    { title: "Grand Theft Auto: IV", image: "images/gta4.jpg", username: "rzm745", password: "Rzm85770923" },		
    { title: "Shin Megami Tensei III: Nocturne HD Remaster", image: "images/shin3.jpg", username: "ShinMegamiTenseii", password: "ShinMegamiTens9$6" },

    { title: "Inzoi", image: "images/inzoi.jpg", username: "benjamindiez34", password: "lalokytapi459" },

];

// Pagination settings
const gamesPerPage = 12;
let currentPage = 1;

const gamesGrid = document.getElementById('gamesGrid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageInfo = document.getElementById('pageInfo');
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Function to render games for the current page
function renderGames() {
    gamesGrid.innerHTML = ''; // Clear existing content
    const start = (currentPage - 1) * gamesPerPage;
    const end = start + gamesPerPage;
    const paginatedGames = games.slice(start, end);

    paginatedGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="game-cover">
            <div class="game-info">
                <h2 class="game-title">${game.title}</h2>
                <div class="credentials">
                    <div class="credential-item">
                        <span class="credential-label">Username</span>
                        <span class="credential-value">${game.username}</span>
                        <button class="copy-btn" onclick="copyToClipboard('${game.username}')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="credential-item">
                        <span class="credential-label">Password</span>
                        <span class="credential-value">${game.password}</span>
                        <button class="copy-btn" onclick="copyToClipboard('${game.password}')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
        gamesGrid.appendChild(gameCard);
    });

    updatePagination();
}

// Function to update pagination controls
function updatePagination() {
    const totalPages = Math.ceil(games.length / gamesPerPage);
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    if (html.classList.contains('dark-mode')) {
        html.classList.remove('dark-mode');
        html.classList.add('light-mode');
    } else {
        html.classList.remove('light-mode');
        html.classList.add('dark-mode');
    }
});

// Copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            const feedbackEl = document.createElement('div');
            feedbackEl.textContent = 'Copied!';
            feedbackEl.style.position = 'fixed';
            feedbackEl.style.top = '10px';
            feedbackEl.style.left = '50%';
            feedbackEl.style.transform = 'translateX(-50%)';
            feedbackEl.style.backgroundColor = 'var(--accent)';
            feedbackEl.style.color = 'white';
            feedbackEl.style.padding = '8px 16px';
            feedbackEl.style.borderRadius = '4px';
            feedbackEl.style.zIndex = '2000';
            document.body.appendChild(feedbackEl);

            setTimeout(() => {
                feedbackEl.remove();
            }, 1500);
        });
}

// Pagination button event listeners
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderGames();
    }
});

nextBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(games.length / gamesPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderGames();
    }
});

// Initial render
renderGames();
