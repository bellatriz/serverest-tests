const request = require('supertest');

const api_server = 'https://serverest.dev'

describe('Login', () =>{
  
  it('should be login successfully', async () => {
    const response = await request(api_server)
      .post('/login')
      .send( {
        "email": "fulano@qa.com",
        "password": "teste"
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login realizado com sucesso');
    expect(response.body.authorization).toBeDefined();
  })

  it('should be unsuccessful login', async() => {
    const response = await request(api_server)
    .post('/login')
    .send( {
      "email": "batatinha@email.com",
      "password": "123"
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Email e/ou senha inválidos');
  })

  it('should be login with invalid email', async() => {
    const response = await request(api_server)
    .post('/login')
    .send( {
      "email": "batatinha",
      "password": "123"
    });

    expect(response.status).toBe(400);
    expect(response.body.email).toBe('email deve ser um email válido');
  })

})
