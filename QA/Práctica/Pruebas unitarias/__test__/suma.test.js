
const suma = require('../suma');


test ("Sumar dos números positivos", () => {
    expect(suma(1,1)).toBe(2);
})

test ("Sumar un número y una letra", () => {
    expect(suma(4.5,7.6)).toBe(12.1);
})

test ("Sumar un número negativo y otro positivo", () => {
    expect(suma(-3,1)).toBe(-2);
})

// DDT(Data Driven Testing)

test.each([[2,2,4], [3,3,6], [25,25,50]])(
    'i%+i% igual a i%', (a,b,expected) => {
        expect(suma(a,b)).toBe(expected);
    }
)