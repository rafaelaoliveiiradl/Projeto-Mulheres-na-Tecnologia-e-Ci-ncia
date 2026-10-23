# Mulheres na Tecnologia e Ciência

Projeto web interativo desenvolvido com o objetivo de promover a inclusão digital e destacar a contribuição histórica e atual das mulheres nas áreas de Ciência e Tecnologia.

---

## Sobre o Projeto

Esta aplicação foi desenvolvida como projeto prático para avaliação oral de Desenvolvimento Web. O site apresenta uma estrutura semântica, layout flexível e responsivo com Flexbox, e um formulário interativo em JavaScript que gera recomendações de estudo personalizadas sem recarregar a página.

---

##  Tecnologias Utilizadas

* **HTML5 Semântico:** Estruturação acessível e otimizada (`<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<form>`).
* **CSS3 (Flexbox):** Layout flexível e alinhamento responsivo utilizando `display: flex`, `flex-direction`, `justify-content`, `align-items` e proporções com `flex`.
* **JavaScript (ES6+):** Manipulação do DOM em tempo real, prevenção do recarregamento padrão (`event.preventDefault()`), seletores múltiplos (`querySelectorAll`), lógica condicional (`if / else if`), laços de repetição (`.forEach()`) e interpolação com **Template Literals**.

---

##  Destaques da Implementação Técnica

### 1. HTML5 Semântico & Acessibilidade
- **Separação Estrutural:** Uso de tags semânticas para identificação clara dos blocos do site.
- **Acessibilidade no Formulário:** Conexão explícita entre etiquetas e campos de entrada utilizando os atributos `for` e `id` idênticos.
- **Validações Nativas:** Aplicação dos atributos `required`, `placeholder`, `min` e `max` para integridade dos dados inseridos.

### 2. Layout Flexível com Flexbox (CSS3)
- **Estrutura Geral (`.conteudo-principal`):** Uso de `flex-direction: column` para empilhar verticalmente o cabeçalho e a seção de conteúdo.
- **Bloco de Imagem e Texto (`.bloco-imagem-texto`):** Configuração com `flex-direction: row` e `align-items: flex-start` para alinhar a imagem de Ada Lovelace ao lado do texto.
- **Divisão Lado a Lado (`.linha-inferior`):** Posicionamento horizontal de artigos e barra lateral (`<aside>`), utilizando as proporções `flex: 2` (para o conteúdo principal de iniciativas) e `flex: 1` (para a barra lateral de estatísticas e dicas).

### 3. Interatividade e DOM (JavaScript)
- **Bloqueio de Recarregamento:** Uso de `event.preventDefault()` no evento `submit` para manter a experiência dinâmica em página única (SPA-like).
- **Seleção Dinâmica de Elementos:** Captura de checkboxes marcados via `querySelectorAll('input[name="interesse"]:checked')`.
- **Validação e Regra de Negócio:**
  - Verificação de seleção nula (`length === 0`) exibindo um aviso de erro amigável.
  - Varredura de opções com `.forEach()` e blocos `if / else if` para compilar recomendações personalizadas.
- **Injeção de Conteúdo:** Construção de blocos HTML via **Template Literals** (crases e `${variavel}`) e atualização dinâmica no DOM alterando o estilo (`display: block`) e preenchendo a propriedade `innerHTML`.

---

## 🖥️ Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone [https://github.com/seu-usuario/mulheres-na-tecnologia.git](https://github.com/seu-usuario/mulheres-na-tecnologia.git)
