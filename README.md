# ⚡ SYSTEM_FINANCE v1.0 | Interactive Terminal


Uma aplicação front-end imersiva com estética **Dark/Industrial Minimalista** inspirada em interfaces de terminais e na cultura hacker. O projeto utiliza **JavaScript Vanilla** para criar uma interface dinâmica e reativa que calcula o rendimento de criptoativos em juros compostos, aplicando regras de negócios contábeis e tributação em tempo real com feedbacks visuais fluidos.

> **Status:** Finalizado e Otimizado ✅
> **Terminal Prompt:** `dashboard_simulator.exe --status=ready`

---

## 🛠️ Stack Técnica

* **Engine:** JavaScript Vanilla (ES6+) para manipulação avançada de DOM, funções matemáticas assíncronas e lógica de estados.
* **Styles:** CSS3 baseado em **CSS Grid** bidimensional, variáveis globais dinâmicas (`:root`) e efeitos de pseudo-classes (`:focus`, `:hover`).
* **Markup:** HTML5 Semântico focado em estruturação limpa de formulários e acessibilidade de dados.

---

## 🚀 Funcionalidades e Soluções Técnicas

### 📈 Motor de Juros Compostos & Regras de Negócio
Implementação da fórmula matemática financeira clássica ($M = P \times (1 + i)^n$) processada nativamente via JavaScript no clique do botão. O sistema gerencia as regras de negócio baseadas no ativo selecionado:
- **Bitcoin (High Risk):** Aplicação de taxa parametrizada de 5% ao mês.
- **Ethereum (Medium Risk):** Aplicação de taxa parametrizada de 3% ao mês.

### 🏛️ Retenção de Imposto Automatizada (Extrato Contábil)
Desenvolvimento de uma camada de tratamento contábil que simula o recolhimento de tributos do mundo real. O algoritmo calcula e deduz uma alíquota de **15% de imposto retido na fonte**, cobrado estritamente sobre o lucro da operação. A aplicação manipula o DOM para:
- Revelar um painel oculto de extrato detalhado via delay assíncrono (`setTimeout`).
- Injetar e formatar os valores de rendimento bruto e imposto retido.
- Exibir em destaque o rendimento líquido real que sobrou para o usuário.

### ⚙️ UX Reativa & Segurança (Anti-Crash)
Interface projetada com foco em alta performance e segurança de dados, utilizando soluções como:
- **Early Return:** Validação de dados de formulário que impede a execução do código caso os campos estejam vazios, nulos ou negativos, alterando as mensagens de status do sistema dinamicamente em vermelho.
- **Relógio em Tempo Real:** Captura contínua de dados locais do usuário para renderização de um relógio funcional com formato militar (24h) no topo da aplicação.
- **Internacionalização:** Formatação automática dos números manipulados para o padrão de moeda brasileiro (`.toLocaleString('pt-br')`).

---

## 🔗 Demonstração
O projeto está configurado e pronto para visualização pública através do GitHub Pages:
👉 **[Acessar SYSTEM_FINANCE Terminal](https://rodrigopbarros.github.io/system-finance/)** *(Confirme se o link do seu repositório será esse msm)*

---

## 👤 Desenvolvedor
**Rodrigo P. Barros** *Desenvolvedor Front-end focado em criar experiências digitais de alta performance e interfaces imersivas.*

* **GitHub:** [@RodrigoPBarros](https://github.com/RodrigoPBarros)
