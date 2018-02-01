import { fetchPersonas } from "../../api/index";

describe('Funktion som alldrig körs?', () => {
  test('fetchPersonas()', () => {
    const expected = [];
    expect(fetchPersonas()).toEqual(expect.arrayContaining(expected))
  });
})
