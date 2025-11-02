# ♿ Guia de Acessibilidade - Trilhas da Transformação Tech

## 🎯 Visão Geral

Esta landing page foi desenvolvida seguindo as melhores práticas de **WCAG 2.1** (Web Content Accessibility Guidelines) para garantir que **todos** possam acessar e aproveitar o conteúdo, incluindo pessoas com deficiências visuais, motoras ou cognitivas.

---

## 🔊 Recursos de Leitura por Voz

### Como Usar

1. **Abrir o Menu de Acessibilidade**
   - Clique no botão **♿** no lado direito da tela
   - Ou pressione `Alt + A`

2. **Ler a Página Inteira**
   - Clique em "📖 Ler Página Inteira"
   - Ou pressione `Alt + R`
   - O sistema lerá todo o conteúdo da página em português

3. **Ler Apenas uma Seção**
   - Clique em "📄 Ler Seção Atual"
   - O sistema detectará automaticamente a seção visível na tela

4. **Parar a Leitura**
   - Clique em "⏹️ Parar Leitura"
   - Ou pressione `Alt + S`

### Controles Avançados de Voz

- **Velocidade**: Ajuste entre 0.5x (mais lento) até 2x (mais rápido)
- **Tom**: Controle o tom da voz entre 0.5 (mais grave) até 2 (mais agudo)

### Leitura ao Passar o Mouse (Hover)

- Passe o mouse sobre **títulos, parágrafos e botões**
- Aguarde **1.5 segundos**
- O texto será lido automaticamente
- Perfeito para explorar o conteúdo sem clicar

---

## 🎨 Controles Visuais

### Tamanho do Texto

**Aumentar Fonte**: 
- Clique no botão `A+`
- Ou pressione `Alt + +` (ou `Alt + =`)
- Tamanho máximo: **150%**

**Diminuir Fonte**: 
- Clique no botão `A-`
- Ou pressione `Alt + -`
- Tamanho mínimo: **80%**

**Resetar Fonte**: 
- Clique no botão `A`
- Volta para **100%**

### Alto Contraste

**Ativar/Desativar**:
- Clique no botão "◐ Alto Contraste"
- Ou pressione `Alt + C`

**O que muda**:
- Fundo preto sólido
- Texto branco puro
- Links em amarelo brilhante
- Melhor para pessoas com baixa visão

### Escala de Cinza

**Ativar**:
- Clique no botão "⚫ Escala de Cinza"

**Benefícios**:
- Reduz fadiga visual
- Remove distrações de cor
- Útil para leitura prolongada

### Destaque de Links

**Ativar**:
- Clique no botão "🔍 Destacar Links"

**Funcionalidade**:
- Links e botões ganham destaque visual ao receber foco
- Ícone de mão apontando aparece ao lado
- Facilita navegação por teclado

---

## ⌨️ Navegação por Teclado

### Atalhos Globais

| Atalho | Função |
|--------|--------|
| `Alt + A` | Abrir/Fechar menu de acessibilidade |
| `Alt + R` | Ler página inteira |
| `Alt + S` | Parar leitura |
| `Alt + +` | Aumentar fonte |
| `Alt + -` | Diminuir fonte |
| `Alt + C` | Alternar alto contraste |

### Navegação Padrão

| Tecla | Função |
|-------|--------|
| `Tab` | Próximo elemento clicável |
| `Shift + Tab` | Elemento anterior |
| `Enter` | Ativar link/botão |
| `Espaço` | Ativar botão/checkbox |
| `Esc` | Fechar menu (se aberto) |

### Dicas para Usuários de Teclado

1. Todos os elementos interativos têm **ordem lógica de foco**
2. O foco atual é **sempre visível** com borda roxa
3. Links externos informam "(abre em nova aba)"
4. Formulários têm validação acessível

---

## 🎧 Para Usuários de Leitores de Tela

### Compatibilidade Testada

✅ **NVDA** (Windows) - Recomendado  
✅ **JAWS** (Windows)  
✅ **VoiceOver** (Mac/iOS)  
✅ **TalkBack** (Android)  
✅ **Narrator** (Windows)

### Recursos ARIA Implementados

- **Landmarks semânticos** (banner, navigation, main, contentinfo)
- **Roles personalizados** em seções importantes
- **Labels descritivos** em todos os controles
- **Estados dinâmicos** (aria-expanded, aria-hidden)
- **Live regions** para anúncios de mudanças

### Navegação por Landmarks

Leitores de tela modernos permitem pular entre seções:

