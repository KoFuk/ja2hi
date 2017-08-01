function convert() {
    const resultIsSuccess = japaneseToHieroglyph(document.getElementById("source").value,
        document.getElementById("result"));
    const errorView = document.getElementById("error");
    if (!resultIsSuccess) {
        errorView.style.display = "inherit";
    } else {
        errorView.style.display = "none";
    }
}
