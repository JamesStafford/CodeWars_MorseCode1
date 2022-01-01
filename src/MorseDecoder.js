import MorseCodeAlphabet from "../data/MorseCodeAlphabet";

export function decode(morseCode) {
    if (!morseCode) {
        return "";
    }

    let englishPhrase = "";

    const morseWords = morseCode.split(/[ ]{2,}/);
    morseWords.forEach(word => {
        const characters = word.split(" ");
        const englishWord = translateWord(characters)
        if (englishWord) {
            if (/\S/.test(englishPhrase)) {
                englishPhrase += ` ${englishWord}`;
            } else {
                englishPhrase += englishWord
            }
        }
    })

    return englishPhrase;
}

export function getEnglishForMorse(morseCharacter) {
    const morseIndexInTranslation = 1;
    const englishIndexInTranslation = 0;

    if (!morseCharacter) {
        return "";
    }

    const entry = Object.entries(MorseCodeAlphabet).find(morseTranslation => {
        const localMorseCharacter = morseTranslation[morseIndexInTranslation];
        return morseCharacter === localMorseCharacter;
    });

    if (!entry) {
        throw new Error(`Invalid character provided. character: "${morseCharacter}"`);
    }

    return entry[englishIndexInTranslation];
}

export function translateWord(morseWordCharacters) {
    let englishWord = "";
    morseWordCharacters.forEach(morseCharacter => {
       englishWord += getEnglishForMorse(morseCharacter);
    });
    return englishWord;
}
