const request = require('supertest');
const server = require('./app'); // Importe le serveur et non l'app

afterAll(() => {
  server.close(); // Ferme le serveur après les tests
});

describe('Test the app', () => {
  test('Get / should return Hello, World!', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
