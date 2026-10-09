# Handoff: Try Me — Rediseño 1a «Objetos de una noche en casa»

## Overview
Rediseño completo de Try Me (app móvil de juegos para parejas adultas, bilingüe ES-419 / EN). Cubre: splash en forma de conversación, inicio con tres portadas, partida guardada, ajustes, y los tres juegos (Connect, Roll, Crave), con su motion. **No cambia reglas, puntos, cartas ni textos aprobados**, con una excepción aprobada por el cliente: **en Crave, pasar turno antes de empezar cuesta −1 (mínimo 0)**.

## About the Design Files
Los archivos de `reference/` son **referencias de diseño hechas en HTML** (prototipos que muestran aspecto y comportamiento), **no código de producción para copiar**. La tarea es **recrear estos diseños dentro del código existente de Try Me** (HTML/CSS/JS vanilla en `index.html`, `home.css`, `crave*.css`, `app-settings.js`, `connect/`, `roll/`), respetando sus motores (`connect/engine.js`, `roll/engine.js`, lógica de Crave en `index.html`) y catálogos (`connect/data.js`, `roll/data.js`, `catalogueSource` de Crave).
- Abre `reference/TryMeApp.dc.html` (con `support.js` al lado, sirviendo la carpeta: `python3 -m http.server`) para navegar el prototipo. La columna derecha lista todas las pantallas.
- `reference/sistema.dc.html` es el documento de sistema (tokens, componentes, tabla de motion, notas iOS).
- La lógica de los `.dc.html` es demostrativa (datos de ejemplo). **El motor real decide siempre; la UI solo representa su resultado.**

## Fidelity
**Alta fidelidad.** Colores, tipografía, espaciado, radios, sombras y curvas son finales. Recrear pixel-perfect sobre 393×852 pt (iPhone 15/16) y adaptar con fluidez de 320 a 430 pt de ancho.

## Global rules
- Viewport: `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`. App en `position:fixed; inset:0; height:100dvh`. Nunca `100vh`.
- Safe areas: el contenido arranca bajo `env(safe-area-inset-top)` (≈59 pt en iPhone con Dynamic Island); encabezado de partida a top = safe-top + 6. Bloque de botones inferior a `max(42px, env(safe-area-inset-bottom) + 8px)`.
- Margen lateral 20 pt (encabezado 16). Objetivos táctiles ≥ 44×44.
- Hover solo dentro de `@media (hover:hover) and (pointer:fine)`. Estado táctil: `:active { transform: scale(.98) }` + tono 12 % más oscuro, 120 ms.
- `overscroll-behavior:none` en html/body; `contain` en zonas con scroll (hoja de Ajustes).
- Movimiento reducido: `root.dataset.motion = 'reduced'` (ya existe en `app-settings.js`). Con reducido, ninguna animación > 200 ms, sin giros ni vuelos.
- Bilingüe: todo texto desde diccionarios; ningún contenedor de texto con ancho fijo. Diseñado con el español (más largo). `document.documentElement.lang` cambia con el idioma.
- Contraste AA en todos los pares tinta/superficie listados abajo.

## Design Tokens

### Typography
Fuentes: **Gloock** (display, 400) y **Figtree** (400/500/600/700), Google Fonts. Autoalojar en WOFF2 con subconjunto latin + latin-ext. Respaldo: `Georgia, serif` / `system-ui, sans-serif` con `size-adjust`.
| Token | Fuente | Tamaño/interlínea | Uso |
|---|---|---|---|
| display-xl | Gloock 400 | 46–58 / 1.05 | Splash «Try Me.», nivel en subida (64) |
| display-l | Gloock 400 | 34–36 / 1.06 | Títulos de pantalla |
| card-xl | Gloock 400 | 27 / 1.2 (22 si > 90 car.) | Carta Crave |
| card-l | Gloock 400 | 24 / 34 px fijo | Ficha Connect (alineada al renglón de 34) |
| card-m | Gloock 400 | 21 / 1.32 | Naipe Roll |
| title | Gloock 400 | 21 / 1 | Nombre del juego en encabezado |
| body-l | Figtree 500 | 17 / 1.4 | Diálogos |
| body | Figtree 500 | 15 / 1.45 | Apoyo |
| button | Figtree 600 | 16 / 1 (secundario 15) | Botones |
| caption | Figtree 500 | 13 / 1.35 | Roles, notas |
| kicker | Figtree 700 | 10–11 / 1, letter-spacing .2em, MAYÚSCULAS | Etiquetas |
Gloock nunca por debajo de 17 pt. Números de puntos y tiempo con `font-variant-numeric: tabular-nums`.

