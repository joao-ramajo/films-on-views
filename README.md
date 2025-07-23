
# FilmsOnViews


## Descrição

O projeto "FilmsOnViews" é uma plataforma de exibição de filmes que apresenta informações sobre produções animadas do Studio Ghibli, como "A Viagem de Chihiro" e "Castelo Animado". Ele permite que os usuários visualizem trailers, leiam resumos dos filmes e assistam aos filmes diretamente no site.

---

## Funcionalidades

- **Mudança de idioma**: O site oferece suporte a três idiomas: português, inglês e japonês. O usuário pode alternar entre esses idiomas de maneira intuitiva.
- **Detalhes do filme**: Para cada filme, o usuário pode ver um resumo, informações sobre o diretor Hayao Miyazaki e links para redes sociais do Studio Ghibli.
- **Trailer e links para filmes**: O site contém vídeos promocionais (trailers) e links para assistir aos filmes na plataforma Netflix.
- **Interface adaptável**: O design do site é responsivo, garantindo uma boa experiência em diferentes dispositivos.

---

## Estrutura de Diretórios

```plaintext
├── index.html               # Página principal (A Viagem de Chihiro)
├── howlsCastle.html         # Página para "Castelo Animado"
├── scss/
│   ├── main.css             # Estilos principais
│   ├── howlcastle.css       # Estilos específicos para "Castelo Animado"
├── img/                     # Imagens utilizadas no projeto
│   ├── chihiro/             # Imagens para "A Viagem de Chihiro"
│   ├── howl/                # Imagens para "Castelo Animado"
├── js/                      # Scripts JavaScript
│   ├── changeLang.js        # Script para troca de idiomas
│   ├── changeLang_howl.js   # Script de troca de idioma para "Castelo Animado"
│   ├── links.js             # Script para redirecionamento de links
└── audio/                   # Arquivos de áudio
    ├── spiritaway.mp3       # Áudio para "A Viagem de Chihiro"
```

---

## Como Usar

1. **Instalação**:
    - Clone o repositório para sua máquina local:
      ```bash
      git clone https://github.com/LacamJC/FilmsOnViews.git
      ```
    - Navegue até o diretório do projeto:
      ```bash
      cd FilmsOnViews
      ```
    - Abra o arquivo `index.html` ou `howlsCastle.html` no seu navegador.

2. **Alternando Idiomas**:
    - Na interface, clique em um dos idiomas disponíveis: **pt-BR**, **en-US** ou **ja-JP**.
    - A troca de idioma ocorre automaticamente para os títulos, resumos e botões.

3. **Assistir ao Filme**:
    - Clique no botão **"Assistir agora"** para acessar o filme no Netflix.
    - Clique no link **"Assista o trailer"** para ver o trailer do filme no YouTube.

---

## Tecnologias Utilizadas

- **HTML5**: Estruturação do conteúdo web.
- **CSS3**: Estilos e design do site.
- **JavaScript**: Interatividade, como troca de idiomas e redirecionamento de links.
- **SCSS**: Pré-processador CSS utilizado para melhor organização dos estilos.
- **Áudio MP3**: Utilizado para a reprodução de trilhas sonoras dos filmes.

---



