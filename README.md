# South Combat Series — Reloj Oficial · Showdown 1.0

## 🥋 Cartelera Oficial

| Jiu-Jitsu (EBI Nogi) | Kickboxing (K-1) |
|:---:|:---:|
| ![Cartelera Jiu-Jitsu](images/poster-jujitsu.jpg) | ![Cartelera Kickboxing](images/poster-kickboxing.jpg) |

---

**Aplicación oficial de cronometraje** para torneos de combate amateur. Reloj en tiempo real con soporte multi-round, gestión de combates e historial de resultados — construido para **18 de julio de 2026** en Black House Fight Club, Pérez Zeledón, Costa Rica.

👉 **Seguí el evento:** [@blackhousefightclub](https://www.instagram.com/blackhousefightclub/) en Instagram

---

## 🎯 Sobre Este Proyecto

Una solución digital completa para gestionar torneos de combate amateur. Diseñé este reloj trabajando directamente con mi entrenador en Black House Fight Club, iterando sobre sus necesidades reales del evento.

**Proceso**: Diseño de UX/UI + requisitos → desarrollo con asistencia de IA → validación y refinamiento en vivo.

Este es un **case study de "vibe coding"** — usar IA como herramienta de desarrollo bajo dirección humana, no como reemplazo del pensamiento de diseño.

---

## ✨ Características

✅ **Pantalla de Reloj**
- Cronómetro gigante (5:00 / 2:00 por round)
- Fotos en tiempo real de peleadores + gimnasios
- Soporte multi-round con progresión automática
- Cronómetro de descanso entre rounds (en gris)

✅ **Sistema de Combates**
- 9 combates precargados (4 Jiu-Jitsu + 5 Kickboxing)
- Duración, rounds, tiempo extra configurables
- Defaults automáticos por disciplina

✅ **Workflow de Tiempo Extra**
- Aceptar → Cargar → Operador inicia (Espacio)
- Rounds de 1:00 de prórroga
- Campanas distintas (inicio/fin)

✅ **Cartelera**
- Agregar/editar/reordenar/eliminar combates en vivo
- Formulario en blanco (sin auto-llenado)
- Historial de resultados (🔵 Azul / 🔴 Rojo / 🤝 Empate)
- Indicadores visuales de corner (fondos azul/rojo)

✅ **Sistema de Audio**
- `bell-start.mp3` — inicio de round
- `bell-end.mp3` — fin de round
- Beeps de cuenta atrás (últimos 10 segundos)
- Campana sintética automática si faltan archivos

✅ **Respaldo y Restauración**
- Snapshot completo de la cartelera (JSON)
- Recuperación copy/paste si el navegador se cierra
- Un click para restaurar

✅ **Herramientas de Prueba**
- Barra de test escondida (esquina superior izquierda)
- Saltar a 0:12 / 0:03 para validar rápido
- Sin impacto en producción

---

## 🚀 Cómo Usar

### Inicio Rápido

1. **Descargá** el ZIP más reciente de [Releases](https://github.com/ACM21-DEV/south-combat-clock/releases)
2. **Extraelo** completamente (clic derecho → Extraer)
3. **Abrí** `index.html` desde la carpeta extraída (doble clic)
4. Presioná **F** para pantalla completa

**Eso es todo. No necesita internet. No hay que instalar nada.**

### Durante el Evento

| Acción | Control |
|--------|---------|
| Cargar un combate | Click ▶ en la cartelera |
| Iniciar/Pausar | Espacio o botón "Iniciar" |
| Siguiente combate | **N** o botón "Siguiente" |
| Reiniciar reloj | **R** o botón "Reiniciar" |
| Toggle Cartelera | **P** o botón "Cartelera" |
| Pantalla completa | **F** o botón |
| Sonido on/off | 🔊 Botón |

### Reglas de Combate (Defaults Integrados)

**Jiu-Jitsu (EBI/Nogi)**
- 1 round × 5:00
- Tiempo extra: +1:00 (opcional, el operador inicia)

**Kickboxing (K-1)**
- 2 rounds × 2:00 cada uno
- Sin tiempo extra (a menos que lo actives manualmente)

### Agregar un Combate Durante el Evento

1. Clickeá **"+ AGREGAR COMBATE"** en la Cartelera
2. Se abre un formulario — rellená:
   - Nombre peleador 1
   - Nombre peleador 2
   - Tipo (Jiu-Jitsu / Kickboxing)
   - Duración (1:00 a 10:00)
   - Rounds (1–5)
   - Tiempo extra (sí/no)
3. Clickeá **"Crear combate"**
4. El combate aparece en la lista, listo para cargar

### Registrar Resultados

Cuando termina un combate:
1. Aparece un overlay: 🔵 Azul Gana / 🤝 Empate / 🔴 Rojo Gana
2. Seleccioná el resultado
3. El overlay se cierra, el resultado se guarda en la cartelera

### Respaldo y Recuperación

Si el navegador se cierra:
1. Abrí `index.html` de nuevo
2. Bajá a la sección **RESPALDO** al final
3. Pegá tu respaldo en el textarea
4. Clickeá **"Restaurar"**
5. Todos los combates + resultados se recuperan

---

## 📁 Estructura de Carpetas

```
south-combat-clock/
├── index.html              ← La aplicación completa
├── fighters.js             ← Cartelera + roster (editable)
├── README.md               ← Este archivo
├── LEEME.txt               ← Instrucciones en español
├── images/                 ← Fotos de peleadores + logos
│   ├── molina.jpg
│   ├── alvarez.jpg
│   ├── ... (6 peleadores más)
│   ├── gym-blackhouse.jpg
│   └── ... (5 logos de gyms)
└── sounds/
    ├── bell-start.mp3      ← Campana de inicio
    ├── bell-end.mp3        ← Campana de fin
    └── LEEME-sonidos.txt   ← Notas de audio
```

---

## 🎨 Diseño

- **Display**: Impact (bold, estilo cartel de pelea)
- **UI**: Segoe UI / system-ui (limpio, legible)
- **Modo Oscuro**: Marco metálico con textura de malla, diseño remachado
- **Colores**: Bone, Steel, Rojo (acento), Oro (detalles)
- **Firma**: OT (Tiempo Extra) = resplandor rojo en el marco

---

## 🔧 Personalización

### Agregar Fotos de Peleadores

1. Copiá la imagen a la carpeta `images/`
   - Formato: `apellido.jpg` (minúsculas, sin espacios ni tildes)
   - Ejemplo: `delgado.jpg`, `arias.jpg`
2. Abrí `fighters.js` en un editor de texto
3. Encontrá el peleador en el array `FIGHTERS`
4. Actualizá el campo `photo`:
   ```javascript
   { name: "José Delgado", gym: "...", photo: "images/delgado.jpg" }
   ```
5. Guardá y recargá la página (F5)

### Cambiar Sonidos de Campana

1. Reemplazá los archivos en `sounds/`:
   - `bell-start.mp3` (inicio)
   - `bell-end.mp3` (fin)
2. Recargá la página (F5)
3. Si faltan archivos, suenan campanas sintéticas automáticamente

### Editar Combates Precargados

1. Abrí `fighters.js` en un editor de texto
2. Encontrá el array `MATCHES`
3. Editá nombres, gym, tipo, duración, rounds
4. Guardá y recargá (F5)

---

## 🛠 Construido Con

- **HTML/CSS/JavaScript** — Vanilla (sin frameworks)
- **WebAudio API** — Campana sintética de respaldo
- **Local Storage** — Preferencias
- **File API** — Respaldo y restauración

---

## 📚 Cómo Se Hizo Este Proyecto

**Diseño y Dirección**: Yo
- Recopilación de requisitos del coach
- Diseño de UX/UI
- Iteración continua con feedback
- Resolución de problemas y arquitectura

**Desarrollo de Código**: Claude AI (bajo mi dirección)
- Implementación full-stack
- Máquina de estados multi-round
- Sistema de audio
- Testing y debugging

**Este es un "vibe coding" case study** — usar IA como herramienta de desarrollo bajo dirección humana, no como reemplazo del pensamiento de diseño.

---

## 🎬 Detalles del Evento

| Detalle | Valor |
|---------|-------|
| **Evento** | South Combat Series — Showdown 1.0 |
| **Fecha** | 18 de julio de 2026 |
| **Hora** | 12:30 PM |
| **Lugar** | Black House Fight Club, Pérez Zeledón, Costa Rica |
| **Combates** | 9 (4 Jiu-Jitsu + 5 Kickboxing) |
| **Tipo** | Torneo amateur |
| **Instagram** | [@blackhousefightclub](https://www.instagram.com/blackhousefightclub/) |

---

## 📝 Licencia

Este proyecto se proporciona tal cual para el evento South Combat Series y fines educativos.

---

## 💬 ¿Preguntas?

Para problemas o personalizaciones, contactá: **ACM21-DEV**

---

**Hecho con ❤️ para Black House Fight Club**

*Julio 2026*
