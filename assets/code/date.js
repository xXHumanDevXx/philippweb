function getGreetingText() {
    const stunde = new Date().getHours();
    let text = "";

    if (stunde >= 6 && stunde < 12) {
        text = "Guten Morgen :D";
    } else if (stunde >= 12 && stunde < 14) {
        text = "Guten Mittag :D";
    } else if (stunde >= 14 && stunde < 18) {
        text = "Guten Nachmittag :D";
    } else if (stunde >= 18 && stunde < 22) {
        text = "Guten Abend :D";
    } else {
        text = "Gute Nacht :D";
    }

    return text;
}

function setGreeting() {
    try {
        const container = document.getElementById("begruessung-container");

        if (!container) {
            throw new Error("Element mit der ID 'begruessung-container' wurde nicht gefunden.");
        }

        const text = getGreetingText();

        const ueberschrift = document.createElement("h2");
        ueberschrift.textContent = text;

        container.appendChild(ueberschrift);
    } catch (error) {
        console.error("Fehler beim Setzen der Begrüßung:", error.message);
    }
}

// Script läuft erst wenn DOM geladen ist ...
document.addEventListener("DOMContentLoaded", setGreeting);
