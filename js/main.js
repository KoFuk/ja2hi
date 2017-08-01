function convertJapanese() {
    const resultIsSuccess = japaneseToHieroglyph(document.getElementById("japanese").value,
        document.getElementById("hieroglyph"));
    const errorView = document.getElementById("error");
    if (!resultIsSuccess) {
        errorView.style.display = "inherit";
    } else {
        errorView.style.display = "none";
    }
}

function convertHieroglyph() {
    const resultIsSuccess = hieroglyphToJapanese(document.getElementById("hieroglyph").value,
        document.getElementById("japanese"));
    const errorView = document.getElementById("error");
    if (!resultIsSuccess) {
        errorView.style.display = "inherit";
    } else {
        errorView.style.display = "none";
    }

    document.getElementById("beta_warning").style.display = "inherit";
}
