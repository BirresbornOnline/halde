# Halde 
Ein Sammlung von JS libs die sich selten aendern und fuer die ich kein build und release machen will. Man kann GitHub **nicht** mehr als CDN verwenden und die Datei direkt von hier in die Webseite einbinden. Man muss sich einen CDNs bedienen, dass den Inhalt von Github abholt und dann der Webseite zum Einbinden zur Verfügung stellt. https://www.jsdelivr.com/github

## Adventsfenster 2023

Quell-Datei: https://github.com/BirresbornOnline/halde/blob/main/adventsfenster2023.js
CDN-Datei: https://cdn.jsdelivr.net/gh/BirresbornOnline/halde@main/adventsfenster2023.js

Hier wird vom 1.12.2023 - 24.12.2023 jeden Tag ein (bzw. 2) URLs zu jeweils tagesaktuellen Adventsfensterfoto eingefügt. Das Bild kommt gegen 13 Uhr CET per E-Mail von Rudi an mich.
Nach dem einfügen und mergen zu master, muss das JS CDN gepurged werden, damit die neue Datei auch auf der Seite eingebunden wird.
https://www.jsdelivr.com/tools/purge
