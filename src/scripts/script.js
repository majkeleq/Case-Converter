document.getElementById("upper-case").addEventListener("click", function() {
   let textArea = document.querySelector("textarea");
   textArea.value = textArea.value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function() {
    let textArea = document.querySelector("textarea");
    textArea.value = textArea.value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function() {
    let textArea = document.querySelector("textarea");
    let words = textArea.value
        .split(" ")
        .map( word => word.charAt(0).toUpperCase().concat(word.substring(1, word.length)));
    textArea.value = words.join(" ").trim();
});

document.getElementById("sentence-case").addEventListener("click", function() {
    let textArea = document.querySelector("textarea");
    let sentences = textArea.value
        .split(".")
        .map(sentence => sentence.trim())
        .map(sentence => sentence.charAt(0).toUpperCase().concat(sentence.substring(1, sentence.length).toLowerCase()));
    textArea.value = sentences.join(". ").trim();
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function () {
    let textArea = document.querySelector("textarea");
    download("text.txt", textArea.value)
})