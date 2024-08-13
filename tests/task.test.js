// tests/task.test.js
const request = require('supertest');
const app = require('../server');

describe('Task API', () => {
    it('GET /api/tasks should return all tasks', async () => {
        const res = await request(app).get('/api/tasks');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    it('POST /api/tasks should create a new task', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .send({
                title: 'New Task',
                description: 'Test Task',
                status: 'To Do',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    });
});
