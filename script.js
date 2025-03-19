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
    // Force repaint
    html.style.display = 'none';
    html.offsetHeight; // Trigger reflow
    html.style.display = '';
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
