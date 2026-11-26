# Glutect · Detetor de glúten

Site do projeto Glutect, TPC da turma 12.º B do Agrupamento de Escolas da Maia, ano letivo 2026/2027.

Publicado no GitHub Pages: https://mines09.github.io/tpc-glutect-12B-26-27/

## Páginas

| Página | Português | Inglês |
| --- | --- | --- |
| Página principal | `index.html` | `en/index.html` |
| História do logótipo | `historia-logo.html` | `en/logo-history.html` |

As duas línguas têm a mesma estrutura. Quando mudares algo numa página, muda também na versão da outra língua.

## Como editar

- **Textos:** diretamente nos ficheiros `.html`. Os textos por escrever estão marcados com `[PROVISÓRIO]` (PT) e `[PLACEHOLDER]` (EN), e aparecem no site numa caixa amarela tracejada. Antes da entrega, procura essas duas palavras para confirmar que não sobra nenhuma.
- **Vídeo do pitch:** põe o código do vídeo do YouTube em `VIDEO_YOUTUBE`, no início de `js/site.js`.
- **Logótipos do rodapé (parceiros e patrocinadores):** copia o logo para `img/` e acrescenta uma linha às listas `PARCEIROS` ou `PATROCINADORES` em `js/site.js`. O grupo de patrocinadores só aparece quando a lista tiver pelo menos um.
- **Cores e aspeto:** em `css/estilo.css`. As cores estão no início do ficheiro e vêm do logótipo do Glutect.

## Ver no computador

Abre `index.html` no navegador. Para que o vídeo e os links funcionem como no site publicado, podes correr `python3 -m http.server` nesta pasta e abrir http://localhost:8000.
