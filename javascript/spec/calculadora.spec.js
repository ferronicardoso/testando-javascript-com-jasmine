
describe('Calculadora', function() {
    var resultado = 0;

    beforeEach(function() {
        resultado = Calculadora.Somar(1, 3);
    });
    
    it('contem jasmine', function() {
        expect(typeof jasmine).toBe('object');
    });

    it('contem Calculadora', function() {
        expect(typeof Calculadora).toBe('object');
        expect(typeof Calculadora.Somar).toBe('function');
        expect(typeof Calculadora.Subtrair).toBe('function');
        expect(typeof Calculadora.Dividir).toBe('function');
        expect(typeof Calculadora.Multiplicar).toBe('function');
    });

    it('Somar', function () {
        var result = Calculadora.Somar(1, 3);
        expect(4).toEqual(result); 
     });

     
    it('Somar2', function () {
        expect(4).toEqual(resultado); 
     });
     
    it('Subtrair', function () {
        var result = Calculadora.Subtrair(3, 1);
        expect(2).toEqual(result); 
    });
});
    