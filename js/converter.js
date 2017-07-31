/**
 * do not use this map directory. hiraganaToHieroglyph(source) can handle properly.
 */
const HIEROGLYPHS = {
    "あ": "𓄿", "い": "𓇌", "う": "𓅂", "え": "𓇋", "お": "𓍯",
    "か": "𓎢𓄿", "き": "𓎢𓏭", "く": "𓎢𓅂", "け": "𓎢𓇋", "こ": "𓎢𓍯",
    "さ": "𓋴𓄿", "し": "𓈙", "す": "𓋴𓅂", "せ": "𓋴𓇋", "そ": "𓋴𓍯",
    "た": "𓇤𓄿", "ち": "𓍿", "つ": "𓇤𓅂", "て": "𓇤𓇋", "と": "𓇤𓍯",
    "な": "𓈖𓄿", "に": "𓈖𓏭", "ぬ": "𓈖𓅂", "ね": "𓈖𓇋", "の": "𓈖𓍯",
    "は": "𓉔𓄿", "ひ": "𓉔𓏭", "ふ": "𓆑", "へ": "𓉔𓇋", "ほ": "𓉔𓍯",
    "ま": "𓅓𓂣", "み": "𓅓𓏭", "む": "𓅓𓅂", "め": "𓅓𓇋", "も": "𓅓𓍯",
    "や": "𓇌𓄿", "ゆ": "𓇌𓅂", "よ": "𓇌𓍯",
    "ら": "𓂋𓂣", "り": "𓂋𓏭", "る": "𓂋𓅂", "れ": "𓂋𓇋", "ろ": "𓂋𓍯",
    "わ": "𓅂𓂣", "を": "𓍯", "ん": "𓈖",

    "が": "", "ぎ": "", "ぐ": "", "げ": "", "ご": "",
    "ざ": "", "じ": "", "ず": "", "ぜ": "", "ぞ": "",
    "だ": "", "ぢ": "", "づ": "", "で": "", "ど": "",
    "ば": "", "び": "", "ぶ": "", "べ": "", "ぼ": "",
    "ぱ": "", "ぴ": "", "ぷ": "", "ぺ": "", "ぽ": "",

    "きゃ": "𓎡𓏭𓄿", "きゅ": "𓎡𓏭𓅂", "きょ": "𓎡𓏭𓍯",
    "しゃ": "𓈙𓄿", "しゅ": "𓈙𓅂", "しょ": "𓈙𓍯",
    "ちゃ": "𓍿𓄿", "ちゅ": "𓍿𓅂", "ちょ": "𓍿𓍯",
    "にゃ": "𓈖𓏭𓄿", "にゅ": "𓈖𓏭𓅂", "にょ": "𓈖𓏭𓍯",
    "ひゃ": "𓉔𓏭𓄿", "ひゅ": "𓉔𓏭𓅂", "ひょ": "𓉔𓏭𓍯",
    "みゃ": "𓅓𓏭𓄿", "みゅ": "𓅓𓏭𓅂", "みょ": "𓅓𓏭𓍯",
    "りゃ": "𓂋𓏭𓄿", "りゅ": "𓂋𓏭𓅂", "りょ": "𓂋𓏭𓍯",

    "ぎゃ": "𓎼𓏭𓅂", "ぎゅ": "𓎼𓏭𓄿", "ぎょ": "𓎼𓏭𓍯",
    "じゃ": "𓆓𓄿", "じゅ": "𓆓𓅂", "じょ": "𓆓𓍯",
    "びゃ": "𓃀𓏭𓄿", "びゅ": "𓃀𓏭𓅂", "びょ": "𓃀𓏭𓍯",
    "ぴゃ": "𓊪𓏭𓄿", "ぴゅ": "𓊪𓏭𓅂", "ぴょ": "𓊪𓏭𓍯"
};

//TODO: Not yet implemented
const HIRAGANAS = {};

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
        if (HIEROGLYPHS[character]) {
            result += HIEROGLYPHS[character];
        }
        i++;
    }
    return result;
}

//TODO: Not yet implemented
function hieroglyphToHiragana(source) {
    console.log("Not yet implemented")
}
