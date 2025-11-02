// ========================================
// ACESSIBILIDADE - Web Speech API & Controles
// ========================================

class AccessibilityHelper {
    constructor() {
        this.speechSynthesis = window.speechSynthesis;
        this.isSpeaking = false;
        this.fontSize = 100; // Porcentagem
        this.highContrast = false;
        this.init();
    }

    init() {
        this.createAccessibilityPanel();
        this.addKeyboardShortcuts();
        this.addARIALabels();
        this.addFocusStyles();
    }

    // ========================================
    // PAINEL DE ACESSIBILIDADE
    // ========================================
    createAccessibilityPanel() {
        const panel = document.createElement('div');
        panel.className = 'accessibility-panel';
        panel.innerHTML = `
            <button class="accessibility-toggle" aria-label="Abrir menu de acessibilidade" title="Acessibilidade (Alt + A)">
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
                </svg>
            </button>
            <div class="accessibility-menu" role="menu" aria-hidden="true">
                <h3>Ferramentas de Acessibilidade</h3>
                
                <div class="accessibility-section">
                    <h4>🔊 Leitura por Voz</h4>
                    <button id="readPageBtn" class="accessibility-btn" aria-label="Ler página inteira">
                        <span class="btn-icon">📖</span> Ler Página Inteira
                    </button>
                    <button id="readSectionBtn" class="accessibility-btn" aria-label="Ler seção atual">
                        <span class="btn-icon">📄</span> Ler Seção Atual
                    </button>
                    <button id="stopReadingBtn" class="accessibility-btn" aria-label="Parar leitura" disabled>
                        <span class="btn-icon">⏹️</span> Parar Leitura
                    </button>
                    
                    <div class="voice-controls">
                        <label for="speechRate">Velocidade: <span id="rateValue">1.0</span>x</label>
                        <input type="range" id="speechRate" min="0.5" max="2" step="0.1" value="1" aria-label="Velocidade da leitura">
                        
                        <label for="speechPitch">Tom: <span id="pitchValue">1.0</span></label>
                        <input type="range" id="speechPitch" min="0.5" max="2" step="0.1" value="1" aria-label="Tom da voz">
                    </div>
                </div>

                <div class="accessibility-section">
                    <h4>🔤 Tamanho do Texto</h4>
                    <div class="btn-group">
                        <button id="decreaseFontBtn" class="accessibility-btn" aria-label="Diminuir fonte">A-</button>
                        <button id="resetFontBtn" class="accessibility-btn" aria-label="Resetar fonte">A</button>
                        <button id="increaseFontBtn" class="accessibility-btn" aria-label="Aumentar fonte">A+</button>
                    </div>
                    <span class="font-size-display" aria-live="polite">Tamanho: <span id="fontSizeValue">100</span>%</span>
                </div>

                <div class="accessibility-section">
                    <h4>🎨 Visual</h4>
                    <button id="contrastBtn" class="accessibility-btn" aria-label="Alternar alto contraste">
                        <span class="btn-icon">◐</span> Alto Contraste
                    </button>
                    <button id="grayscaleBtn" class="accessibility-btn" aria-label="Alternar escala de cinza">
                        <span class="btn-icon">⚫</span> Escala de Cinza
                    </button>
                    <button id="focusHighlightBtn" class="accessibility-btn" aria-label="Destacar links">
                        <span class="btn-icon">🔍</span> Destacar Links
                    </button>
                </div>

                <div class="accessibility-section">
                    <h4>⌨️ Atalhos</h4>
                    <ul class="shortcuts-list">
                        <li><kbd>Alt + A</kbd> - Abrir menu</li>
                        <li><kbd>Alt + R</kbd> - Ler página</li>
                        <li><kbd>Alt + S</kbd> - Parar leitura</li>
                        <li><kbd>Alt + +</kbd> - Aumentar fonte</li>
                        <li><kbd>Alt + -</kbd> - Diminuir fonte</li>
                        <li><kbd>Alt + C</kbd> - Alto contraste</li>
                    </ul>
                </div>

                <button id="resetAllBtn" class="accessibility-btn reset-btn" aria-label="Resetar todas configurações">
                    🔄 Resetar Tudo
                </button>
            </div>
        `;

        document.body.appendChild(panel);
        this.attachEventListeners();
    }

