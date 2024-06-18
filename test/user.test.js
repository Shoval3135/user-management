const { expect } = require('chai');;
const chaiHttp = require('chai-http');
const app = require('../src/app');


chai.use(chaiHttp);

describe('User API Tests', () => {
    it('should register a new user', (done) => {
        chai.request(app)
            .post('/api/auth/register')
            .send({
                name: 'John Doe',
                email: 'john.doe@example.com',
                password: 'password'
            })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('token');
                done();
            });
    });

    it('should login an existing user', (done) => {
        chai.request(app)
            .post('/api/auth/login')
            .send({
                email: 'john.doe@example.com',
                password: 'password'
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('token');
                done();
            });
    });
});

