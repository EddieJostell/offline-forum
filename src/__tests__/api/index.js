import * as api from "../../api/index";

describe('api', () => {
  it('fetchPersonas()', () => {
    const expected = [];
    expect(api.fetchPersonas()).toEqual(expect.arrayContaining(expected))
  });
  it('createPostObject()', () => {
    const title = "Hello";
    const content = "Wold";
    const author = "Zac";
    const obj = {
      title,
      content,
      id: api.generateID(),
      author,
      date: (new Date()).toLocaleString()
    }
    expect(api.createPostObject(title, content, author)).not.toMatchObject(obj);

    
  });
  it('fetchPersonas()', () => {
    const expected = [];
    expect(api.fetchPersonas()).toEqual(expect.arrayContaining(expected))
  });
})

