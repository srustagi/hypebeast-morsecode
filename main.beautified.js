$(function() {
    $("input").keyup(function() {
        $("#target").html(t($(this).val()));
    });
    var a = function(a) {
        for (var r = "", t = 0; t < a.length; t++) "-" == a[t] ? r += '<img class="image" src="supreme.png">' : "." == a[t] ? r += '<img class="image" src="bape.png">' : "|" == a[t] ? r += '<span class="separator">* </span>' : "+" == a[t] && (r += '<span class="separator">.</span>');
        return r;
    }, r = {
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--..",
        1: ".----",
        2: "..---",
        3: "...--",
        4: "....-",
        5: ".....",
        6: "-....",
        7: "--...",
        8: "---..",
        9: "----.",
        0: "-----",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "'": ".----.",
        "!": "-.-.--",
        "/": "-..-.",
        ":": "---...",
        ";": "-.-.-.",
        "=": "-...-",
        "+": ".-.-.",
        "-": "-....-",
        _: "..--.-",
        '"': ".-..-.",
        "@": ".--.-.",
        " ": "|"
    }, t = function(t) {
        for (var s = "", e = 0; e < t.length; e++) " " == t.toLowerCase().charAt(e) ? s += r[t.toLowerCase().charAt(e)] : s = t.toLowerCase().charAt(e) in r ? s + "+" + r[t.toLowerCase().charAt(e)] : s;
        return a(s);
    };
});