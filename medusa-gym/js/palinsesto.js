/* Medusa Gym - palinsesto settimanale usato da quiz (js/quiz.js) e simulatore Family (js/family.js).
   ATTENZIONE: deve restare uguale alla tabella "Orario dei corsi" in index.html e a orari.html.
   Quando cambia un orario, aggiornalo anche qui.
   Formato: [corso, [giorni], [[inizio, fine, gruppo opzionale], ...]] */
(function () {
  'use strict';
  var R = [
    ['Kickboxing', ['Lun', 'Mer', 'Ven'], [['13.30', '14.30'], ['18.00', '19.00'], ['20.30', '21.30']]],
    ['Kickboxing', ['Mar', 'Gio'], [['20.30', '21.30']]],
    ['Agonisti Kickboxing', ['Lun', 'Mer', 'Ven'], [['19.00', '20.30']]],
    ['Kickboxing Kids', ['Mar', 'Gio'], [['17.30', '19.00', '9-14 anni']]],
    ['Pugilato', ['Lun', 'Mer', 'Ven'], [['08.30', '09.30']]],
    ['Pugilato', ['Mar', 'Gio'], [['14.00', '15.00'], ['19.00', '20.30']]],
    ['Pugilato', ['Sab'], [['14.00', '16.00']]],
    ['Autodifesa PATH', ['Mar', 'Gio'], [['20.30', '22.00']]],
    ['Calisthenics', ['Lun', 'Ven'], [['16.00', '17.00']]],
    ['Calisthenics', ['Mar', 'Gio'], [['18.00', '19.00', 'Base'], ['19.00', '20.30', 'Avanzato']]],
    ['Functional Training', ['Lun', 'Ven'], [['19.15', '20.15']]],
    ['Functional Training', ['Mar', 'Gio'], [['13.30', '14.30'], ['19.15', '20.45']]],
    ['Active Senior', ['Mar', 'Gio'], [['09.30', '10.30']]],
    ['Ginnastica Posturale', ['Lun', 'Mar', 'Gio', 'Ven'], [['10.30', '11.30'], ['18.00', '19.00']]],
    ['Karate Byakuren', ['Lun', 'Mer', 'Ven'], [['20.30', '21.30']]]
  ];
  var S = [];
  R.forEach(function (r) {
    r[1].forEach(function (d) {
      r[2].forEach(function (s) { S.push({ c: r[0], d: d, a: s[0], b: s[1], g: s[2] || '' }); });
    });
  });
  function toMin(t) { var p = t.split('.'); return (+p[0]) * 60 + (+p[1]); }
  function slotOf(t) { var m = toMin(t); return m < 720 ? 'mattina' : m < 900 ? 'pranzo' : m < 1080 ? 'pomeriggio' : 'sera'; }
  S.forEach(function (x) { x.s = slotOf(x.a); });
  window.MG_PALINSESTO = {
    lezioni: S,
    giorni: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
    giorniLunghi: { Lun: 'lunedì', Mar: 'martedì', Mer: 'mercoledì', Gio: 'giovedì', Ven: 'venerdì', Sab: 'sabato' },
    salaPesi: 'Lun-Ven 08-22 · Sab 09-17',
    toMin: toMin,
    fascia: slotOf,
    ora: function (t) { return t.replace('.', ':'); },
    wa: '393920708111'
  };
})();
