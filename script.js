document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('agendamento-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const data = document.getElementById('data').value;
        const horario = document.getElementById('horario').value;


        const agendamento = {
            nome: nome,
            email: email,
            data: data,
            horario: horario
        };


        console.log('Agendamento enviado:', agendamento);

    
        form.reset();
    });
});
