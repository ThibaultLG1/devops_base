const request = require('supertest');
const server = require('./app'); // ✅ Import du serveur

console.log("Jest Running in:", __dirname);

describe('Test the app', () => {
  test('Get / should return Hello, World!', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('DevOps Labs!');
  });

  // ✅ Fermeture du serveur après les tests pour éviter que Jest ne reste bloqué
  afterAll((done) => {
    server.close(() => {
      console.log("Server closed successfully");
      done();
    });
  });
});
