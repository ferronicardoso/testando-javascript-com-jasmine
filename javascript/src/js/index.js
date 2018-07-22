function Calcular(v1, op, v2) {
    var total = 0;
    switch (op) {
        case '-':
            total = Calculadora.Subtrair(v1, v2);
            break;
        case '*':
            total = Calculadora.Multiplicar(v1, v2);
            break;
        case '/':
            total = Calculadora.Dividir(v1, v2);
            break;
        case '+':
        default:
            total = Calculadora.Somar(v1, v2);
            break;
    }

    return 'Resultado: ' + v1 + ' ' + op + ' ' + v2 + ' = ' + total;
}
