import { findWords } from '../src/index';

describe('testing findWords file', () => {

    test('empty key word string should result in an empty array', () => {
        expect(findWords("", ["ate", "eat"])).toStrictEqual([]);
    });

    test('a non-letter string should result in an empty array', () => {
        expect(findWords("#", ["ate", "eat"])).toStrictEqual([]);
    });

    test('empty array string should result in an empty array', () => {
        expect(findWords("ate", [])).toStrictEqual([]);
    });


});