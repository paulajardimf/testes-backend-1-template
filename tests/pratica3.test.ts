import { pratica3 } from '../src/pratica3';


describe("Testar o arquivo pratica3.ts", () => {
    test("Uma função que recebe dois números e retorna um obejto com duas propriedades: soma e multi", () => {
        const result = pratica3(3, 5)
        const expectResult = {
            soma: 8,
            multi: 15
        }
        expect(result).toEqual(expectResult)
    })
})