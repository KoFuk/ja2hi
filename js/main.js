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

let convertDirection = 0;

const convertButton = document.getElementById("convert");

function switchConvertDirection() {
    convertDirection = convertDirection === 0 ? 1 : 0;
    Velocity(convertButton, {rotateZ: convertDirection === 0 ? 0 : 180}, {duration: 500});
}

function convertWithSelectedDirection() {
    if (convertDirection === 0) {
        convertJapanese();
    } else {
        convertHieroglyph();
    }
}

function expandLicenseSection() {
    document.getElementById("license").style.display = "inherit";
}
