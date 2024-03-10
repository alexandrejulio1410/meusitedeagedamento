document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('agendamento-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obter os valores do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const data = document.getElementById('data').value;
        const horario = document.getElementById('horario').value;

        // Salvar os dados de agendamento (simulação)
        const agendamento = {
            nome: nome,
            email: email,
            data: data,
            horario: horario
        };

        // Aqui você pode enviar os dados para um servidor ou fazer outras operações
        console.log('Agendamento enviado:', agendamento);

        // Limpar o formulário após o envio
        form.reset();
    });
});
