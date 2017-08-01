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

    "が": "𓎼𓄿", "ぎ": "𓎼𓏭", "ぐ": "𓎼𓅂", "げ": "𓎼𓇋", "ご": "𓎼𓍯",
    "ざ": "𓎼𓍯", "じ": "𓆓", "ず": "𓊃𓅂", "ぜ": "𓊃𓇋", "ぞ": "𓊃𓍯",
    "だ": "𓂧𓂣", "ぢ": "𓆓", "づ": "𓊃𓅂", "で": "𓂧𓇋", "ど": "𓂧𓍯",
    "ば": "𓃀𓄿", "び": "𓃀𓏭", "ぶ": "𓃀𓄿", "べ": "𓃀𓇋", "ぼ": "𓃀𓍯",
    "ぱ": "𓊪𓄿", "ぴ": "𓊪𓏭", "ぷ": "𓊪𓅂", "ぺ": "𓊪𓇋", "ぽ": "𓊪𓍯",

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

function japaneseToHieroglyph(source, target) {
    let result = true;
    let converted = "";
    let i = 0;
    while (i < source.length) {
        let character = source[i];
        if (i + 1 < source.length) {
            const nextChar = source[i + 1];
            if (nextChar === "ゃ" || nextChar === "ゅ" || nextChar === "ょ") {
                character += nextChar;
                i++;
            }
        }
        console.log("handling character: " + character);
        if (HIEROGLYPHS[character]) {
            converted += HIEROGLYPHS[character];
        } else {
            result = false
        }
        i++;
    }
    target.value = converted;
    return result;
}

//TODO: Not yet implemented
function hieroglyphToHiragana(source) {
    console.log("Not yet implemented")
}
