
class Dictionary {
    constructor() {

    }
    async getWord(process) {
        const url = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${process}`);
        const translate = await url.json();
        const another = translate.phonetic;

        return {
            translate ,another
        }
    }
}
