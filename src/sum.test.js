import {add, subtract, multiply, divide} from './sum';

describe('Funções de cálculo', () => {
    it('soma 1 + 2 para ser igual a 3', () => {
      expect(add(1, 2)).toBe(3);
    });
  
    it('subtrai 5 - 3 para ser igual a 2', () => {
      expect(subtract(5, 3)).toBe(2);
    });
  
    it('multiplica 4 * 6 para ser igual a 24', () => {
      expect(multiply(4, 6)).toBe(24);
    });
  
    it('divide 8 / 2 para ser igual a 4', () => {
      expect(divide(8, 2)).toBe(4);
    });
  
    it('divide por zero deve lançar um erro', () => {
      expect(() => divide(1, 0)).toThrow('Não é possível dividir por zero.');
    });
  });
  