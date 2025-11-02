# 🚀 Trilhas da Transformação Tech - Landing Page

Landing page profissional para o e-book "Trilhas da Transformação Tech" por **Márcio Gil** - Embaixador DIO Campus Expert.

## 📋 Sobre o Projeto

Esta landing page foi criada para promover e distribuir o e-book gratuito que apresenta 6 trilhas completas de bootcamps da DIO (Digital Innovation One), ajudando pessoas a descobrirem seu caminho na tecnologia.

## ✨ Funcionalidades

- ✅ Design moderno e responsivo
- ✅ **Recursos completos de acessibilidade**
- ✅ **Leitura por voz para deficientes visuais**
- ✅ **Controles de alto contraste e aumento de fonte**
- ✅ Animações suaves e interativas
- ✅ Formulário de captura de leads
- ✅ Cards interativos das 6 trilhas tech
- ✅ Links diretos para bootcamps com código de indicação
- ✅ Página de agradecimento após download
- ✅ Totalmente otimizado para mobile
- ✅ Scroll suave entre seções
- ✅ Efeitos visuais modernos
- ✅ **Atalhos de teclado**
- ✅ **ARIA labels para leitores de tela**

## 🎨 Trilhas Incluídas

1. **💻 Front-End** - Criando Experiências Digitais
2. **⚙️ Back-End** - O Poder por Trás do Código
3. **☁️ Cloud Computing** - O Futuro Está na Nuvem
4. **🧠 IA e Dados** - Transformando Informação em Conhecimento
5. **🧩 Carreiras Tech** - Do Zero ao Primeiro Emprego
6. **🎮 Game Development** - Transformando Ideias em Jogos

## ♿ Recursos de Acessibilidade

Este projeto foi desenvolvido com **acessibilidade em primeiro lugar**:

### 🔊 Leitura por Voz
- **Leitura completa da página** com Web Speech API
- **Leitura de seções individuais**
- **Controles de velocidade e tom de voz**
- **Leitura ao passar o mouse** sobre elementos (hover)
- Totalmente em **português brasileiro**

### 🎨 Controles Visuais
- **Aumentar/Diminuir tamanho da fonte** (80% - 150%)
- **Modo de alto contraste** para melhor legibilidade
- **Escala de cinza** para reduzir fadiga visual
- **Destaque de links e botões** em foco

### ⌨️ Atalhos de Teclado
- `Alt + A` - Abrir menu de acessibilidade
- `Alt + R` - Ler página inteira
- `Alt + S` - Parar leitura
- `Alt + +` - Aumentar fonte
- `Alt + -` - Diminuir fonte
- `Alt + C` - Alternar alto contraste

### 🎯 ARIA & Semântica
- **Roles e ARIA labels** em todos os elementos importantes
- **Landmarks semânticos** para navegação com leitores de tela
- **Anúncios para screen readers**
- **Navegação por teclado** 100% funcional

### 💾 Persistência
As configurações de acessibilidade são **salvas automaticamente** no navegador.

## 🚀 Como Usar

### 1. Estrutura de Arquivos

```
E-book-Bootcamp/
├── index.html          # Página principal
├── thank-you.html      # Página de agradecimento
├── styles.css          # Estilos CSS
├── accessibility.css   # Estilos de acessibilidade
├── script.js           # JavaScript principal
├── accessibility.js    # Script de acessibilidade
├── README.md           # Este arquivo
└── assets/             # Pasta para recursos
    ├── capa-ebook.png  # Capa do e-book (adicionar aqui)
    ├── foto-marcio-gil.jpg  # Foto do autor
    └── trilhas-transformacao-tech.pdf  # E-book (adicionar aqui)
```

### 2. Adicionar a Capa do E-book

Para adicionar a imagem da capa do e-book:

1. Salve a imagem da capa na pasta `assets/` como `capa-ebook.png` ou `capa-ebook.jpg`
2. No arquivo `index.html`, localize a seção `.hero-image` (linha ~84)
3. Descomente a linha com a tag `<img>` e comente o div `.ebook-placeholder`