    // ========================================
    // EVENT LISTENERS
    // ========================================
    attachEventListeners() {
        // Toggle menu
        const toggle = document.querySelector('.accessibility-toggle');
        const menu = document.querySelector('.accessibility-menu');
        
        toggle.addEventListener('click', () => {
            const isOpen = menu.getAttribute('aria-hidden') === 'false';
            menu.setAttribute('aria-hidden', !isOpen);
            menu.classList.toggle('open');
            toggle.setAttribute('aria-expanded', !isOpen);
        });

        // Leitura por voz
        document.getElementById('readPageBtn').addEventListener('click', () => this.readEntirePage());
        document.getElementById('readSectionBtn').addEventListener('click', () => this.readCurrentSection());
        document.getElementById('stopReadingBtn').addEventListener('click', () => this.stopReading());

        // Controles de voz
        document.getElementById('speechRate').addEventListener('input', (e) => {
            document.getElementById('rateValue').textContent = e.target.value;
        });

        document.getElementById('speechPitch').addEventListener('input', (e) => {
            document.getElementById('pitchValue').textContent = e.target.value;
        });

        // Tamanho da fonte
        document.getElementById('increaseFontBtn').addEventListener('click', () => this.changeFontSize(10));
        document.getElementById('decreaseFontBtn').addEventListener('click', () => this.changeFontSize(-10));
        document.getElementById('resetFontBtn').addEventListener('click', () => this.resetFontSize());

        // Visual
        document.getElementById('contrastBtn').addEventListener('click', () => this.toggleHighContrast());
        document.getElementById('grayscaleBtn').addEventListener('click', () => this.toggleGrayscale());
        document.getElementById('focusHighlightBtn').addEventListener('click', () => this.toggleFocusHighlight());

        // Reset
        document.getElementById('resetAllBtn').addEventListener('click', () => this.resetAll());

        // Leitura ao passar o mouse (hover to read)
        this.addHoverReading();
    }

    // ========================================
    // LEITURA POR VOZ
    // ========================================
    readText(text) {
        if (!this.speechSynthesis) {
            alert('Seu navegador não suporta leitura por voz. Tente usar Chrome, Edge ou Safari.');
            return;
        }

        this.stopReading();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        utterance.rate = parseFloat(document.getElementById('speechRate').value);
        utterance.pitch = parseFloat(document.getElementById('speechPitch').value);

        utterance.onstart = () => {
            this.isSpeaking = true;
            document.getElementById('stopReadingBtn').disabled = false;
            document.getElementById('readPageBtn').disabled = true;
            document.getElementById('readSectionBtn').disabled = true;
        };

        utterance.onend = () => {
            this.isSpeaking = false;
            document.getElementById('stopReadingBtn').disabled = true;
            document.getElementById('readPageBtn').disabled = false;
            document.getElementById('readSectionBtn').disabled = false;
        };

        this.speechSynthesis.speak(utterance);
    }

    readEntirePage() {
        const content = this.extractPageContent();
        this.readText(content);
        this.announceToScreenReader('Iniciando leitura da página inteira');
    }

    readCurrentSection() {
        const section = this.getCurrentSection();
        if (section) {
            const content = this.extractSectionContent(section);
            this.readText(content);
            this.announceToScreenReader(`Lendo seção: ${section.querySelector('h2, h3')?.textContent || 'sem título'}`);
        }
    }

    stopReading() {
        if (this.speechSynthesis) {
            this.speechSynthesis.cancel();
            this.isSpeaking = false;
            document.getElementById('stopReadingBtn').disabled = true;
            document.getElementById('readPageBtn').disabled = false;
            document.getElementById('readSectionBtn').disabled = false;
            this.announceToScreenReader('Leitura interrompida');
        }
    }

    extractPageContent() {
        const main = document.querySelector('main') || document.body;
        const clone = main.cloneNode(true);
        
        // Remove elementos desnecessários
        clone.querySelectorAll('script, style, nav, header, footer, .accessibility-panel').forEach(el => el.remove());
        
        return this.cleanText(clone.textContent);
    }

    extractSectionContent(section) {
        const clone = section.cloneNode(true);
        clone.querySelectorAll('script, style').forEach(el => el.remove());
        return this.cleanText(clone.textContent);
    }

