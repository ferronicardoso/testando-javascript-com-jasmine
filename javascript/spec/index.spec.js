
describe('Calculadora', function() {
    it('contem Calcular', function() {
        expect(typeof Calcular).toBe('function');
    });

    
    it('Calcular Soma', function() {
        var result = Calcular(4, '+', 8);
        expect('Resultado: 4 + 8 = 12').toEqual(result);
    });
    
    it('Calcular Subtracao', function() {
        var result = Calcular(8, '-', 6);
        expect('Resultado: 8 - 6 = 2').toEqual(result);
    });
        
    it('Url válida', function() {
        expect('/api/users/10').toMatch(/api\/users\/([0-9]*)$/);
    });
        
    it('Url inválida', function() {
        expect('/api/users/10A').not.toMatch(/api\/users\/([0-9]*)$/);
    });
});
    