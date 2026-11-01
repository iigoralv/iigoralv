/* ==========================================================================
   OIKOS · Roteiro do vídeo (Reels 9:16)
   --------------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar.

   Cada item de "cenas" é um corte do vídeo, na ordem em que aparece.
   O tempo é contado em BATIDAS da música (bpm 120 → 1 batida = 0,5 s),
   assim os cortes caem no ritmo quando você coloca o áudio no Instagram.

   Campos de uma cena:
     foto       arquivo em video/fotos/
     legenda    texto pequeno em caixa alta (ex.: "LIVING")
     titulo     texto grande em itálico (ex.: "integrado")
     batidas    duração (2 = 1 s, 3 = 1,5 s, 4 = 2 s…)
     movimento  "zoom-in" | "zoom-out" | "pan-direita" | "pan-esquerda"
     transicao  "corte" | "flash" | "whip" | "zoom"
     foco       0 a 1: parte da foto que fica em destaque (0 = esquerda, 1 = direita)
     tipo       "gancho" (abertura), "secao" (cartela de capítulo) ou "final"
   ========================================================================== */

window.VIDEO_DATA = {
  config: {
    fps: 30,
    bpm: 120,
    // Música opcional (mp3/m4a/wav), ex.: "musica/trilha.mp3".
    // Vazio = vídeo sem som (recomendado: escolha o áudio em alta no Instagram).
    musica: "",
  },

  marca: { nome: "OIKOS", sub: "Imobiliária" },

  contato: {
    titulo: "Agende sua visita",
    whatsapp: "(21) 99999-9999",
    instagram: "@oikosimobiliaria",
  },

  rodape: "Imagens meramente ilustrativas",

  cenas: [
    { tipo: "gancho", foto: "fotos/rooftop-piscina.jpg", legenda: "Imagina morar aqui?", titulo: "Piscina no rooftop", batidas: 5, movimento: "zoom-in", foco: 0.55 },
    { foto: "fotos/fachada.jpg", legenda: "Arquitetura", titulo: "que impressiona", batidas: 4, movimento: "zoom-in", transicao: "flash", foco: 0.62 },
    { foto: "fotos/hall.jpg", legenda: "Hall de entrada", titulo: "sofisticado", batidas: 3, movimento: "zoom-in", transicao: "whip", foco: 0.45 },

    { tipo: "secao", foto: "fotos/living-painel.jpg", numero: "01", titulo: "O apartamento", batidas: 2, transicao: "flash" },
    { foto: "fotos/living-painel.jpg", legenda: "Living", titulo: "integrado", batidas: 4, movimento: "pan-direita", transicao: "zoom" },
    { foto: "fotos/cozinha-verde.jpg", legenda: "Cozinha", titulo: "e jantar", batidas: 3, movimento: "zoom-in", transicao: "whip", foco: 0.7 },
    { foto: "fotos/living-cozinha.jpg", legenda: "Ambientes", titulo: "amplos e iluminados", batidas: 3, movimento: "pan-esquerda", transicao: "whip" },
    { foto: "fotos/cozinha-corredor.jpg", batidas: 2, movimento: "zoom-in", transicao: "corte", foco: 0.6 },
    { foto: "fotos/cozinha-jantar.jpg", batidas: 2, movimento: "zoom-out", transicao: "corte", foco: 0.45 },
    { foto: "fotos/banheiro.jpg", legenda: "Acabamento", titulo: "sofisticado", batidas: 3, movimento: "zoom-in", transicao: "whip", foco: 0.55 },

    { tipo: "secao", foto: "fotos/piscina-gourmet.jpg", numero: "02", titulo: "Lazer no rooftop", batidas: 2, transicao: "flash" },
    { foto: "fotos/piscina-gourmet.jpg", legenda: "Piscina", titulo: "e espaço gourmet", batidas: 4, movimento: "pan-direita", transicao: "zoom" },
    { foto: "fotos/rooftop-lounge.jpg", legenda: "Lounge", titulo: "com vista para a cidade", batidas: 3, movimento: "zoom-in", transicao: "whip", foco: 0.7 },
    { foto: "fotos/rooftop-deck.jpg", legenda: "Deck", titulo: "com paisagismo", batidas: 3, movimento: "pan-esquerda", transicao: "whip" },
    { foto: "fotos/brinquedoteca.jpg", legenda: "Brinquedoteca", titulo: "para as crianças", batidas: 3, movimento: "zoom-in", transicao: "whip", foco: 0.5 },

    { tipo: "final", foto: "fotos/fachada.jpg", batidas: 9, transicao: "flash", foco: 0.6 },
  ],
};
