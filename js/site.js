/* Glutect · código comum a todas as páginas
 *
 * O QUE SE EDITA AQUI:
 *   1. VIDEO_YOUTUBE  -> o código do vídeo/pitch no YouTube
 *   2. PARCEIROS      -> logótipos das entidades parceiras científicas (rodapé)
 *   3. PATROCINADORES -> logótipos dos patrocinadores (rodapé)
 */

// 1. Vídeo/pitch. Cola aqui só o código do vídeo, a parte depois de "watch?v=".
//    Exemplo: em https://www.youtube.com/watch?v=abc123XYZ o código é "abc123XYZ".
//    Enquanto estiver vazio, a página mostra um aviso no lugar do vídeo.
const VIDEO_YOUTUBE = "";

// 2. Parceiros científicos. Para juntar um: copia o logo para a pasta img/ e acrescenta uma linha.
const PARCEIROS = [
  { nome: "FEUP · Faculdade de Engenharia da Universidade do Porto", logo: "img/logo-feup.png", site: "https://sigarra.up.pt/feup/" },
];

// 3. Patrocinadores. Enquanto a lista estiver vazia, o grupo não aparece no rodapé.
const PATROCINADORES = [
  // { nome: "Nome do patrocinador", logo: "img/logo-patrocinador.png", site: "https://..." },
];

/* ---------- A partir daqui não é preciso mexer ---------- */

// As páginas em inglês estão dentro de en/, por isso os caminhos das imagens começam por "../".
const RAIZ = document.body.dataset.raiz || "";

function preencherLogos(idGrupo, lista) {
  const grupo = document.getElementById(idGrupo);
  if (!grupo) return;
  if (lista.length === 0) { grupo.hidden = true; return; }
  const ul = grupo.querySelector("ul");
  for (const entidade of lista) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = RAIZ + entidade.logo;
    img.alt = entidade.nome;
    img.loading = "lazy";
    let caixa;
    if (entidade.site) {
      caixa = document.createElement("a");
      caixa.href = entidade.site;
      caixa.target = "_blank";
      caixa.rel = "noopener";
      caixa.title = entidade.nome;
    } else {
      caixa = document.createElement("span");
    }
    caixa.appendChild(img);
    li.appendChild(caixa);
    ul.appendChild(li);
  }
}

function prepararVideo() {
  const caixa = document.getElementById("video");
  if (!caixa || !VIDEO_YOUTUBE) return;
  const ingles = document.documentElement.lang.startsWith("en");
  const iframe = document.createElement("iframe");
  // cc_load_policy=1 liga as legendas; cc_lang_pref=en escolhe as legendas em inglês.
  iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(VIDEO_YOUTUBE) +
    "?cc_load_policy=1&cc_lang_pref=en&hl=" + (ingles ? "en" : "pt") + "&rel=0";
  iframe.title = ingles ? "Glutect pitch video" : "Vídeo de apresentação do Glutect";
  iframe.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen";
  iframe.allowFullscreen = true;
  caixa.replaceChildren(iframe);
}

function prepararMenu() {
  const botao = document.querySelector(".botao-menu");
  const menu = document.getElementById("menu");
  if (!botao || !menu) return;
  const fechar = () => { menu.classList.remove("aberto"); botao.setAttribute("aria-expanded", "false"); };
  botao.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", String(aberto));
  });
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) fechar(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") fechar(); });
}

// O botão PT | EN leva à mesma secção na outra língua (as secções têm o mesmo id nas duas).
function prepararLingua() {
  const outra = document.querySelector(".lingua a");
  if (!outra) return;
  outra.addEventListener("click", () => {
    if (location.hash) outra.href = outra.getAttribute("href").split("#")[0] + location.hash;
  });
}

preencherLogos("grupo-parceiros", PARCEIROS);
preencherLogos("grupo-patrocinadores", PATROCINADORES);
prepararVideo();
prepararMenu();
prepararLingua();
