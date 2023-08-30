// Simulação de empréstimo
const tipoEmprestimo = document.getElementById('tipo-emprestimo');
const valorEmprestimo = document.getElementById('valor-emprestimo');
const mesesPagamento = document.getElementById('meses-pagamento');
const resultadoParcela = document.getElementById('resultado-parcela');

valorEmprestimo.addEventListener('input', calcularParcela);
mesesPagamento.addEventListener('input', calcularParcela);

function calcularParcela() {
    const taxaJuros = 0.02; // Exemplo de taxa de juros
    const valor = parseFloat(valorEmprestimo.value);
    const meses = parseInt(mesesPagamento.value);
    
    const parcela = (valor * taxaJuros) / (1 - Math.pow(1 + taxaJuros, -meses));
    
    resultadoParcela.textContent = `Valor da parcela: R$ ${parcela.toFixed(2)}`;
}
