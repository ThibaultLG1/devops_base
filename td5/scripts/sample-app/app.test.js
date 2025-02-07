const request = require('supertest');
const app = require('./app');
console.log("Jest Running in:", __dirname);

describe('Test the app', () => {
  test('Get / should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });

});
