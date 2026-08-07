// ============================================================
//  Tagescockpit – Konfiguration
//  NUR DIESE DATEI musst du anfassen: unten die CLIENT_ID eintragen.
// ============================================================
window.COCKPIT_CONFIG = {

  // 👉 Hier deine OAuth-Client-ID aus der Google-Cloud-Console einsetzen
  //    (aus Teil B der Anleitung). Sieht ungefähr so aus:
  //    "1234567890-abc...def.apps.googleusercontent.com"
  CLIENT_ID: "511348899439-1b9rq3ol29rq9l15fei3hhnhm0n8cqmd.apps.googleusercontent.com",

  // Eure Leadliste (bereits eingetragen – muss nicht geändert werden)
  SHEET_ID: "1eRjJIFXtiVCywbZ0Tpfa3IMBc_YuaCvATgt37Q_cqWk",

  // Reiter-Namen in der Tabelle
  TABS: {
    leadliste: "Leadliste",      // Ankauf-Pipeline (Objekte)
    crm: "CRM",                  // Netzwerk-Kontakte (Makler & Co., mit Kontakt-Takt)
    objektliste: "Objektliste",  // Bestands-/Verkaufsobjekte (Steige 9)
    partner: "Partner",          // Banken, Notare, Gutachter … – Nachschlagewerk OHNE Kontakt-Takt
  },

  // Berechtigungen, die die App anfragt.
  // Für den Verbindungstest reicht Sheets. Gmail/Kalender schalten wir später dazu.
  SCOPES: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/gmail.readonly",
    "https://www.googleapis.com/auth/calendar.events",
  ],

  // Gmail-Pipeline-Labels (für später, Stand 12.07.2026)
  LABELS: {
    "Label_4035370739038923452": "1. to do",
    "Label_7512053688514565456": "2. Follow up",
    "Label_243940710325973319":  "2. Follow up/Vorqualifikation",
    "Label_213442589252132562":  "2. Follow up/Netzwerk",
    "Label_5":                   "2. Follow up/telefoniert",
    "Label_7189762826679582410": "3. Angebotsabgabe",
    "Label_3233832232636241813": "3. Kaufvertrag",
    "Label_6504279950295099838": "Aufwertung",
    "Label_8641733881250447557": "Aufteilung",
  },
};
