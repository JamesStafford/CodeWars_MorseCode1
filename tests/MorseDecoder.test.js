import morseCodeAlphabet from "../data/MorseCodeAlphabet";
import {decode} from "../src/MorseDecoder";

describe("For Morse Decoder, ", () => {
    test("decode does not throw", () => {
        expect(() => {
            decode();
        }).not.toThrow();
    });

    test ("decode returns empty string if provided empty input", () => {
        expect(decode("")).toBe("")
    });

    Object.entries(morseCodeAlphabet).forEach(morseTranslation => {
        const englishCharacter = morseTranslation[0];
        const morseCharacter = morseTranslation[1];
        test(`decode parses "${morseCharacter}" to "${englishCharacter}"`, () => {
            expect(decode(morseCharacter)).toBe(englishCharacter);
        })
    });

    test("decode parses 'SOS' in Morse", () => {
        expect(decode("···−−−···")).toBe("SOS")
    });

    /*
    test("decode parses 'HEY JUDE' in Morse", () => {
        expect(decode(".... . -.--   .--- ..- -.. .")).toBe("HEY JUDE")
    });
     */
});
