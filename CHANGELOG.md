# 📝 Changelog

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2025-01-XX

### ✨ Adicionado

#### 🔐 Sistema de Autenticação
- Sistema completo de login e registro de usuários
- Validação de email com regex
- Hash de senha para armazenamento seguro
- Armazenamento de dados no localStorage
- Proteção de rotas e conteúdo premium
- Sistema de logout com limpeza de sessão
- Redirecionamento automático baseado em autenticação

#### 📄 Geração de PDF
- Integração com html2pdf.js v0.10.1
- PDF personalizado com nome do usuário
- Capa com foto do autor
- 3 páginas motivacionais sobre educação:
  - "O Poder Transformador da Educação"
  - "Uma Oportunidade Única na História"
  - "Sua História de Sucesso Começa Aqui"
- Página de introdução ao guia
- 6 páginas de trilhas com bootcamps completos
- Página de conclusão com próximos passos
- Página sobre o autor com contatos
- Todos os 12 bootcamps com links de afiliado

#### 🎨 Design Premium
- Arquivo `premium-styles.css` com 400+ linhas
- Gradientes animados em cards e botões
- Efeitos de brilho e sombra
- Badge de bloqueio com animação de shine
- Botões com efeito de ripple
- Cards com borda gradiente animada
- Design de bootcamp-items elegante
- Link dos bootcamps com hover especial
- Botão de PDF com gradiente rosa-vermelho
- Seção de download com efeito de pulse-glow

#### ✨ Animações
- Arquivo `animations.css` com 350+ linhas
- Fade In Up para entrada de cards
- Animação de float para elementos de fundo
- Gradient text animado nos títulos
- Pulse glow em elementos interativos
- Animação de loading no botão de PDF
- Efeito de digitação no hero
- Bounce nos ícones ao hover
- Wave animation no hero background
- Slide in no login container
- Shake para mensagens de erro
- Checkmark animado para sucesso
- Twinkle stars no background
- Slide right nos bootcamp-items
- Zoom suave em imagens
- Ripple effect nos botões
- Transições suaves entre seções
- Scroll suave (smooth scroll)
- Parallax effect

#### 🛡️ Proteção de Conteúdo
- Sistema dual de trilhas:
  - `.trilhas-preview` para visitantes
  - `.trilhas-completas` para usuários logados
- Toggle de visibilidade baseado em autenticação
- Redirecionamento automático para login
- Botão de logout no header
- Links de afiliado protegidos
- Preview atrativo com badge "🔒 2 Bootcamps Disponíveis"

#### 📱 Melhorias de UX
- Loading overlay durante geração de PDF
- Mensagens de erro e sucesso em formulários
- Validação em tempo real de campos
- Toggle de visibilidade de senha
- Tab switching no login/registro
- Animações de transição suaves
- Feedback visual em todas as interações

### 🔧 Alterado

#### 📄 Estrutura HTML
- Adicionado sistema dual de trilhas em index.html
- Criado login.html completo com tabs
- Removido formulário de download antigo
- Adicionado botão direto de download de PDF
- Adicionado botão de logout no header
- Melhorada semântica HTML
- Atualizadas classes CSS

#### 🎨 Estilos
- Refatorados inline styles para classes
- Criada classe `.lock-badge` para badges
- Criada classe `.bootcamp-item` otimizada
- Criada classe `.bootcamp-link` estilizada
- Adicionado ID `#downloadPdfBtn`
- Removidos estilos inline repetidos
- Melhorada organização do CSS

#### 📊 Conteúdo
- Atualizados todos os 12 links de bootcamps
- Adicionado código de afiliado em todos: `?ref=AFILIADOS66FD57E0D94`
- Corrigidos nomes dos bootcamps
- Atualizadas descrições
- Melhorado texto motivacional do PDF

### 🐛 Corrigido
- Links de bootcamps com URLs corretas
- Código de afiliado presente em todos os links
- PDF sem páginas em branco
- Conteúdo motivacional preenchido
- Transições visuais suavizadas
- Responsividade em dispositivos móveis

### 📚 Documentação
- README.md completamente reescrito
- Adicionadas badges de status e tecnologias
- Criada seção de características detalhada
- Adicionado guia passo a passo de uso
- Incluído diagrama de fluxo do usuário
- Documentada arquitetura do sistema
- Listadas todas as tecnologias
- Adicionada paleta de cores visual
- Criada tabela de diferenciais
- Incluídas métricas do projeto
- Adicionado roadmap de versões futuras

---

## [1.0.0] - 2025-01-XX

### ✨ Adicionado

