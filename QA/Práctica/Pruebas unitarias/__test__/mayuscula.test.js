const mayuscula = require('../mayuscula');


test ("Pasar una palabra a mayuscula", () => {
    expect(mayuscula("perro")).toBe("PERRO");
})

test ("Pasar una frase a mayuscula", () => {
    expect(mayuscula("un perro es un animal")).toBe(("UN PERRO ES UN ANIMAL"));
})

test ("Pasar una frase combinada entera a mayúscula", () => {
    expect(mayuscula("VoY a cOmeR")).toBe(("VOY A COMER"));
})

// DDT(Data Driven Testing)

test.each([["perro", "PERRO"], ["un perro es un animal", "UN PERRO ES UN ANIMAL"], ["VoY a cOmeR", "VOY A COMER"]])(
    'i%+i% igual a i%', (a,expected) => {
        expect(mayuscula(a)).toBe(expected);
    }
)