    getCurrentSection() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const section of sections) {
            const rect = section.getBoundingClientRect();
            const top = rect.top + window.scrollY;
            const bottom = top + rect.height;

            if (scrollPosition >= top && scrollPosition <= bottom) {
                return section;
            }
        }

        return sections[0];
    }

    cleanText(text) {
        return text
            .replace(/\s+/g, ' ')
            .replace(/\n+/g, '. ')
            .trim();
    }

    // ========================================
    // HOVER TO READ
    // ========================================
    addHoverReading() {
        let hoverTimeout;
        const readableElements = 'h1, h2, h3, p, li, button, a, .benefit-title, .trilha-title, .bootcamp-item';

        document.querySelectorAll(readableElements).forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                if (!this.isSpeaking) {
                    hoverTimeout = setTimeout(() => {
                        const text = element.textContent.trim();
                        if (text.length > 0 && text.length < 200) {
                            this.readText(text);
                        }
                    }, 1500); // Espera 1.5s antes de ler
                }
            });

            element.addEventListener('mouseleave', () => {
                clearTimeout(hoverTimeout);
            });
        });
    }

    // ========================================
    // TAMANHO DA FONTE
    // ========================================
    changeFontSize(change) {
        this.fontSize = Math.max(80, Math.min(150, this.fontSize + change));
        document.documentElement.style.fontSize = this.fontSize + '%';
        document.getElementById('fontSizeValue').textContent = this.fontSize;
        this.announceToScreenReader(`Tamanho da fonte: ${this.fontSize}%`);
        localStorage.setItem('fontSize', this.fontSize);
    }

    resetFontSize() {
        this.fontSize = 100;
        document.documentElement.style.fontSize = '100%';
        document.getElementById('fontSizeValue').textContent = '100';
        this.announceToScreenReader('Tamanho da fonte resetado');
        localStorage.removeItem('fontSize');
    }

    // ========================================
    // ALTO CONTRASTE & VISUAL
    // ========================================
    toggleHighContrast() {
        this.highContrast = !this.highContrast;
        document.body.classList.toggle('high-contrast', this.highContrast);
        this.announceToScreenReader(`Alto contraste ${this.highContrast ? 'ativado' : 'desativado'}`);
        localStorage.setItem('highContrast', this.highContrast);
    }

    toggleGrayscale() {
        const isActive = document.body.classList.toggle('grayscale');
        this.announceToScreenReader(`Escala de cinza ${isActive ? 'ativada' : 'desativada'}`);
        localStorage.setItem('grayscale', isActive);
    }

    toggleFocusHighlight() {
        const isActive = document.body.classList.toggle('focus-highlight');
        this.announceToScreenReader(`Destaque de links ${isActive ? 'ativado' : 'desativado'}`);
        localStorage.setItem('focusHighlight', isActive);
    }

    // ========================================
    // ATALHOS DE TECLADO
    // ========================================
    addKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.altKey) {
                switch(e.key.toLowerCase()) {
                    case 'a':
                        e.preventDefault();
                        document.querySelector('.accessibility-toggle').click();
                        break;
                    case 'r':
                        e.preventDefault();
                        this.readEntirePage();
                        break;
                    case 's':
                        e.preventDefault();
                        this.stopReading();
                        break;
                    case '+':
                    case '=':
                        e.preventDefault();
                        this.changeFontSize(10);
                        break;
                    case '-':
                        e.preventDefault();
                        this.changeFontSize(-10);
                        break;
                    case 'c':
                        e.preventDefault();
                        this.toggleHighContrast();
                        break;
                }
            }
        });
    }

    // ========================================
    // ARIA & SCREEN READER
    // ========================================
    addARIALabels() {
        // Adiciona role e aria-label aos elementos principais
        document.querySelectorAll('section').forEach((section, index) => {
            if (!section.getAttribute('role')) {
                section.setAttribute('role', 'region');
            }
            if (!section.getAttribute('aria-label')) {
                const heading = section.querySelector('h2, h3');
                if (heading) {
                    section.setAttribute('aria-labelledby', heading.id || `section-${index}`);
                    if (!heading.id) heading.id = `section-${index}`;
                }
            }
        });

        // Melhora os links
        document.querySelectorAll('a').forEach(link => {
            if (!link.getAttribute('aria-label') && link.target === '_blank') {
                link.setAttribute('aria-label', `${link.textContent} (abre em nova aba)`);
            }
        });
    }

    addFocusStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Estilos de foco aprimorados */
            *:focus {
                outline: 3px solid var(--primary-color);
                outline-offset: 2px;
            }

            body.focus-highlight a:focus,
            body.focus-highlight button:focus {
                outline: 4px solid #f59e0b;
                outline-offset: 4px;
                background: rgba(245, 158, 11, 0.1);
            }
        `;
        document.head.appendChild(style);
    }

    announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
    }

    // ========================================
    // RESET & LOAD SETTINGS
    // ========================================
    resetAll() {
        this.stopReading();
        this.resetFontSize();
        document.body.classList.remove('high-contrast', 'grayscale', 'focus-highlight');
        localStorage.clear();
        this.announceToScreenReader('Todas as configurações foram resetadas');
    }

    loadSavedSettings() {
        const savedFontSize = localStorage.getItem('fontSize');
        if (savedFontSize) {
            this.fontSize = parseInt(savedFontSize);
            document.documentElement.style.fontSize = this.fontSize + '%';
            document.getElementById('fontSizeValue').textContent = this.fontSize;
        }

        if (localStorage.getItem('highContrast') === 'true') {
            this.toggleHighContrast();
        }

        if (localStorage.getItem('grayscale') === 'true') {
            this.toggleGrayscale();
        }

        if (localStorage.getItem('focusHighlight') === 'true') {
            this.toggleFocusHighlight();
        }
    }
}

// ========================================
// INICIALIZAÇÃO
// ========================================
window.addEventListener('DOMContentLoaded', () => {
    const accessibility = new AccessibilityHelper();
    accessibility.loadSavedSettings();
    
    console.log('%c♿ Recursos de Acessibilidade Ativados', 'font-size: 16px; color: #10b981; font-weight: bold;');
    console.log('%cUse Alt + A para abrir o menu de acessibilidade', 'font-size: 12px; color: #06b6d4;');
});
