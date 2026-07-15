# Spotify Plus

Userscript para o Spotify Web Player desenvolvido por Diones Souza com Tampermonkey.

[![Licença MIT](https://img.shields.io/badge/licença-MIT-green)](LICENSE)
[![Tampermonkey](https://img.shields.io/badge/Tampermonkey-suportado-orange)](https://www.tampermonkey.net/)

[![Instalar](https://img.shields.io/badge/Instalar-Userscript-blue?style=for-the-badge&logo=Tampermonkey)](https://raw.githubusercontent.com/dionesrosa/Spotify-Plus/main/dist/Spotify-Plus.user.js)

---

## ✨ O que o script faz

Este userscript remove o botão de upgrade do Spotify Web Player para deixar a interface mais limpa durante o uso.

## 🔧 Funcionalidades

- Esconde o botão de upgrade da interface
- Mantém a experiência mais simples e menos invasiva
- Funciona automaticamente ao carregar a página

## 🚀 Instalação

1. Instale a extensão [Tampermonkey](https://www.tampermonkey.net/) no navegador.
2. Instale o userscript disponível no link acima.
3. Acesse o Spotify Web Player normalmente.

## 🖱️ Como usar

O script entra em ação automaticamente assim que a página carregar. Não é necessário configurar nada manualmente.

## 🛠️ Compilação com userscript-builder

Esta seção é destinada a desenvolvedores que quiserem gerar e publicar o userscript localmente.

O [userscript-builder](https://github.com/dionesrosa/userscript-builder) lê os metadados do arquivo [userscript.config.json](userscript.config.json), usa a entrada principal em [src/index.js](src/index.js) e gera o arquivo final com o cabeçalho do Tampermonkey automaticamente.

### Comandos mais usados

- `usb build` — gera o arquivo final em `dist/`
- `usb release patch|minor|major` — atualiza a versão e cria um release
- `usb publish` — publica o build no GitHub Releases

> Para quem apenas vai usar o script, o fluxo mais simples é instalar o userscript diretamente pelo link de instalação acima.

## 🧩 Estrutura do projeto

- [src/index.js](src/index.js): lógica principal do userscript
- [userscript.config.json](userscript.config.json): metadados e configuração do build

## 👤 Autor

Diones Souza

## 📜 Licença

MIT
