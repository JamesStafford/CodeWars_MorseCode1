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

    test("decode parses 'A' in Morse", () => {
        expect(MorseDecoder.decode("·−")).toBe("A")
    });

    test("decode parses 'Q' in Morse", () => {
        expect(MorseDecoder.decode("−−·−")).toBe("Q")
    });

    /*
    test("decode parses 'HEY JUDE' in Morse", () => {
        expect(MorseDecoder.decode(".... . -.--   .--- ..- -.. .")).toBe("HEY JUDE")
    });

    test("decode parses 'SOS' in Morse", () => {
        expect(MorseDecoder.decode("···−−−···")).toBe("SOS")
    });
     */
});
