import MorseDecoder from "../src/MorseDecoder";

describe("For Morse Decoder, ", () => {
    test("main function does not throw", () => {
        expect(() => {
            MorseDecoder.decode();
        }).not.toThrow();
    })
})