```html
<!-- Remover ou comentar: -->
<!-- <div class="ebook-placeholder">...</div> -->

<!-- Descomentar: -->
<img src="assets/capa-ebook.png" alt="Capa do E-book" class="ebook-cover-img">
```

### 3. Adicionar o PDF do E-book

1. Salve o arquivo PDF do e-book na pasta `assets/` como `trilhas-transformacao-tech.pdf`
2. O link de download já está configurado na página de agradecimento

### 4. Testar Localmente

Simplesmente abra o arquivo `index.html` em seu navegador ou use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## 🎨 Personalização

### Cores

As cores principais estão definidas no arquivo `styles.css` nas variáveis CSS (`:root`):

```css
--primary-color: #8b5cf6;      /* Roxo principal */
--secondary-color: #06b6d4;    /* Azul secundário */
--accent-color: #f59e0b;       /* Amarelo destaque */
```

### Fontes

O projeto usa a fonte **Inter** do Google Fonts. Para alterar, modifique no `<head>` do HTML.

### Redes Sociais

Atualize os links das redes sociais no rodapé do `index.html` (linha ~475):

```html
<a href="SEU_GITHUB" target="_blank">GitHub</a>
<a href="SEU_LINKEDIN" target="_blank">LinkedIn</a>
<a href="SEU_PERFIL_DIO" target="_blank">DIO</a>
```

## 📱 Responsividade

A landing page é totalmente responsiva e funciona perfeitamente em:

- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1440px+)

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com variáveis CSS
- **JavaScript (Vanilla)** - Interatividade
- **Google Fonts** - Tipografia (Inter)

## 📊 Integração com Ferramentas

### Google Analytics

Adicione seu código do Google Analytics no `<head>` do `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Email Marketing (MailChimp, ConvertKit, etc.)

No arquivo `script.js`, na função `simulateFormSubmission`, substitua pela chamada da API do seu provedor de email:

```javascript
async function submitToEmailService(data) {
    const response = await fetch('SUA_API_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return response.json();
}
```

## 🚀 Deploy

### GitHub Pages

1. Faça push do projeto para um repositório GitHub
2. Vá em Settings > Pages
3. Selecione a branch `main` e pasta `root`
4. Clique em Save

### Netlify

1. Arraste a pasta do projeto para [Netlify Drop](https://app.netlify.com/drop)
2. Ou conecte seu repositório GitHub

### Vercel

```bash
npm i -g vercel
vercel
```

## 📝 To-Do / Melhorias Futuras

- [ ] Adicionar validação backend do formulário
- [ ] Integrar com API de email marketing
- [ ] Adicionar mais animações
- [ ] Criar versão dark/light mode toggle
- [ ] Adicionar seção de depoimentos
- [ ] Implementar compartilhamento social
- [ ] Adicionar contador de downloads

## 📄 Licença

Este projeto foi criado para **Márcio Gil** - Embaixador DIO Campus Expert.

## 👨‍💻 Sobre o Autor

**Márcio Gil**

🎓 **Estudante de Engenharia de Software**  
🌟 **Embaixador DIO Campus Expert**

Apaixonado por **educação, inovação, tecnologia e justiça social**. Acredito que a tecnologia pode ser uma ponte para transformar vidas e criar oportunidades para todos.

### 🔗 Conecte-se Comigo

- **LinkedIn**: [linkedin.com/in/márcio-gil-1b7669309](https://linkedin.com/in/márcio-gil-1b7669309)
- **GitHub**: [github.com/MarcioGil](https://github.com/MarcioGil)
- **Portfólio**: [marciogil.github.io/curriculum-vitae](https://marciogil.github.io/curriculum-vitae/)
- **Repositório do Projeto**: [github.com/MarcioGil/E-book-Bootcamp](https://github.com/MarcioGil/E-book-Bootcamp)

---

💜 **Feito com amor para a comunidade tech!**

🚀 **Transforme curiosidade em carreira com propósito.**

✨ **"Educação e tecnologia são as ferramentas mais poderosas para transformar o mundo."** - Márcio Gil
