// Aguarda o DOM estar completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. FUNCIONALIDADE: MODO ESCURO (DARK MODE)
       ========================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    themeToggleBtn.addEventListener('click', () => {
        // Alterna a classe dark-mode no body
        bodyElement.classList.toggle('dark-mode');
        
        // Altera o texto do botão dinamicamente para melhor UX
        if (bodyElement.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = 'Modo Claro';
        } else {
            themeToggleBtn.textContent = 'Modo Escuro';
        }
    });

    /* ==========================================
       2. FUNCIONALIDADE: MENSAGEM DINÂMICA (CTA)
       ========================================== */
    const btnCta = document.getElementById('btn-cta');
    const dynamicMessage = document.getElementById('dynamic-message');

    btnCta.addEventListener('click', () => {
        // Altera o texto da mensagem
        dynamicMessage.textContent = 'Transformando o amanhã! Economia de até 40% de água mapeada em projetos parceiros.';
        
        // Ativa a animação de transição suave CSS adicionando a classe
        dynamicMessage.classList.add('show');

        // Desabilita o botão temporariamente para feedback visual
        btnCta.textContent = 'Obrigado pelo interesse!';
        btnCta.style.backgroundColor = 'var(--primary-hover)';
        btnCta.disabled = true;
    });

    /* ==========================================
       3. FUNCIONALIDADE: VALIDAÇÃO DO FORMULÁRIO
       ========================================== */
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (event) => {
        // Impede o envio padrão do formulário (recarregar a página)
        event.preventDefault();

        // Captura os valores dos inputs limpos de espaços extras
        const nomeValue = document.getElementById('nome').value.trim();
        const emailValue = document.getElementById('email').value.trim();

        // Limpa mensagens de feedback anteriores
        formFeedback.textContent = '';
        formFeedback.style.color = '';

        // Validação Simples: Campos vazios
        if (nomeValue === '' || emailValue === '') {
            formFeedback.textContent = '❌ Por favor, preencha todos os campos.';
            formFeedback.style.color = '#e74c3c'; // Cor vermelha de erro
            return;
        }

        // Validação Simples: Estrutura básica do e-mail
        if (!emailValue.includes('@') || !emailValue.includes('.')) {
            formFeedback.textContent = '❌ Por favor, insira um e-mail válido.';
            formFeedback.style.color = '#e74c3c';
            return;
        }

        // Sucesso na validação
        formFeedback.textContent = `🎉 Sucesso! Bem-vindo ao futuro sustentável, ${nomeValue}.`;
        formFeedback.style.color = '#2ecc71'; // Cor verde de sucesso

        // Reseta os campos do formulário após o sucesso
        contactForm.reset();
    });
});