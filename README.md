# Video Income Studio

Estudio experimental de videos originales orientado a YouTube, TikTok, Facebook y trabajos para negocios. **Sin servicios pagos por defecto.**

## Estado (2026-11-03)
- Piloto 01: video vertical de 30 segundos, 720x1280, generado localmente con FFmpeg **sin audio**.
- Código Remotion: preparado como plantilla, **no instalado ni renderizado**.
- MoneyPrinterTurbo: auditado documentalmente, **no instalado ni probado**.
- Publicación en redes: pendiente.

## Directorios
- `scripts/`: guiones originales
- `templates/remotion/`: proyecto editable de animaciones
- `docs/`: auditoría y checklist de publicación
- `analytics/`: métricas e ingresos

Los archivos MP4 y multimedia grandes se mantienen fuera de Git. No se incluyen secretos ni claves API.

## Piloto Remotion
```bash
cd templates/remotion
npm install
npm run start
npm run render
```
Estos comandos son para pruebas en un entorno independiente; aún no se verificaron en el equipo del usuario.

## Criterios
Contenido propio, comprobación técnica, revisión humana y presupuesto de APIs de G. 0 antes de cualquier publicación. Licencias de música, imágenes y voces se revisan por separado.
