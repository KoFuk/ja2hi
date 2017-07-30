/**
 * do not use this map directory. hiraganaToHieroglyph(source) can handle properly.
 */
const HIEROGLYPHS = {
    "あ": "", "い": "", "う": "", "え": "", "お": "",
    "か": "", "き": "", "く": "", "け": "", "こ": "",
    "さ": "", "し": "", "す": "", "せ": "", "そ": "",
    "た": "", "ち": "", "つ": "", "て": "", "と": "",
    "な": "", "に": "", "ぬ": "", "ね": "", "の": "",
    "は": "", "ひ": "", "ふ": "", "へ": "", "ほ": "",
    "ま": "", "み": "", "む": "", "め": "", "も": "",
    "や": "", "ゆ": "", "よ": "",
    "ら": "", "り": "", "る": "", "れ": "", "ろ": "",
    "わ": "", "を": "", "ん": "",

    "きゃ": "", "きゅ": "", "きょ": "",
    "しゃ": "", "しゅ": "", "しょ": "",
    "ちゃ": "", "ちゅ": "", "ちょ": "",
    "にゃ": "", "にゅ": "", "にょ": "",
    "ひゃ": "", "ひゅ": "", "ひょ": "",
    "みゃ": "", "みゅ": "", "みょ": "",
    "りゃ": "", "りゅ": "", "りょ": "",

    "ぎゃ": "", "ぎゅ": "", "ぎょ": "",
    "じゃ": "", "じゅ": "", "じょ": "",
    "びゃ": "", "びゅ": "", "びょ": "",
    "ぴゃ": "", "ぴゅ": "", "ぴょ": ""
};

//TODO: Not yet implemented
const HIRAGANAS = {
};

function hiraganaToHieroglyph(source) {
    let result = "";
    let i = 0;
    while (i < source.length) {
        let character = source[i];
        console.log("character is " + character);
        if (i + 1 < source.length) {
            const nextChar = source[i + 1];
            if (nextChar === "ゃ" || nextChar === "ゅ" || nextChar === "ょ") {
                character += nextChar;
                i++;
            }
        }
        i++;
        result += HIEROGLYPHS[character];
    }
    return result;
}

//TODO: Not yet implemented
function hieroglyphToHiragana(source) {
    console.log("Not yet implemented")
}