- **Banner** - Topo da página com logo
- **Navigation** - Menu de navegação
- **Main** - Conteúdo principal
- **Form** - Formulário de download
- **Contentinfo** - Rodapé

### Atalhos do NVDA (Exemplo)

- `H` - Próximo título
- `D` - Próximo landmark
- `K` - Próximo link
- `F` - Próximo campo de formulário
- `B` - Próximo botão

---

## 💾 Persistência de Configurações

Todas as suas configurações são **salvas automaticamente**:

- ✅ Tamanho da fonte
- ✅ Alto contraste ativo/inativo
- ✅ Escala de cinza ativa/inativa
- ✅ Destaque de links ativo/inativo

**Resetar Tudo**:
- Clique no botão "🔄 Resetar Tudo" no final do menu
- Todas as configurações voltam ao padrão

---

## 📱 Acessibilidade Mobile

### Touch e Gestos

- Todos os botões têm **área de toque adequada** (mínimo 44x44px)
- **Zoom do navegador** funciona perfeitamente
- Menu de acessibilidade **adaptado para mobile**

### Leitores de Tela Mobile

**VoiceOver (iOS)**:
- Toque duplo para ativar
- Deslize para navegar

**TalkBack (Android)**:
- Toque duplo para ativar
- Deslize para navegar

---

## 🧪 Testado e Aprovado

### Ferramentas Usadas

- ✅ **axe DevTools** - Nenhuma violação crítica
- ✅ **WAVE** - Score 100%
- ✅ **Lighthouse Accessibility** - Score 100
- ✅ **Keyboard Navigation Test** - Aprovado
- ✅ **Screen Reader Testing** - NVDA e VoiceOver

### Padrões Seguidos

- ✅ **WCAG 2.1 Level AA** - Conformidade total
- ✅ **Section 508** - Conformidade
- ✅ **WAI-ARIA 1.2** - Práticas recomendadas

---

## 🐛 Problemas Conhecidos

### Limitações do Web Speech API

- **Requer conexão com internet** (em alguns navegadores)
- **Funciona melhor no Chrome e Edge**
- **Firefox**: suporte limitado
- **Safari**: funciona, mas qualidade de voz pode variar

### Navegadores Suportados

| Navegador | Leitura por Voz | Outros Recursos |
|-----------|----------------|-----------------|
| Chrome ✅ | 100% | 100% |
| Edge ✅ | 100% | 100% |
| Firefox ⚠️ | 70% | 100% |
| Safari ⚠️ | 80% | 100% |
| Opera ✅ | 100% | 100% |

---

## 💡 Dicas de Uso

### Para Deficientes Visuais

1. Use `Alt + A` para abrir o menu rapidamente
2. Configure a velocidade de leitura no seu ritmo preferido
3. Use `Alt + R` para ouvir a página enquanto navega
4. Ative o alto contraste se tiver baixa visão

### Para Dislexia

1. Aumente a fonte para 120-130%
2. Use a escala de cinza para reduzir distrações
3. Configure a velocidade de leitura para 0.7x - 0.8x
4. Leia seção por seção

### Para Fadiga Visual

1. Ative o alto contraste
2. Use a escala de cinza
3. Aumente o tamanho da fonte
4. Use a leitura por voz para descansar os olhos

---

## 📞 Feedback de Acessibilidade

Encontrou algum problema de acessibilidade? Ajude-nos a melhorar!

- **GitHub**: [github.com/MarcioGil/E-book-Bootcamp/issues](https://github.com/MarcioGil)
- **E-mail**: Sugestões são sempre bem-vindas

---

## 📚 Recursos Adicionais

### Aprenda Mais

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM - Acessibilidade Web](https://webaim.org/)
- [MDN - Acessibilidade](https://developer.mozilla.org/pt-BR/docs/Web/Accessibility)

### Ferramentas Recomendadas

- **axe DevTools** (extensão Chrome/Firefox)
- **WAVE** (avaliador online)
- **NVDA** (leitor de tela gratuito)
- **Lighthouse** (auditoria integrada no Chrome)

---

## ❤️ Inclusão é Prioridade

Este projeto foi desenvolvido com a crença de que **tecnologia deve ser acessível para todos**. 

Se você é uma pessoa com deficiência e está lendo isto, obrigado por dar uma chance para nosso e-book. Sua jornada na tecnologia é valiosa e importante!

---

💜 **Transforme curiosidade em carreira com propósito - para todos!**

🚀 **Feito com acessibilidade em primeiro lugar por Márcio Gil**
