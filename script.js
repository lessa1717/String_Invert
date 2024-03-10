function inverterString() {
    let inputString = document.getElementById("inputString").value;
    let stringInvertida = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        stringInvertida += inputString[i];
    }
    document.getElementById("stringOriginal").innerText = "String original: " + inputString;
    document.getElementById("stringInvertida").innerText = "String invertida: " + stringInvertida;
}
