const Peep = require('../src/Peep')
const User = require('../src/User.js')
let peep;

describe('Peep', () => {
  test('initializes as an empty object', () => {
    peep = new Peep();
    expect(peep.body).toEqual("")
  })

  test('can be passed a body and return that', () => {
    peep = new Peep(1, 'this is a test peep')
    expect(peep.body).toEqual('this is a test peep')
  })

  test('can be passed a createdAt', () => {
    peep = new Peep(1, 'test', '2021-03-31')
    expect(peep.createdAt).toEqual('2021-03-31')
  })

  test('can be passed a user', () => {
    jest.mock('../src/User')
    let user = new User()
    peep = new Peep(1, 'test', '2021-03-31', user)
    expect(peep.user).toEqual(user) 
  })
})