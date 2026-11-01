# Vídeo de imóveis — OIKOS

Base para gerar um vídeo vertical (1080×1920, 9:16) para Reels, Stories, TikTok e WhatsApp.

## Arquivos

| Arquivo | Para quê |
|---|---|
| `imoveis.js` | **O único arquivo que você edita**: imóveis, contato, tempos e música |
| `fotos/` | Coloque aqui as fotos dos imóveis |
| `modelo.html` | Prévia interativa: abra no navegador (play/pause, barra de tempo, espaço = play) |
| `gerar-video.js` | Gera o MP4 |
| `oikos-imoveis.mp4` | Vídeo gerado com os imóveis de exemplo |

## Como usar

1. Edite `imoveis.js`: troque os dados, coloque as fotos em `fotos/` e liste em `fotos: ["fotos/arquivo.jpg"]`.
   Várias fotos por imóvel = elas se alternam durante a cena.
   Apague `exemplo: true` dos imóveis reais (remove a etiqueta "Imóvel ilustrativo").
2. Abra `modelo.html` no navegador para conferir.
3. Gere o vídeo:

```bash
npm install playwright && npx playwright install chromium   # só na primeira vez
node video/gerar-video.js                                   # cria video/oikos-imoveis.mp4
```

Precisa de Node 18+ e [ffmpeg](https://ffmpeg.org) instalado.

Duração = abertura + (segundos por imóvel × nº de imóveis) + encerramento. Com 6 imóveis: 35 s.
Fontes Playfair Display e Inter (licença OFL) estão em `fonts/`.
