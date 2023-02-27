export interface OperacaoAritimetrica {
  soma: number,
  multi: number
}

export const pratica3 = (num1: number, num2: number): OperacaoAritimetrica => {
  const operacao = {
      soma: num1 + num2,
      multi: num1 * num2
  }
  return operacao
}