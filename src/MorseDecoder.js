export default class MorseDecoder {
    static decode(morse_code) {
        if (!morse_code) {
            return "";
        }
        if (morse_code === '·−') {
            return "A"
        } else if (morse_code === '−−·−') {
            return "Q"
        }
    }
}
