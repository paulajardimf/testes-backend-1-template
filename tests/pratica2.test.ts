import {pratica2} from "../src/pratica2"

describe("Teste do arquivo pratica2.ts", () => {
  test("A função recebe um parâmetro e retorna null caso seja diferente de number", () => {
    const result = pratica2("1" as any)
    expect(result).toBeNull()
    // expect(result).not.toBe(true)
  })
  test("A função recebe um número e retorna null caso não seja um número inteiro", () => {
    const result = pratica2(1.5)
    expect(result).toBeNull()
  })
  test("Se o número for ímpar, a função retorna false", () => {
    const result = pratica2(1)
    expect(result).toBe(false)
  })
  test("Se o número for par, a função retorna true", () => {
    const result = pratica2(2)
    expect(result).toBeTruthy()
  })
})