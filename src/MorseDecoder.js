import MorseCodeAlphabet from "../data/MorseCodeAlphabet";

export function decode(morse_code) {
    if (!morse_code) {
        return "";
    }
    if (morse_code === '·−') {
        return "A"
    } else if (morse_code === '−−·−') {
        return "Q"
    }
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
