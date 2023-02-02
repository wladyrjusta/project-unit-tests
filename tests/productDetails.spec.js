const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/
const arrayObject = productDetails('Papel', 'toalha');
describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Teste se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Teste se o retorno da função é um array', () => {
    expect(Array.isArray(arrayObject)).toBe(true);
  });
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(arrayObject.length).toBe(2);
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    for(let index in arrayObject) {
      expect(typeof arrayObject[index]).toBe('object');
    }    
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    const checkSimilarity = (array) => {
      let similarity;
      if (array[0] !== array[1]) {
        similarity = true;
      } else {
        similarity = false;
      }
      return similarity;
    };
    const result = checkSimilarity(arrayObject);
    expect(result).toBe(true);
  });
  it('Teste se os dois productIds terminam com 123.', () => {
   const productId1 = (arrayObject[0].details.productId);
   const productId1Length = productId1.length - 3;
   expect(productId1.includes('123', [productId1Length])).toBe(true);
   const productId2 = (arrayObject[0].details.productId);
   const productId2Length = productId1.length - 3;
   expect(productId2.includes('123', [productId2Length])).toBe(true);
  });
    // ESCREVA SEUS TESTES ABAIXO:
    // OK Teste se productDetails é uma função.
    // OK Teste se o retorno da função é um array.
    // OK Teste se o array retornado pela função contém dois itens dentro.
    // OK Teste se os dois itens dentro do array retornado pela função são objetos.
    // OK Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // OK Teste se os dois productIds terminam com 123.
});
