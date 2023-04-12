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