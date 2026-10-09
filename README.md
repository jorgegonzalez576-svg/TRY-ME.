# Try Me

Juegos para parejas: **Connect**, **Roll** y **Crave**. App web estática (HTML/CSS/JS sin compilación), pensada para iPhone y Safari.

Rediseño visual 1a «Objetos de una noche en casa» integrado (ver `design_handoff_try_me_1a/`).

## Organización
- `index.html`: estructura de la app, Inicio, splash y todo Crave (motor, catálogo y pantallas).
- `shell.js`: encabezado común (volver · nombre · ES/EN · menú), ambiente fotográfico y avisos.
- `app-settings.js`: hoja de Ajustes (idioma, sonido, vibración, animaciones, nombres, privacidad).
- `css/tokens.css`: tokens de diseño por juego (`data-game`) y nivel (`data-level`).
- `css/app.css`: lienzo, botones, hojas, modal, toast, splash, Inicio y Ajustes.
- `css/crave.css`: pantallas de Crave.
- `connect/`: motor, catálogo, interfaz, objetos animados y estilos de Connect.
- `roll/`: motor, catálogo, interfaz y estilos de Roll.
- `fonts/`: Gloock y Figtree autoalojadas (WOFF2, latin + latin-ext, licencia OFL).
- `ambient/`: fotos de ambiente aprobadas y textura de grano.

## Ejecutar
    python3 -m http.server 8000
Abre http://localhost:8000. No requiere internet.

## Regla nueva (aprobada)
Crave · Pasar turno antes de empezar la carta cuesta 1 punto (el marcador nunca baja de 0), con hoja de confirmación.