### Colors — Brand
oxblood #721E19 · paper #EFE8E1 · ink #241A18 · muted #6E605B · line #D9CFC8 · cream #F3EDE8 · control bg #F7F2EE · gain #158353 · loss #C44359 · switch off #CFC5BF.
Splash: fondo radial(120% 70% at 28% 16%, #2E1E1A → #17100F 55% → #0F0B0A); burbuja entrante #2A211F; meta #9C8A80.

### Colors — Connect (aprobada)
wall #E1DBD4 · paper #F6F0ED · paper-back #EAE1DC · mauve #DCCBD3 · taupe #A39590 · ink #473B40 · secondary-ink #62535C · accent #735568 · primary #74586A (pressed #634C5C) · on-primary #FFF9F6 · linen spine #4F3B49→#634C5C→#7C6273 · elastic #33262F/#45343F.

### Colors — Roll (aprobada)
mesa/ink #2E3440 · tray #E2E7ED (borde #D0D8E1) · paper #EEF1F5 · slate #8B97A6 · secondary text on dark #D5DBE3 / #AEB7C3 · red #C1123F (pressed #A30F35, edge #861233) · pink #F6C2CF · dado estilo #2E3440 (edge #14181E) · inputs #CAD1DA.

### Colors — Crave por nivel (aprobadas; = variables `--cp-*` de crave.css)
| Nivel | surface | card | ink | muted | accent | line | dare | dareInk | primary/ink | stop | track | bar/empty |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Chispa / Spark | #EFE6E2 | #FBF8F6 | #241A18 | #6E605B | #721E19 | #DDCFCA | #E6CEC8 | #5A1612 | #721E19/#FFF | #B9A49E | #E9DFDB | #721E19/#DDCFCA |
| Coqueteo / Tease | #E5CBC6 | #F8EEEC | #2A1716 | #6B4E4A | #8A2522 | #D3B5AF | #8A2522 | #FFF3EF | #8A2522/#FFF | #B48A83 | #EBD7D3 | #8A2522/#D3B5AF |
| Pasión / Heat | #9B2621 | #F7ECE9 | #FFF1EC | #F2C9C0 | #FFD3C8 | #B5453E | #5C1310 | #FFF1EC | #F5E6E2/#721E19 | #F2C9C0 | #EDD8D3 | #FFD3C8/#B5453E |
| Medianoche / After Dark | #29213C | #1B1E39 | #F1EAF5 | #B7A9C6 | #D4A574 | #3B2F55 | #4F0E70 | #FFFFFF | #4F0E70/#FFF | #5E4A78 | #3B2F55 | #D4A574/#3B2F55 |
Marcador (placa): Chispa #F8F3F0, Coqueteo #F3E5E2, Pasión #F5E6E2 (tinta #2A1716), Medianoche #1B1E39. Duelo: fondo radial(ellipse at 50% 44%, #D6B8A92a, transparent 68%) sobre #3D0F0C, tinta #E4E4E3, accent #D6B8A9. Premio: #721E19→#4A0F0C.
Sello de lacre (por nivel, radial at 34% 30%): Chispa #A9382E/#721E19/#4A0F0C · Coqueteo #B7443A/#8A2522/#561310 · Pasión #C2453A/#9B2621/#5C1310 · Medianoche #E0B88C/#B98A57/#7A5530. Sello claro (Reto): #FFFAF6/#EBD9D2/#BFA196.

### Spacing (base 4)
4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 56. Margen pantalla 20; entre botones 10; encabezado→contenido 58.

### Radii
ficha 5–6 · dado 12–14 · botón 14 · naipe 16 · carta Crave 20 · placa/marcador 16 · selector 22 (píldora) · hoja 28 (solo arriba) · modal 24.

### Shadows
- e1 papel: `0 1px 1px rgba(36,26,24,.14)`
- e2 carta: `0 1px 1px rgba(71,59,64,.14), 0 26px 40px -24px rgba(71,59,64,.55)`
- e3 naipe sobre mesa: `inset 0 1px 0 rgba(255,255,255,.55), 0 2px 3px rgba(0,0,0,.3), 0 36px 50px -20px rgba(0,0,0,.7)`
- bandeja: `inset 0 0 0 2px #D0D8E1, inset 0 6px 18px rgba(46,52,64,.22), 0 30px 40px -24px rgba(0,0,0,.7)`
- sello: `inset 0 2px 0 rgba(255,255,255,.16), inset 0 -3px 6px rgba(0,0,0,.35), 0 8px 14px -4px rgba(0,0,0,.55)`
- botón primario: `inset 0 1px 0 rgba(255,255,255,.16), 0 8px 18px -8px <primary al 70%>`
- carta Crave (doble filete): `inset 0 0 0 1px <line>, inset 0 0 0 6px <card>, inset 0 0 0 7px <line>, 0 2px 3px rgba(0,0,0,.12), 0 30px 46px -26px rgba(0,0,0,.6)`

### Textures
- Grano: en producción, PNG/WebP 128 px en mosaico al ~10 % (el prototipo usa un SVG feTurbulence; **no usarlo en producción**). Capa estática en pseudo-elemento.
- Lino (Connect tapa/mini reto): `repeating-linear-gradient(0deg, rgba(255,255,255,.035) 0 1px, transparent 1px 3px), repeating-linear-gradient(90deg, rgba(0,0,0,.06) 0 1px, transparent 1px 3px)` sobre #74586A / #DCCBD3.
- Renglón (ficha Connect): doble línea #735568 al 55 % a 74 y 77 pt del borde superior; debajo `repeating-linear-gradient(to bottom, transparent 0 33px, rgba(115,85,104,.17) 33px 34px)`.
- Dorso de naipe: #C1123F + `radial-gradient(circle, rgba(238,241,245,.16) 1.6px, transparent 2.2px)` 15 px.
- Fotos de ambiente (assets/) con lavado encima: `linear-gradient(to bottom, <surface>e2, <surface>c4 40%, <surface>96)`; en Pasión/Medianoche `f0 / d1 / ad`.

## Screens / Views
Todas a 393×852. Encabezado de partida idéntico en los tres juegos: a top 60, left/right 16, fila con gap 8: [volver 44 círculo] [nombre del juego, Gloock 21, flex 1] [selector ES/EN: píldora 44 alto, padding 3, dos segmentos 44 ancho, radio 19; activo = fondo tinta, texto superficie] [menú 44 círculo, tres líneas 16×1.6 gap 4]. Colores del encabezado por juego: Connect bg #F6F0EDee borde #A39590 · Roll bg rgba(238,241,245,.08) borde rgba(238,241,245,.28) · Crave bg = placa del nivel, borde = menuborder.

1. **Splash (conversación)** — Fondo oscuro de splash. Encabezado de contacto centrado a top 66: sello 46 + «Tú y yo» (Figtree 600 15 #F3EDE8) + «Esta noche» (500 12 #9C8A80); línea divisoria a 160. Mensajes alineados abajo (bottom 150): sello de fecha «Hoy 9:41 p. m.», burbuja entrante «¿Te aburres esta noche?» (#2A211F, radio 20 20 20 6, Figtree 500 17), indicador «escribiendo» (burbuja #721E19 radio 20 20 6 20, tres puntos 7 px #E6C9BC), respuesta «Try Me.» (Gloock 58 en burbuja #721E19 con grano, radio 28 28 6 28; punto en #E6C9BC), reacción = mini sello claro 36 px (TM) en la esquina superior izquierda de la respuesta, «Leído 9:41 p. m.». «TOCA PARA SALTAR» a bottom 56. Un toque en cualquier parte va a Inicio. Avanza solo a los 4,6 s (1,8 s con reducido). EN: «You & me», «Tonight», «Today 9:41 PM», «Bored tonight?», «Read 9:41 PM», «TAP TO SKIP». Mostrar la hora real del dispositivo.
2. **Inicio** — Fondo #EFE8E1 + grano. Top bar (top 60): sello 40 + «Try Me» Gloock 24; a la derecha selector ES/EN + menú (abre Ajustes). Kicker «JUEGOS PARA PAREJAS» a top 128; título Gloock 35 «¿Cómo quieren **jugar** esta noche?» («jugar» en #721E19). Tres portadas a top 248, gap 14, alto 160 c/u, ancho completo:
   - Connect: diario de lino #74586A, lomo izquierdo 16 px, costura punteada interior, elástico vertical 10 px a 38 de la derecha, etiqueta de papel #F6F0ED (kicker «ÍNTIMO» + 3 puntos de intensidad, 1 lleno; «Connect» Gloock 31), descripción Figtree 500 14 #F6F0ED. Rotación −0.8°.
   - Roll: bandeja #E2E7ED con borde interior punteado; «JUGUETÓN» (#A30F35, 2 de 3 puntos), «Roll» Gloock 36, descripción; dos dados 58 px (rojo −11°, pizarra 9°). Rotación +0.6°.
   - Crave: sobre #721E19 con solapas (clip-path triángulos), sello 54 central, «ATREVIDO» (3/3), «Crave» Gloock 36 #F3EDE8, chip «Partida en curso» si hay guardada. Rotación −0.4°.
   Pie: punto oxblood + «Privado entre ustedes. No se comparte nada.» con línea superior.
   Copy EN (aprobado): «GAMES FOR COUPLES», «How do you want to play tonight?», «Conversations and games to get closer.», «Two dice. Whatever lands, you do.», «Truth or Dare. Desire and fun.», «Intimate/Playful/Daring», «Private between you two. Nothing is shared.» ES aprobado según prototipo.
3. **Partida guardada** — Hoja inferior (#F7F2EE, radio 28, asa 36×5) al tocar Crave si hay partida: sello 48 + «PARTIDA GUARDADA» + «Crave» Gloock 30; placa de marcador; botones «Reanudar partida» (primario oxblood), «Nueva partida» (secundario contorno #B9A49E), «Terminar partida» (texto #A51F35) → modal de confirmación «¿Borrar esta partida?» / «Se perderá el progreso.» / «Borrar partida» / «Conservar partida».
4. **Ajustes** — Hoja desde top 64 a la base, título «Ajustes» Gloock 32 + cerrar. Grupo 1 (tarjeta #FBF8F6 radio 18): Idioma (segmentado Español/English), Sonido (switch 51×31, on #721E19), Vibración (switch). Grupo «ANIMACIONES» (radios): Seguir la opción del teléfono / Completas / Reducidas. Grupo 3: Nuestros nombres (valor «Ana · Leo»), Privacidad, Ayuda, Sobre Try Me (chevron). Aviso legal y versión. Conectar a `app-settings.js` (mismas claves `tryme-app-settings-v1`; añadir `vibration`). En Safari web ocultar Vibración (no hay API); mostrar en app nativa.
5. **Connect · inicio** — Página de diario (#F6F0ED sobre tapa #74586A desplazada 3/5). Kicker sello «CONNECT», tagline Gloock 17 #735568, «¿Cuánto tiempo tienen?» Gloock 32, ayuda; duraciones 5/10/15/20/30 como pestañas (66 alto, radio 10 10 4 4; seleccionada #74586A y elevada −4); nombres como líneas manuscritas (input sin caja, borde inferior 1.5 #735568, Gloock 22). Botones «Empezar Connect» + «Cómo jugar Connect».
6. **Connect · inicio de ronda (¿Quién de los dos?)** — Ficha con pila (segunda hoja #EAE1DC rotada 2.2°), sello «¿QUIÉN DE LOS DOS?», título, subtítulo de la tarjeta, lista numerada de los 5 ítems (filas 44), «3, 2, 1, ¡señalen!». Botones «Empezar ronda» + «Pasar».
7. **Connect · ronda** — Ítem actual Gloock 30 centrado, contador i/5, sello circular 132 con cuenta 3→2→1→«¡Señalen!» (tick 350 ms); botones «Coincidimos» / «No» deshabilitados mientras cuenta (motor: 3000 ms), «Saltar». Marcas de progreso bajo la ficha (lleno = acierto, anillo = no, anillo tenue = saltado).
8. **Connect · fin de ronda** — Sello de resultado 96 (n/total) que se estampa, «Coincidieron en n de total.» + veredicto aprobado (telepathy/know/interesting), marcas, «¿Alguna respuesta merece explicación?». Botón «Siguiente tarjeta».
9. **Connect · carta de pregunta** — Ficha con renglón (top 158, alto 438, rotada −0.7°, pila detrás). Sello «CONVERSACIÓN». Pregunta Gloock 24/34 sobre el renglón. Topline «{b} lee · {a} responde» + «Tarjeta n» + progreso de tiempo 72×3. Botones: «Una pregunta más» (secundario #DCCBD3, con «Opcional · sobre esta misma tarjeta»), «Siguiente tarjeta», «Pasar». La segunda capa aparece como papel adherido (#FBF8F6, cinta #DCCBD3 al 85 %) sobre la base de la ficha, rotado 1.5°.
10. **Connect · mini reto** — Tarjeta de lino #DCCBD3 cosida (borde punteado 1.5 rgba(116,88,106,.45)), sello «MINI RETO». Si `safety === 'Touch choice'`: primero «Elijan en pareja» + «Con contacto» / «Sin contacto»; luego el texto (o `noTouchText`). Temporizador en sello 118 con anillo conic #74586A. Botón «Iniciar» → deshabilitado mientras corre → «Listo».
11. **Connect · fin de sesión** — El diario cerrado (tapa de lino con etiqueta «Connect»), «Eso estuvo bueno.» / «¿Repetimos pronto?», resumen `recapMarkup()` en filas con línea superior, «Listo», «Jugar de nuevo», «¿Siguen con ganas? Prueben Crave.».
12. **Roll · tirada** — Fondo mesa (roll-table.webp + lavado #2E3440). Progreso «Turno n de total» + nivel + barra 2 px #C1123F. Kicker «EL AZAR EMPIEZA CONTIGO», «{name}, te toca lanzar.» Gloock 32, «Dos palabras…», «Quien lanza recibe.». Bandeja (left/right 20, top 340, alto 290, radio 26) con etiquetas ACCIÓN / ESTILO y dos cubos 3D de 104 px (seis caras con palabra, Gloock 17). Deslizar ↑ > 40 px en la bandeja o tocar «Lanzar los dados».
13. **Roll · dados en movimiento** — Ver Motion. Título cambia a «Los dados deciden»; botón «Lanzando…» deshabilitado.
14. **Roll · carta boca abajo** — Resumen de dados (96×50 rojo −3°, «+», pizarra 3°), roles «{giver} da · {receiver} recibe» o banner rosa de Al revés. Naipe 297×388 (left 48, top 256, rotado 1.4°): dorso rojo con puntos, emblema de dado 74 px, «Roll», «Tu próxima jugada está dentro.». Botón «Revelar jugada».
15. **Roll · naipe revelado** — Frente #F6C2CF (niveles: 0 #F6C2CF, 1 #EFA3B6, 2 #C1123F con texto blanco), marco interior, índices de esquina = los dos dados (mini dado 20 px + nombre en mayúsculas; el inferior rotado 180°). Centro: nivel, texto de la carta (Gloock 21/1.32), línea del estilo, segundos («A su ritmo» si null). Botones «Empezar» (o «Seguir» si sin tiempo) + «Otra tirada (n)» → hoja «¿Quién la cambia?». Al empezar: «TIEMPO RESTANTE», reloj Gloock 32, barra, «Pausar/Continuar», «Terminar turno» (habilitado tras 50 % del tiempo, regla `endTurn.timedCardsShowAfterFraction`).
   **Anhelo:** pantalla de elección con las 5 categorías como cartas rosas (Esculpir deshabilitada si el estilo es Sutil).
16. **Crave · selección de nivel** — Fondo Chispa. «PREPARAR PARTIDA», «Elige tu nivel», segmentado Progresiva/Nivel fijo, cuatro baldosas 76 alto, cada una en su paleta (nombre Gloock 24, frase del nivel, 4 barras, chip NIVEL INICIAL / NIVEL MÁXIMO / ELEGIDO). Fuera de rango: opacidad .55. Nota según modo. Meta de puntos con −/+ (10/15/20/30/40/50, limitada por `allowedGoals()`). «Comenzar a jugar».
17. **Crave · Verdad o Reto** — Placa de marcador (top 116): nombre activo con punto, puntos Gloock 32, centro META + 4 barras + nombre del nivel. «A ver, {name}» + BLOQUE (3 puntos). Aviso de bloque forzado si aplica. Dos cartas 262 alto (Verdad: card del nivel + sello +1; Reto: color dare + sello claro +3), rotadas ∓1.6°. «Sorpréndeme · Aleatorio», «Terminar partida».
18. **Crave · carta** — Carta 372 alto en doble filete, sello en el borde superior (+1 / +3), kicker «RETO · 3 PUNTOS · CON TIMER», «{player}:» + texto (card-xl), «Se pierde si: …» si hay fail. Anillo SVG 108 (r 49, trazo 5, track/ring del nivel), «Duración fija · sin pausa». Botones: «Comenzar» / «Respondido · +1», «**Pasar turno · −1**». En curso: «En curso» + «Abandonar reto». Fin: «Completado · +3»; con fail: «{partner}, tú decides» + «Lo logró · +3» / «No lo logró · 0».
19. **Crave · pasar turno · −1 (regla nueva)** — Hoja #F8EEEC: «¿Pasar turno?», «Pasar cuesta 1 punto. El turno pasa a {partner}.», sello rojo −1 (64, #D25A6D→#C44359→#7E1E2E), fila «{name}  7 → 6», «El marcador nunca baja de 0.», «Pasar · −1» + «Seguir jugando». Al confirmar: score − 1 (mín 0), toast «−1 para {name}», turno al otro. Abandonar un Reto ya empezado: 0, sin castigo (sin cambios). Añadir la regla al texto de reglas («Pasar o abandonar»).
20. **Crave · marcador** — Tras sumar: kicker del resultado, «Marcador», tarjeta con los dos puntajes Gloock 64 + barras hacia la meta, «META n» y «Ventaja {name} +n» / «Empate», «Turno de {name}», «Seguir».
21. **Crave · duelo · aparece** — Ver Motion «Aparece un duelo». Luego sobre (toque para abrir), carta del duelo (texto separado por persona, fail, anillo 84) con «Iniciar» → «¡Paro! · Solo {resister}», pregunta «¿Cómo terminó?» con «{resister} aguantó · +3» / «{resister} falló · +1 para {attacker}» (y la opción de orgasmo en Pasión/Medianoche según reglas), resultado con sello ganador.
22. **Crave · subir de nivel** — Ver Motion. Tarjeta final: «Subimos la intensidad.», frase y descripción del nivel (`levelCopy`), «Nuevo lugar: {place}», «¡Vamos a hacerlo!».
23. **Crave · premio** — Ganador: «PARTIDA COMPLETADA», «Ana, ganaste.», marcador final + «Ganó por n puntos»; sobre crema con «Para ti, {winner}» y sello; «Revelar tu premio». Elección: dos cartas crema OPCIÓN A/B (título Gloock 26 + texto + «Elegir este premio»). Confirmado: «ELECCIÓN CONFIRMADA», «El momento es de ustedes.», título del premio, botones «Orgasmo logrado» / «Es suficiente».
24. **Crave · premio completado** — Tras «Orgasmo logrado»: fuegos artificiales + «PREMIO COMPLETADO», «¡Qué final!», «{winner}, completaste tu premio.», «Jugar de nuevo», «Volver al inicio».

## Interactions & Motion
Solo se animan `transform` y `opacity` (excepción: transición de color de superficie de Crave y clip-path de la inundación de nivel). Curvas: `--ease-out: cubic-bezier(.2,.8,.2,1)`, `--ease-flip: cubic-bezier(.2,.7,.2,1)`, `--ease-in: cubic-bezier(.4,0,1,1)`.
| Momento | Duración | Detalle | Reducido |
|---|---|---|---|
| Splash conversación | 4,6 s | encabezado fade .4s @.15 · entrante pop .42s @.5 (cubic-bezier(.3,1.3,.5,1), escala .6→1.03→1 desde su esquina) · escribiendo visible 1,15–2,4 s, puntos saltan −4 pt (900 ms, desfase 150 ms) · respuesta pop .48s @2.4 (cubic-bezier(.3,1.5,.5,1)) · leído @3.0 · reacción @3.25 (escala 0→1.2→1, −30°→0) | todo junto, sin puntos, 1,8 s |
| Repartir | 420–500 ms, escalonado 80 ms | sube 22–40 pt y gira a su ángulo | fade 200 ms |
| Barajar Connect | salida 280 + entrada 420 | sale −46 pt / −7° (ease-in), entra desde la pila | corte con fade |
| Papel adherido | 380 ms | sube 30 pt, 4°→1.5° | fade |
| Tirar dados | 1250 ms (dado 2 +90 ms) | vuelo keyframes: 0 → −150 (32 %) → 0 (64 %) → −16 → 0 → −3 → 0; giro transform 1.25 s cubic-bezier(.15,.65,.25,1) hasta rotateX/rotateY de la cara resultante + 2 vueltas completas; sombra elíptica blur 6 escala 1→.45→1 | caras al resultado, fade 200 ms |
| Asentar | 900 ms | borde #F6C2CF + glow en las caras ganadoras; háptica ligera | sin glow |
| Voltear naipe | 680 ms ease-flip | rotateY 180°, `-webkit-backface-visibility:hidden`; ocultar el dorso por opacidad a los 340 ms (bug de Safari) | crossfade 200 ms |
| Romper sello | solapa 420 ms (cubic-bezier(.4,0,.2,1)) rotateX −178°, carta 460 ms | | fade |
| Sumar puntos | 130 ms por punto | cuenta de uno en uno, verde #158353 1,1 s, chip «+3» flota 14 pt | valor final |
| Pasar −1 | temblor 320 ms ±3 pt, rojo #C44359, toast 1,8 s | | color + toast |
| **Sorpréndeme** | ≈2,0 s | el motor elige el tipo primero (respeta bloque forzado); el resaltado (anillo accent + glow 28 px, elevación −10 pt/escala 1.03, la otra a .97 y opacidad .55) alterna 13 veces con retardos 70,70,80,90,100,115,135,160,190,230,280,340,420 ms, calculado para terminar en el tipo elegido; final −18 pt / 1.06; «Un poco de suspenso…» (Gloock 20) bajo las cartas; 700 ms después abre la carta. Botones bloqueados mientras gira | marca la elegida y abre a 450 ms |
| **Aparece un duelo** | 3,8 s (toque salta) | dim #07060B a .72 (450 ms) · «¡Alto!» Gloock 76 slam escala 1.9→.93→1.04→1 (550 ms @.3) · kicker @.8 · quien aguanta entra desde −90 pt izq., quien ataca desde +90 der. (550 ms @1.1) con «AGUANTA»/«ATACA» · sello central slam @1.55 y luego late (1 s: 1→1.13→1→1.08→1) con anillo que se expande ×1.9 · roles @2.3 · luego sobre | todo junto sin latido, 1,4 s |
| **Subir de nivel** | 2,5 s | etapa 0 (0 ms): luces a .9 negro; barras del nivel anterior en crema · etapa 1 (420 ms): la barra nueva se enciende con glow 16 px; el nombre del nivel (Gloock 64) se escribe con clip-path inset(0 100%→0) 700 ms · etapa 2 (1550 ms): círculo con la surface del nivel nuevo crece desde (50%, 34%) de 0 a 150 % (clip-path 950 ms cubic-bezier(.6,0,.2,1)); textos y barras toman la paleta nueva · etapa 3 (2500 ms): el círculo se desvanece (800 ms) revelando la foto del nuevo lugar, el título sube a top 140 (600 ms), entra la tarjeta y el botón | directo a etapa 3 con fade |
| **Fuegos artificiales** | bucle 2,6 s por cohete; 5 cohetes desfasados 0,55 s | cohete 4×14 sube 300 pt (0–19 %), destello radial 80 px (19–40 %), 14 chispas 6 px en círculo radio 74–102 con glow, se abren (21–52 %) y caen 38 pt apagándose (52–80 %); colores #F3EDE8, #E6C9BC, #D4A574, #F6C2CF, #FFD3C8; zona bajo el encabezado. Implementación sugerida: `<canvas>` con requestAnimationFrame (≤ 80 partículas) o los mismos keyframes en CSS | sin fuegos, solo texto |
| Temporizador | tick 200 ms | anillo SVG stroke-dashoffset lineal; últimos 5 s el número late 1→1.06 (900 ms) | sin latido |
| Hojas / modal | 320–340 / 260 ms | hoja sube 100 %→0; modal .94→1; fondo fade 200 ms | fade 180 ms |
**La animación siempre termina en el resultado que ya calculó el motor** (dados, aleatorio, duelo, nivel, puntos).

## State Management
Usar el estado existente; añadir solo:
- Ajustes: `vibration: boolean` en `tryme-app-settings-v1`.
- Crave: aplicar −1 al pasar (`score = Math.max(0, score - 1)`) en la rama de «pasar turno» previa a iniciar el reto; flag `randomBusy` ya existe; etapas de subida de nivel `luStage 0..3` y de duelo `'intro' → 'envelope' → 'card' → 'question' → 'result'` (la intro es nueva, antes de `duelintro`); `prizePhase 'complete'` tras «Orgasmo logrado» (pantalla `prizecomplete` ya existe: añadir fuegos).
- Splash: reemplaza `intro()` de `index.html` (`.tm-chat-splash`), mismas reglas de salto.

## Copy nuevo aprobado (ES / EN)
- Splash: «Tú y yo / You & me», «Esta noche / Tonight», «¿Te aburres esta noche? / Bored tonight?», «Leído / Read», «TOCA PARA SALTAR / TAP TO SKIP».
- Inicio ES: «JUEGOS PARA PAREJAS», «¿Cómo quieren jugar esta noche?», «Conversaciones y juegos para acercarse.», «Dos dados. Lo que salga, lo hacen.», «Verdad o Reto. Deseo y diversión.», «ÍNTIMO / JUGUETÓN / ATREVIDO», «Privado entre ustedes. No se comparte nada.», «Partida en curso».
- Pasar: «Pasar turno · −1 / Pass turn · −1», «¿Pasar turno? / Pass this turn?», «Pasar cuesta 1 punto. El turno pasa a {partner}. / Passing costs 1 point. The turn goes to {partner}.», «El marcador nunca baja de 0. / Scores never go below 0.», «Pasar · −1 / Pass · −1», toast «−1 para {name} / −1 for {name}», «Reto abandonado · 0 / Dare abandoned · 0».
- Ajustes: «Sonido / Sound», «Vibración / Vibration» (separados).
- Duelo: «AGUANTA / HOLDS OUT», «ATACA / ATTACKS» (ya existen como duelHold/duelAttack).
- Chispa: frase de nivel pendiente (no inventar; dejar vacío).

## iOS / Safari notes
- `preserve-3d` se aplana si un ancestro tiene `overflow:hidden`, `filter` u `opacity<1`: mantener limpios los ancestros de dados y naipe.
- `will-change: transform` solo durante la animación; máximo 3 capas promovidas. Nada de `backdrop-filter` ni `filter: drop-shadow` en elementos que se mueven (la portada de Crave usa drop-shadow estática: aceptable porque no se anima; si se anima, usar box-shadow en capa).
- Inputs ≥ 16 px. Web Audio se desbloquea en el primer toque. Vibración: solo nativa (Capacitor Haptics).

## Assets
- `assets/connect-office.webp`, `assets/roll-table.webp`, `assets/crave-living.webp`, `assets/crave-bedroom.webp` — ambientes aprobados existentes (`ambient/*-v79.webp`). Kitchen (`crave-kitchen-v79.webp`) sigue disponible para la ruta de 3 lugares.
- Iconos: trazos CSS simples (volver, menú, cerrar, chevron). En producción, un set SVG propio de trazo 1,6 pt. Sin emojis.
- Sello TM: dibujado en CSS (radial-gradient + anillo interior + «TM» Gloock).

## Files
- `reference/TryMeApp.dc.html` — shell: splash, inicio, partida guardada, ajustes, índice de pantallas.
- `reference/ConnectGame.dc.html`, `reference/RollGame.dc.html`, `reference/CraveGame.dc.html` — juegos.
- `reference/sistema.dc.html` — documento de sistema (tokens, componentes, motion, notas).
- `reference/support.js` — runtime para abrir los .dc.html en el navegador (solo referencia).
- `tokens.css` — tokens listos para pegar en el código.
