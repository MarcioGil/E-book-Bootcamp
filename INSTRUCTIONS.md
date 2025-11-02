# 📝 INSTRUÇÕES - Configuração do Projeto

## ℹ️ Importante: Não Precisa de PDF

Este projeto **NÃO requer um arquivo PDF**. O e-book é apresentado diretamente na landing page através dos cards interativos com os bootcamps.

**O que os visitantes recebem:**
- ✅ Acesso completo às 6 trilhas de tecnologia
- ✅ Mais de 12 bootcamps selecionados com links diretos
- ✅ Código de indicação já incluído nos links
- ✅ Toda a informação necessária para começar

---

## 🖼️ Como Adicionar a Capa do E-book (Opcional)

### Passo 1: Adicionar a Imagem da Capa

1. Salve a imagem da capa do e-book na pasta **`assets/`**
2. Nomeie o arquivo como: `capa-ebook.png` ou `capa-ebook.jpg`
3. Formatos recomendados: PNG, JPG ou WebP
4. Tamanho recomendado: 400x550px (ou proporcional)

### Passo 2: Atualizar o HTML

Abra o arquivo `index.html` e localize a seção Hero (linha ~84).

**Encontre este código:**

```html
<div class="ebook-placeholder">
    <div class="ebook-icon">📚</div>
    <p class="ebook-title">Trilhas da<br>Transformação<br>Tech</p>
    <p class="ebook-author">Por Márcio Gil</p>
</div>
```

**Substitua por:**

```html
<img src="assets/capa-ebook.png" alt="Capa do E-book Trilhas da Transformação Tech" class="ebook-cover-img">
```

### Passo 3: Adicionar Estilo CSS (opcional)

Se necessário, adicione este estilo no arquivo `styles.css`:

```css
.ebook-cover-img {
    max-width: 400px;
    width: 100%;
    height: auto;
    border-radius: var(--radius-lg);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5),
                0 0 40px rgba(139, 92, 246, 0.2);
    animation: float 6s ease-in-out infinite;
}
```

---

## � Como Integrar com Email Marketing (Opcional)

### Opção 1: Google Forms

1. Crie um formulário no Google Forms
2. Obtenha o link de ação do formulário
3. No arquivo `script.js`, substitua a função de envio

### Opção 2: MailChimp

1. Crie uma lista no MailChimp
2. Gere um formulário e obtenha a action URL
3. Atualize o formulário no HTML ou JavaScript

### Opção 3: ConvertKit / RD Station

Similar aos anteriores, basta integrar a API deles no `script.js`.

**Exemplo de integração básica:**

```javascript
async function submitToEmailService(data) {
    const response = await fetch('https://api.seuservico.com/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer SEU_TOKEN'
        },
        body: JSON.stringify({
            email: data.email,
            name: data.name,
            tags: ['ebook-trilhas-tech']
        })
    });
    
    return response.json();
}
```

---

## 🚀 Como Publicar o Site

### Opção 1: GitHub Pages (Grátis)

1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos
3. Vá em **Settings > Pages**
4. Selecione branch `main` e pasta `/root`
5. Seu site estará em: `https://SEU_USUARIO.github.io/NOME_DO_REPO`

### Opção 2: Netlify (Grátis)

1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta do projeto
3. Site publicado instantaneamente!
4. Você pode conectar um domínio próprio

### Opção 3: Vercel (Grátis)

1. Acesse [vercel.com](https://vercel.com)
2. Conecte seu GitHub ou faça upload
3. Deploy automático

---

## ✅ Checklist Final Antes de Publicar

- [ ] Adicionar imagem da capa do e-book
- [ ] Adicionar PDF do e-book
- [ ] Atualizar links das redes sociais
- [ ] Testar formulário localmente
- [ ] Verificar responsividade no mobile
- [ ] Testar todos os links dos bootcamps
- [ ] **Testar recursos de acessibilidade (leitura por voz)**
- [ ] **Testar navegação por teclado**
- [ ] Adicionar Google Analytics (opcional)
- [ ] Integrar com email marketing (opcional)
- [ ] Fazer deploy do site

---

## ♿ Recursos de Acessibilidade

### Como Testar

1. **Abra a página** no navegador
2. Clique no botão **♿** no lado direito da tela
3. Teste os recursos:
   - ✅ Leitura por voz (Alt + R)
   - ✅ Aumentar/diminuir fonte
   - ✅ Alto contraste
   - ✅ Navegação por teclado (Tab)

### Atalhos de Teclado

- `Alt + A` - Abrir menu de acessibilidade
- `Alt + R` - Ler página inteira
- `Alt + S` - Parar leitura
- `Alt + +` - Aumentar fonte
- `Alt + -` - Diminuir fonte
- `Alt + C` - Alto contraste

📖 **Guia completo**: Veja `ACCESSIBILITY-GUIDE.md`

---

## 🆘 Precisa de Ajuda?

Se tiver dúvidas ou problemas:

1. Verifique se todos os arquivos estão na pasta correta
2. Abra o Console do navegador (F12) para ver erros
3. Teste em diferentes navegadores
4. Verifique os caminhos dos arquivos

---

## 📂 Estrutura Final Esperada

```
E-book-Bootcamp/
├── index.html
├── thank-you.html
├── styles.css
├── script.js
├── README.md
├── INSTRUCTIONS.md (este arquivo)
└── assets/
    ├── capa-ebook.png  ← ADICIONAR AQUI
    └── trilhas-transformacao-tech.pdf  ← ADICIONAR AQUI
```

---

💜 **Sucesso com seu e-book!**
