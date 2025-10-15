import { createCatCard } from './templates.js';
import { initCharts } from './charts.js';
import { initFormValidator } from './form-validator.js';
import { initMasks } from './masks.js';

const mainContent = document.querySelector('main');

async function loadPage(path) {
    try {
        const pagePath = path === '/' ? 'index.html' : path.substring(1);
        let contentHTML = '';

        const response = await fetch(pagePath);
        if (!response.ok) {
            throw new Error(`Arquivo não encontrado: ${pagePath}`);
        }

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        contentHTML = doc.querySelector('main').innerHTML;
        mainContent.innerHTML = contentHTML;
        
        if (pagePath.includes('projetos.html')) {
            const jsonResponse = await fetch('assets/gatos.json');
            const gatos = await jsonResponse.json();
            const cardsHTML = gatos.map(createCatCard).join('');
            const cardGrid = mainContent.querySelector('.card-grid');
            if(cardGrid) cardGrid.innerHTML = cardsHTML;
        }

        if (pagePath.includes('transparencia.html')) {
            initCharts();
        }

        initFormValidator();
        initMasks();

    } catch (error) {
        mainContent.innerHTML = '<div class="container"><h1>Erro 404 - Página não encontrada</h1><p>Não conseguimos encontrar o recurso que você pediu.</p></div>';
        console.error('Erro detalhado:', error);
    }
}

function route(event) {
    event.preventDefault();
    const link = event.target.closest('a');
    if (!link || link.href.startsWith('mailto:')) return;
    
    const path = new URL(link.href).pathname;
    if (window.location.pathname !== path) {
        history.pushState({}, '', path);
        loadPage(path);
    }
}

export function initRouter() {
    document.body.addEventListener('click', (event) => {
        const link = event.target.closest('a');
        if (link && link.origin === window.location.origin) {
            route(event);
        }
    });
    window.addEventListener('popstate', () => {
        loadPage(window.location.pathname);
    });
    loadPage(window.location.pathname);
}