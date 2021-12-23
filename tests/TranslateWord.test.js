import {translateWord} from "../src/MorseDecoder";

describe("For TranslateWord, ", () => {
    test("TranslateWord does not throw when provided valid input", () => {
        expect(() => translateWord(["····", "·", "−·−−"])).not.toThrow();
    });

    test(`TranslateWord translates "···· · −·−−" to "HEY"`, () => {
        expect(translateWord(["····", "·", "−·−−"])).toBe("HEY");
    });
});
