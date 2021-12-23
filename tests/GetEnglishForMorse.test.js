import {getEnglishForMorse} from "../src/MorseDecoder";
import morseCodeAlphabet from "../data/MorseCodeAlphabet";

describe("For GetEnglishForMorse, ", () => {
   test("GetEnglishForMorse does not throw", () => {
      expect(() => getEnglishForMorse("·−")).not.toThrow();
   });

   test("Provided an english character will cause GetEnglishForMorse to throw", () => {
      expect(() => getEnglishForMorse("A")).toThrowError(`Invalid character provided. character: "A"`);
   })

   Object.entries(morseCodeAlphabet).forEach(morseTranslation => {
      const englishCharacter = morseTranslation[0];
      const morseCharacter = morseTranslation[1];
      test(`decode parses "${morseCharacter}" to "${englishCharacter}"`, () => {
         expect(getEnglishForMorse(morseCharacter)).toBe(englishCharacter);
      })
   });
});
