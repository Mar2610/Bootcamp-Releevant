
const inverso = require('../inverso');

test ("Palabra", () => {
    expect(inverso("perro")).toBe("orrep");
})

test ("Frase", () => {
    expect(inverso("un perro es un animal")).toBe(("lamina nu se orrep nu"));
})

test ("Frase con números", () => {
    expect(inverso("Choca esos 5")).toBe(("5 sose acohC"));
})

test ("Pregunta", () => {
    expect(inverso("¿Qué tal?")).toBe(("?lat éuQ¿"));
})

// DDT(Data Driven Testing)

test.each([["perro", "orrep"], ["un perro es un animal", "lamina nu se orrep nu"], ["Choca esos 5", "5 sose acohC"], ["¿Qué tal?", "?lat éuQ¿"]])(
    'i%+i% igual a i%', (a,expected) => {
        expect(inverso(a)).toBe(expected);
    }
)