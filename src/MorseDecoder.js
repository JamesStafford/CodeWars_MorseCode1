import MorseCodeAlphabet from "../data/MorseCodeAlphabet";

export function decode(morseCode) {
    if (!morseCode) {
        return "";
    }

    const characters = morseCode.split(" ");
    const result = translateWord(characters);

    return result;
    // return getEnglishForMorse(morseCode);
}

export function getEnglishForMorse(morseCharacter) {
    const entry = Object.entries(MorseCodeAlphabet).find(morseTranslation => {
        const localMorseCharacter = morseTranslation[1];
        return morseCharacter === localMorseCharacter;
    });

    if (!entry) {
        throw new Error(`Invalid character provided. character: "${morseCharacter}"`);
    }

    return entry[0];
}

export function translateWord(morseWordCharacters) {
    let englishWord = "";
    morseWordCharacters.forEach(morseCharacter => {
       englishWord += getEnglishForMorse(morseCharacter);
    });
    return englishWord;
}
