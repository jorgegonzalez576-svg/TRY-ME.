# Try Me — código actualizado

Código completo de Crave, Connect y Roll.
Versión de origen: fc4a5aa56169ed2724863d474e6d2e0afe545e92

Incluye los últimos arreglos:
- Ajustes permite guardar uno o ambos nombres vacíos.
- New Game en Roll elimina la partida anterior guardada.

## Organización
index.html: estructura, inicio, menú, código y catálogo de Crave.
home.css: menú e inicio.
crave.css, crave-motion.css, crave-entry.css: estilos y animaciones de Crave.
app-settings.js: ajustes compartidos.
connect/: interfaz, motor, catálogo, estilos y animaciones de Connect.
roll/: interfaz, motor, catálogo, estilos y recursos de Roll.
ambient.css y ambient/: recursos de ambientes.

## Ejecutar
Desde esta carpeta:
    python3 -m http.server 8000
Abre http://localhost:8000 en tu navegador.
No requiere compilación. Las fuentes externas pueden requerir internet.

Los archivos se conservan tal como están en el repositorio, sin reescrituras.
No incluye credenciales ni partidas personales del navegador.
Verificación: integridad del ZIP y sintaxis JavaScript. No equivale a una prueba funcional completa en móvil.
