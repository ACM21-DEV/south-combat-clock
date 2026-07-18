/* ============================================================
   SOUTH COMBAT SERIES — SHOWDOWN 1.0
   Base de datos del evento (editable en Bloc de notas)

   CÓMO AGREGAR UN PELEADOR:
   1. Copiá la foto a la carpeta  images/  (minúsculas, sin espacios ni tildes)
   2. Copiá una línea de FIGHTERS y cambiá los datos
   3. Guardá este archivo y recargá la página (F5)

   Si un peleador no tiene foto, poné  photo: null  y el
   programa muestra una silueta automáticamente.
   ============================================================ */

const GYMS = {
  blackhouse: { name: "Black House Fight Club",  logo: "images/gym-blackhouse.jpg" },
  cbm:        { name: "CBM Cardio Box",          logo: "images/gym-cbm.jpg" },
  checkmat:   { name: "Checkmat Pérez Zeledón",  logo: "images/gym-501.jpg" },
  corncancun: { name: "Corn Cancun Box",         logo: "images/gym-corncancun.jpg" },
  jeanlima:   { name: "Jean Lima BJJ",           logo: "images/gym-jeanlima.jpg" },
  macaco:     { name: "Macaco AMM",              logo: "images/gym-macaco.jpg" },
  warriors:   { name: "The Warriors",            logo: "images/gym-warriors.jpg" },
  none:       { name: "", logo: null },
};

const FIGHTERS = [
  // --- Grappling (cartelera con foto) ---
  { name: "Mateo Molina",   gym: "cbm",        photo: "images/molina.jpg" },
  { name: "Josué Zúñiga",   gym: "blackhouse", photo: "images/zuniga.jpg" },
  { name: "Jean Carlo Mena",gym: "blackhouse", photo: "images/mena.png" },
  { name: "Bryan Mora",     gym: "corncancun", photo: "images/mora.png" },
  { name: "Diego Arroyo",   gym: "blackhouse", photo: "images/arroyo.jpg" },
  { name: "Roy García",     gym: "warriors",   photo: "images/garcia.jpg" },
  { name: "Larry Olivares", gym: "checkmat",   photo: "images/olivares.jpg" },
  { name: "Jadiel Quesada", gym: "blackhouse", photo: "images/quesada.jpg" },

  // --- Kickboxing (cartelera oficial, sin foto por ahora) ---
  { name: "José Delgado",    gym: "none", photo: null },
  { name: "Alexis Arias",    gym: "none", photo: null },
  { name: "Axel Marenco",    gym: "none", photo: null },
  { name: "Hanzel Cerdas",   gym: "none", photo: null },
  { name: "Esteban Vargas",  gym: "none", photo: null },
  { name: "Heyden Soto",     gym: "none", photo: null },
  { name: "Raúl Jiménez",    gym: "none", photo: null },
  { name: "Mathías Jiménez", gym: "none", photo: null },
  { name: "Andre Mora",      gym: "none", photo: null },
  { name: "Giovanni Hidalgo",gym: "none", photo: null },
];

/* Cartelera precargada. El orden y los cruces se pueden
   cambiar aquí o directamente en el programa durante el evento.
   type: "jj" = jiu-jitsu (5:00 + posible extra de 1:00)
         "kb" = kickboxing (2:00 sin extra)                    */

const MATCHES = [
  // Grappling — 4 combates invitacionales, reglas EBI
  { type: "jj", f1: "Mateo Molina",   f2: "Josué Zúñiga",   label: "Grappling 1" },
  { type: "jj", f1: "Jean Carlo Mena",f2: "Bryan Mora",     label: "Grappling 2" },
  { type: "jj", f1: "Diego Arroyo",   f2: "Roy García",     label: "Grappling 3" },
  { type: "jj", f1: "Larry Olivares", f2: "Jadiel Quesada", label: "Grappling 4" },

  // Kickboxing — cartelera oficial WKF
  { type: "kb", f1: "José Delgado",    f2: "Alexis Arias",     label: "Kickboxing 1" },
  { type: "kb", f1: "Axel Marenco",    f2: "Hanzel Cerdas",    label: "Kickboxing 2" },
  { type: "kb", f1: "Esteban Vargas",  f2: "Heyden Soto",      label: "Kickboxing 3" },
  { type: "kb", f1: "Raúl Jiménez",    f2: "Mathías Jiménez",  label: "Pelea Coestelar" },
  { type: "kb", f1: "Andre Mora",      f2: "Giovanni Hidalgo", label: "Evento Estelar" },
];

/* Duraciones por tipo de combate (en segundos) */
const RULES = {
  jj: { duration: 300, extra: 60, rounds: 1, name: "GRAPPLING · REGLAS EBI" },
  kb: { duration: 120, extra: 0,  rounds: 2, name: "KICKBOXING · K-1" },
};
