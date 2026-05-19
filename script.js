// ==========================================
// 1. RELÓGIO EM TEMPO REAL NO TOPO
// ==========================================
function updateClock() {
    const now = new Date();
    // toLocaleTimeString força o retorno de Horas:Minutos:Segundos atualizados
    const time = now.toLocaleTimeString('pt-br', { hour12: false });
    document.getElementById('system-clock').innerText = time;
}
// Atualiza o relógio infinitamente a cada 1000 milissegundos (1 segundo)
setInterval(updateClock, 1000);
updateClock(); // Disparo imediato para evitar atraso visual ao carregar a página

// ==========================================
// 2. MAPEAMENTO DE ELEMENTOS HTML (DOM)
// ==========================================
const initialValueInput = document.getElementById('initial-value');
const monthsInput = document.getElementById('months');
const simulateBtn = document.getElementById('btn-simulate');
const yieldDisplay = document.getElementById('estimated-yield');
const progressBar = document.getElementById('bar');
const systemMessage = document.getElementById('system-message');

// Ganchos novos para manipulação do Extrato Detalhado de Impostos
const financialStatement = document.getElementById('financial-statement');
const grossValueDisplay = document.getElementById('gross-value');
const taxValueDisplay = document.getElementById('tax-value');

// ==========================================
// 3. OUVINTE DO CLIQUE (REGRAS DE NEGÓCIO)
// ==========================================
simulateBtn.addEventListener('click', () => {
    // Convertendo os valores de texto digitados nas caixas em Números manipuláveis
    const initialValue = Number(initialValueInput.value);
    const months = Number(monthsInput.value);

    // Captura o valor exato do botão de rádio que estiver checado ('btc' ou 'eth')
    const selectedAsset = document.querySelector('input[name="asset"]:checked').value;

    // VALIDAÇÃO CRÍTICA DE DADOS: Impede simulações vazias, negativas ou nulas
    if (initialValue <= 0 || months <= 0) {
        systemMessage.innerText = "ERRO: insira valores válidos maiores que zero.";
        systemMessage.style.color = "#ff4444"; // Altera a cor do status para vermelho de alerta
        return; // Early return: Aborta o restante da função imediatamente
    }

    // Configuração visual inicial pós-clique de validação concluída
    systemMessage.style.color = "#aaa"; 
    systemMessage.innerText = "Processando simulação de mercado...";
    progressBar.style.width = "0%"; // Reinicia o visual da barra antes do preenchimento

    // ==========================================
    // 4. CÁLCULO DE JUROS COMPOSTOS (M = P * (1 + i)^n)
    // ==========================================
    let monthlyRate = 0;

    // Define a taxa percentual com base na regra de negócio do ativo escolhido
    if (selectedAsset === 'btc') {
        monthlyRate = 0.05; // 5% ao mês (Alto Risco)
    } else {
        monthlyRate = 0.03; // 3% ao mês (Médio Risco)
    }

    // Aplicação da fórmula matemática financeira no JavaScript (** significa potência)
    const finalValue = initialValue * ((1 + monthlyRate) ** months);

    // ==========================================
    // 5. ANIMAÇÃO, DELAY E EXTRATO DE IMPOSTOS
    // ==========================================
    // setTimeout cria um atraso artificial de 500ms para simular processamento do terminal
    setTimeout(() => {
        // Dispara o preenchimento visual do CSS até 100% da largura
        progressBar.style.width = "100%";

        // CÁLCULO MORDIDA DO LEÃO: 15% cobrado estritamente sobre o lucro gerado
        const profit = finalValue - initialValue;
        const tax = profit * 0.15;
        const netValue = finalValue - tax; // Valor líquido real pós-imposto

        // Torna visível o painel invisível do extrato contábil
        financialStatement.style.display = "block";

        // Injeta e formata os dados monetários no formato Real Brasileiro (R$ 0.000,00)
        grossValueDisplay.innerText = finalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        taxValueDisplay.innerText = `- ${tax.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;

        // Atualiza a tela principal com o valor LÍQUIDO final (o dinheiro limpo)
        yieldDisplay.innerText = netValue.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        });
        
        // Atualiza a linha de status final com sucesso
        systemMessage.innerText = `Simulação concluída com sucesso para ${selectedAsset.toUpperCase()}!`;
    }, 500); 
});