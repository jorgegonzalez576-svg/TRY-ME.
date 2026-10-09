# Prompt para Claude Code

Copia y pega esto en Claude Code, con el repositorio de Try Me abierto y la carpeta `design_handoff_try_me_1a/` dentro del repositorio:

---

Lee `design_handoff_try_me_1a/README.md` completo. Es el handoff del rediseño visual de Try Me (dirección 1a «Objetos de una noche en casa»).

Los archivos de `design_handoff_try_me_1a/reference/` son referencias de diseño en HTML, no código para copiar. Ábrelos para ver el aspecto y el comportamiento (`TryMeApp.dc.html` es el prototipo navegable y `sistema.dc.html` el documento de diseño).

Los textos y la regla nueva del README están aprobados. Tarea: aplicar el rediseño al código existente de Try Me, conservando los motores de juego, los catálogos de cartas y los diccionarios ES/EN actuales.

Trabaja en este orden y detente al final de cada paso para que yo revise:
1. Tokens: usa `design_handoff_try_me_1a/tokens.css` como base (`@layer tokens, components, worlds`) y las variables semánticas por juego/nivel (`data-game`, `data-level`). Autoaloja Gloock y Figtree en WOFF2.
2. Componentes comunes: encabezado de juego con selector ES/EN de un toque, botones (primario, secundario, silencioso, con estados), hoja, modal, toast y marcador.
3. Splash como mensaje de texto e Inicio con las tres portadas-objeto, ambos bilingües.
4. Connect, luego Roll (dados 3D que terminan en la cara que ya decidió el motor), luego Crave.
5. Crave: implementa la regla nueva «Pasar turno cuesta −1» (solo antes de empezar la carta, mínimo 0, con hoja de confirmación).
6. Motion y movimiento reducido según la tabla del README, incluidas las animaciones de Crave: aparición del duelo, subida de nivel, ruleta de «Sorpréndeme · Aleatorio» y fuegos artificiales tras «Orgasmo logrado». Cada animación termina en el resultado que ya calculó el motor. Solo `transform` y `opacity` (salvo las excepciones del README).
7. Elimina los overrides antiguos (selectores largos y `!important`) que el rediseño reemplaza.

Prioridades: Safari en iPhone (393 × 852), `100dvh`, safe areas, objetivos táctiles de 44 pt, contraste AA y rendimiento fluido en las animaciones.
