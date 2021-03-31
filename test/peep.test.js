const Peep = require('../src/peep')
let peep;

describe('Peep', () => {
  test('initializes as an empty object', () => {
    peep = new Peep();
    expect(peep.body).toEqual("")
  })

  test('can be passed a body and return that', () => {
    peep = new Peep('this is a test peep')
    expect(peep.body).toEqual('this is a test peep')
  })
})