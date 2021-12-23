import MorseDecoder from "../src/MorseDecoder";

describe("For Morse Decoder, ", () => {
    test("decode does not throw", () => {
        expect(() => {
            MorseDecoder.decode();
        }).not.toThrow();
    });

    test ("decode returns empty string if provided empty input", () => {
        expect(MorseDecoder.decode("")).toBe("")
    });

    test("decode parses 'HEY JUDE' in Morse", () => {
        expect(MorseDecoder.decode(".... . -.--   .--- ..- -.. .")).toBe("HEY JUDE")
    });
});
