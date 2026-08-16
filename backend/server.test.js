 const request = require('supertest');
const app = require('./server');

describe('GET /api/health', () => {
  it('should return status up and 200 code', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('up');
  });
}); 
