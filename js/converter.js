/**
 * do not use this map directory. japaneseToHieroglyph(source, target) can handle properly.
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

/**
 * do not use this map directory. hieroglyphToJapanese(source, target) can handle properly.
 */
const HIRAGANAS = {
    "𓄿": "あ", "𓇌": "い", "𓅂": "う", "𓇋": "え", "𓍯": "お",
    "𓎢𓄿": "か", "𓎢𓏭": "き", "𓎢𓅂": "く", "𓎢𓇋": "け", "𓎢𓍯": "こ",
    "𓋴𓄿": "さ", "𓈙": "し", "𓋴𓅂": "す", "𓋴𓇋": "せ", "𓋴𓍯": "そ",
    "𓇤𓄿": "た", "𓍿": "ち", "𓇤𓅂": "つ", "𓇤𓇋": "て", "𓇤𓍯": "と",
    "𓈖𓄿": "な", "𓈖𓏭": "に", "𓈖𓅂": "ぬ", "𓈖𓇋": "ね", "𓈖𓍯": "の",
    "𓉔𓄿": "は", "𓉔𓏭": "ひ", "𓆑": "ふ", "𓉔𓇋": "へ", "𓉔𓍯": "ほ",
    "𓅓𓂣": "ま", "𓅓𓏭": "み", "𓅓𓅂": "む", "𓅓𓇋": "め", "𓅓𓍯": "も",
    "𓇌𓄿": "や", "𓇌𓅂": "ゆ", "𓇌𓍯": "よ",
    "𓂋𓂣": "ら", "𓂋𓏭": "り", "𓂋𓅂": "る", "𓂋𓇋": "れ", "𓂋𓍯": "ろ",
    "𓅂𓂣": "わ", "𓍯": "を", "𓈖": "ん",

    "𓎼𓄿": "が", "𓎼𓏭": "ぎ", "𓎼𓅂": "ぐ", "𓎼𓇋": "げ", "𓎼𓍯": "ご",
    "𓎼𓍯": "ざ", "𓆓": "じ", "𓊃𓅂": "ず", "𓊃𓇋": "ぜ", "𓊃𓍯": "ぞ",
    "𓂧𓂣": "だ", "𓆓": "ぢ", "𓊃𓅂": "づ", "𓂧𓇋": "で", "𓂧𓍯": "ど",
    "𓃀𓄿": "ば", "𓃀𓏭": "び", "𓃀𓄿": "ぶ", "𓃀𓇋": "べ", "𓃀𓍯": "ぼ",
    "𓊪𓄿": "ぱ", "𓊪𓏭": "ぴ", "𓊪𓅂": "ぷ", "𓊪𓇋": "ぺ", "𓊪𓍯": "ぽ",

    "𓎡𓏭𓄿": "きゃ", "𓎡𓏭𓅂": "きゅ", "𓎡𓏭𓍯": "きょ",
    "𓈙𓄿": "しゃ", "𓈙𓅂": "しゅ", "𓈙𓍯": "しょ",
    "𓍿𓄿": "ちゃ", "𓍿𓅂": "ちゅ", "𓍿𓍯": "ちょ",
    "𓈖𓏭𓄿": "にゃ", "𓈖𓏭𓅂": "にゅ", "𓈖𓏭𓍯": "にょ",
    "𓉔𓏭𓄿": "ひゃ", "𓉔𓏭𓅂": "ひゅ", "𓉔𓏭𓍯": "ひょ",
    "𓅓𓏭𓄿": "みゃ", "𓅓𓏭𓅂": "みゅ", "𓅓𓏭𓍯": "みょ",
    "𓂋𓏭𓄿": "りゃ", "𓂋𓏭𓅂": "りゅ", "𓂋𓏭𓍯": "りょ",

    "𓎼𓏭𓅂": "ぎゃ", "𓎼𓏭𓄿": "ぎゅ", "𓎼𓏭𓍯": "ぎょ",
    "𓆓𓄿": "じゃ", "𓆓𓅂": "じゅ", "𓆓𓍯": "じょ",
    "𓃀𓏭𓄿": "びゃ", "𓃀𓏭𓅂": "びゅ", "𓃀𓏭𓍯": "びょ",
    "𓊪𓏭𓄿": "ぴゃ", "𓊪𓏭𓅂": "ぴゅ", "𓊪𓏭𓍯": "ぴょ"
};

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
            converted += HIEROGLYPHS[character] + " ";
        } else {
            result = false
        }
        i++;
    }
    if (converted.endsWith(" ")) {
        converted = converted.substring(0, converted.length - 1);
    }
    target.value = converted;
    return result;
}

/**
 *
 * @returns {boolean} returns true if string is null or "" otherwise false.
 */
String.prototype.isEmpty = function () {
    return !this[0]
};

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number'
            || !isFinite(position)
            || Math.floor(position) !== position
            || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.lastIndexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}

function hieroglyphToJapanese(source, target) {
    let result = true;
    let converted = "";

    source.split(" ").forEach(function (t) {
        let c = t;
        if (c.endsWith(" ")) {
            c = c.substring(0, c.length - 1);
        }
        if (c.isEmpty()) {
            return;
        }
        console.log("handling string: " + t);
        if (HIRAGANAS[c]) {
            result += HIRAGANAS[c];
        } else {
            result = false;
        }
    })
}
