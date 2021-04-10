/* eslint-disable no-undef */
const request = require('supertest')
const app = require('../index')

describe('GET /api/iecho', () => {
  it('responds json that returns the inverted string and the flag of whether or not it is palindrome', (done) => {
    request(app)
      .get('/api/iecho?text=oso')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('response json that returns an error since the expected parameter is not sent', (done) => {
    request(app)
      .get('/api/iecho')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
})