#### 🎨 Landing Page Inicial
- Hero section com CTA principal
- Seção "Sobre o E-book"
- Seção de 6 trilhas tech:
  - Front-End
  - Back-End
  - Cloud Computing
  - IA e Dados
  - Carreiras Tech
  - Game Development
- Formulário de captura de leads
- Seção sobre o autor
- Footer completo
- Design responsivo mobile-first

#### 🎨 Estilos Base
- `styles.css` com design system completo
- Variáveis CSS customizadas
- Grid responsivo
- Animações básicas
- Cards interativos
- Botões estilizados
- Formulários estilizados

#### ♿ Acessibilidade
- `accessibility.css` dedicado
- Controles de alto contraste
- Aumento de fonte
- Leitura por voz
- Navegação por teclado
- ARIA labels
- Semântica HTML5

#### 📊 Conteúdo
- 6 trilhas completas de aprendizado
- 12 bootcamps gratuitos catalogados
- Descrições detalhadas
- Links para a DIO
- Biografia do autor
- Informações de contato

### 🎯 Features
- Design moderno e profissional
- Cores vibrantes (roxo e ciano)
- Gradientes suaves
- Animações de hover
- Totalmente responsivo
- SEO otimizado
- Performance otimizada

---

## [Unreleased] - Próximas Versões

### 🚀 Planejado para v2.1
- [ ] Backend real com Node.js + Express
- [ ] Banco de dados MongoDB
- [ ] Sistema de email real
- [ ] Recuperação de senha
- [ ] Verificação de email

### 🚀 Planejado para v2.2
- [ ] Dashboard do usuário
- [ ] Progresso nos bootcamps
- [ ] Sistema de favoritos
- [ ] Filtros avançados
- [ ] PWA (Progressive Web App)
- [ ] Modo escuro/claro

### 🚀 Planejado para v3.0
- [ ] Blog integrado
- [ ] Sistema de notificações
- [ ] Gamificação com badges
- [ ] Sistema de comentários
- [ ] Integração com redes sociais
- [ ] Analytics avançado

---

## 📊 Estatísticas

### Versão 2.0.0
- **Arquivos criados**: 4 novos (login.html, auth.js, pdf-generator.js, premium-styles.css, animations.css, CHANGELOG.md)
- **Linhas de código**: +2.500
- **Commits**: 5 commits principais
- **Funcionalidades**: 25+ novas features
- **Animações**: 20+ tipos diferentes
- **CSS Premium**: 771 linhas
- **Tempo de desenvolvimento**: ~4 horas

### Versão 1.0.0
- **Arquivos criados**: 3 (index.html, styles.css, accessibility.css)
- **Linhas de código**: ~1.200
- **Commits**: 1 commit inicial
- **Trilhas**: 6 completas
- **Bootcamps**: 12 catalogados

---

## 🏆 Destaques das Versões

### v2.0.0 - A Transformação Premium
> "De uma landing page simples para um sistema completo de autenticação e geração de PDF personalizado"

**Principais conquistas:**
- ✅ Sistema de autenticação funcional
- ✅ PDF personalizado e bonito
- ✅ Design premium com animações
- ✅ Proteção de links de afiliado
- ✅ Experiência do usuário aprimorada

### v1.0.0 - O Início
> "Uma landing page acessível e profissional"

**Principais conquistas:**
- ✅ Design responsivo
- ✅ Acessibilidade completa
- ✅ 6 trilhas catalogadas
- ✅ 12 bootcamps listados

---

## 🔗 Links Úteis

- [GitHub Repository](https://github.com/MarcioGil/E-book-Bootcamp)
- [Autor - LinkedIn](https://linkedin.com/in/márcio-gil-1b7669309)
- [Autor - Portfolio](https://marciogil.github.io/curriculum-vitae/)
- [DIO - Plataforma](https://www.dio.me/)

---

## 📝 Notas de Desenvolvimento

### Decisões Técnicas

#### Por que localStorage?
- Sem necessidade de backend inicialmente
- Prototipagem rápida
- Funciona offline
- Simplicidade de implementação

#### Por que html2pdf.js?
- Geração client-side
- Sem dependência de servidor
- Customização total do PDF
- Boa qualidade de saída

#### Por que múltiplos arquivos CSS?
- Separação de responsabilidades
- Facilita manutenção
- Permite loading condicional
- Melhor organização

### Lições Aprendidas
- ✅ Autenticação client-side é suficiente para MVP
- ✅ Animações CSS são mais performáticas que JS
- ✅ localStorage é ótimo para protótipos
- ✅ Design system facilita expansão
- ✅ Documentação é essencial desde o início

---

<div align="center">

**Desenvolvido com 💜 por [Márcio Gil](https://github.com/MarcioGil)**

*Transformando vidas através da educação tech!*

</div>
