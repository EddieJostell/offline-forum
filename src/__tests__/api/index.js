import * as api from "../../api/index";

describe('api', () => {
  it('fetchPersonas()', () => {
    const expected = [];
    expect(api.fetchPersonas()).toEqual(expect.arrayContaining(expected))
  });
})

