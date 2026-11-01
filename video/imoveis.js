/* ==========================================================================
   OIKOS · Base do vídeo de imóveis
   --------------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar.
   - Troque os imóveis de exemplo pelos seus.
   - Fotos: coloque os arquivos em video/fotos/ e liste em "fotos".
     Ex.: fotos: ["fotos/cabo-branco-1.jpg", "fotos/cabo-branco-2.jpg"]
     Sem fotos, o vídeo usa um fundo ilustrativo da marca.
   - Apague a linha  exemplo: true  quando o imóvel for real
     (ela mostra a etiqueta "Imóvel ilustrativo" no vídeo).
   ========================================================================== */

window.VIDEO_DATA = {
  config: {
    fps: 30,
    segundosAbertura: 3.5,
    segundosPorImovel: 4.5,
    segundosEncerramento: 4.5,
    // Música opcional (mp3/m4a/wav), ex.: "musica/trilha.mp3". Vazio = sem áudio.
    musica: "",
  },

  marca: {
    nome: "OIKOS",
    sub: "Imobiliária",
    chamada: "Imóveis selecionados",
    cidade: "João Pessoa · PB",
  },

  contato: {
    titulo: "Agende sua visita",
    whatsapp: "(21) 99999-9999",
    instagram: "@oikosimobiliaria",
    creci: "CRECI-PB",
  },

  imoveis: [
    {
      exemplo: true,
      selo: "Exclusivo",
      titulo: "Apartamento de Alto Padrão",
      bairro: "Cabo Branco",
      cidade: "João Pessoa, PB",
      preco: "R$ 2.850.000",
      area: "180 m²",
      quartos: "3 Suítes",
      vagas: "2 Vagas",
      fotos: [],
    },
    {
      exemplo: true,
      selo: "Novo",
      titulo: "Cobertura Duplex Vista Mar",
      bairro: "Manaíra",
      cidade: "João Pessoa, PB",
      preco: "R$ 5.200.000",
      area: "320 m²",
      quartos: "4 Suítes",
      vagas: "3 Vagas",
      fotos: [],
    },
    {
      exemplo: true,
      selo: "Destaque",
      titulo: "Casa em Condomínio de Luxo",
      bairro: "Altiplano",
      cidade: "João Pessoa, PB",
      preco: "R$ 4.800.000",
      area: "450 m²",
      quartos: "5 Suítes",
      vagas: "4 Vagas",
      fotos: [],
    },
    {
      exemplo: true,
      selo: "Lançamento",
      titulo: "Apartamento Garden Luxo",
      bairro: "Tambaú",
      cidade: "João Pessoa, PB",
      preco: "R$ 1.750.000",
      area: "145 m²",
      quartos: "3 Suítes",
      vagas: "2 Vagas",
      fotos: [],
    },
    {
      exemplo: true,
      selo: "Exclusivo",
      titulo: "Penthouse 360° Vista Mar",
      bairro: "Bessa",
      cidade: "João Pessoa, PB",
      preco: "R$ 7.900.000",
      area: "520 m²",
      quartos: "5 Suítes",
      vagas: "4 Vagas",
      fotos: [],
    },
    {
      exemplo: true,
      selo: "Oportunidade",
      titulo: "Casa à Beira-Mar Completa",
      bairro: "Intermares",
      cidade: "Cabedelo, PB",
      preco: "R$ 3.600.000",
      area: "380 m²",
      quartos: "4 Quartos",
      vagas: "3 Vagas",
      fotos: [],
    },
  ],
};
