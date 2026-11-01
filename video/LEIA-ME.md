# Vídeo de imóveis — OIKOS

Base para gerar um vídeo vertical (1080×1920, 9:16) no estilo Reels: cortes no ritmo da música (120 bpm),
zoom de impacto, transições whip/flash, texto entrando palavra por palavra e cartelas de seção.

## Arquivos

| Arquivo | Para quê |
|---|---|
| `imoveis.js` | **O único arquivo que você edita**: roteiro de cenas (foto, texto, duração em batidas, movimento, transição), contato e música |
| `fotos/` | Coloque aqui as fotos dos imóveis |
| `modelo.html` | Prévia interativa: abra no navegador (play/pause, barra de tempo, espaço = play, "área segura" mostra onde a interface do Instagram cobre) |
| `gerar-video.js` | Gera o MP4 |
| `oikos-imoveis.mp4` | Vídeo gerado (27,5 s) |

## Como usar

1. Edite `imoveis.js`: coloque as fotos em `fotos/` e monte a lista de `cenas` (instruções no topo do arquivo).
2. Abra `modelo.html` no navegador para conferir.
3. Gere o vídeo:

```bash
npm install playwright && npx playwright install chromium   # só na primeira vez
node video/gerar-video.js                                   # cria video/oikos-imoveis.mp4
```

Precisa de Node 18+ e [ffmpeg](https://ffmpeg.org) instalado.

Duração = soma das batidas × 0,5 s (a 120 bpm). Sem música, publique e escolha o áudio no próprio Instagram.
Fontes Playfair Display e Inter (licença OFL) estão em `fonts/`.
