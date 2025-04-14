document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("muunna").addEventListener("click", function() {
        const syote = document.getElementById("lampotila").value.trim();
        const suunta = document.getElementById("suunta").value;
        const tulos = document.getElementById("tulos");
        const desimaali = document.querySelector('input[name="desimaali"]:checked').value;

        if (syote === "") {
            tulos.textContent = "Anna lämpötila.";
            return;
        }

        const arvo = parseFloat(syote);
        if (isNaN(arvo)) {
            tulos.textContent = "Syötteen täytyy olla numero.";
            return;
        }

        let muunnettu = 0;
        let yksikko = "";

        if (suunta === "CtoF") {
            if (arvo < -273.15) {
                tulos.textContent = "Lämpötila on pienempi kuin absoluuttinen nollpiste";
                return;
            }
            muunnettu = (arvo * 9/5) + 32;
            yksikko = "°F";
        } else {
            if (arvo < -459.67) {
                tulos.textContent = "Lämpötila on pienempi kuin absoluuttinen nollpiste";
                return;
            }
            muunnettu = (arvo - 32) * 5/9;
            yksikko = "°C";
        }

        tulos.textContent = "Muunnettu lämpötila: " + muunnettu.toFixed(desimaali) + " " + yksikko;
    });
});
