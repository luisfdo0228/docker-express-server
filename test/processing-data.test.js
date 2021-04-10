/* eslint-disable no-undef */
const request = require('supertest')
const app = require('../index')

describe('GET /api/iecho?text=oso', () => {
  it('responds json that returns the inverted string and the flag of whether or not it is palindrome', (done) => {
    request(app)
      .get('/api/iecho?text=oso')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})
