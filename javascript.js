function HeureCheckEJS() {
    krucial = new Date;
    heure = krucial.getHours();
    min = krucial.getMinutes();
    sec = krucial.getSeconds();
    jour = krucial.getDate();
    mois = krucial.getMonth() + 1;
    annee = krucial.getFullYear();
    if (sec < 10)
        sec0 = "0";
    else
        sec0 = "";
    if (min < 10)
        min0 = "0";
    else
        min0 = "";
    if (heure < 10)
        heure0 = "0";
    else
        heure0 = "";
    DinaHeure = heure0 + heure + ":" + min0 + min + ":" + sec0 + sec;
    which = DinaHeure
    if (document.getElementById) {
        document.getElementById("ejs_heure").innerHTML = which;
    }
    setTimeout("HeureCheckEJS()", 1000)
}
window.onload = HeureCheckEJS;

function toggle_text() {
    var span = document.getElementById("span_txt");
    if (span.style.display == "none") {
        span.style.display = "inline";
    } else {
        span.style.display = "none";
    }
}

function toggle_text() {
    var span = document.getElementById("span_txt");
    if (span.innerHTML != "") {
        span.innerHTML = "";
    } else {
        span.innerHTML = "el.abdi.youssef.pro@gmail.com";
    }
}