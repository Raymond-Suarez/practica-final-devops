//Index para el Test

const HMundo = require('./index')

test('Mensaje Comprobado', ()=> {
    expect(HMundo()).toBe('Hola, Mundo!');
});