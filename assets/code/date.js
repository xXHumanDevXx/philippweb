const stunde = new Date().getHours();
let text = "";

if (stunde >= 6 && stunde < 9) {
    text = "Guten Morgen";
} else if (stunde >= 12 && stunde < 14) {
    text = "Guten Mittag";
} else if (stunde >= 14 && stunde < 18) {
    text = "Guten Nachmittag";
} else if (stunde >= 18 && stunde < 22) {
    text = "Guten Abend";
} else {
    text = "Gute Nacht";
}

// Erstellt das h1-Element und fügt es direkt in den Body ein
const ueberschrift = document.createElement("h1");
ueberschrift.innerText = text;
document.body.appendChild(ueberschrift);
