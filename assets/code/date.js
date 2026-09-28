const stunde = new Date().getHours();
let text = "";

if (stunde >= 6 && stunde < 9) {
    text = "Guten Morgen :D";
} else if (stunde >= 12 && stunde < 14) {
    text = "Guten Mittag";
} else if (stunde >= 14 && stunde < 18) {
    text = "Guten Nachmittag :D";
} else if (stunde >= 18 && stunde < 22) {
    text = "Guten Abend :D";
} else {
    text = "Gute Nacht :D";
}

// 1. Neues h2-Element erstellen
const ueberschrift = document.createElement("h2");
ueberschrift.innerText = text;

// 2. Element gezielt in die section einfügen
const container = document.getElementById("begruessung-container");
if (container) {
    container.appendChild(ueberschrift);
}
