import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    // response.send('Listagem de usuários');
    response.json(
        ['Alexandre', 'Lima', 'Rodrigues', 
        'Juliana', 'Regina', 'Navarro']
    );
})

app.listen(3333);