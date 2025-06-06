// Exemplo para checkbox
document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', function() {
        if (cb.checked) {
            cb.disabled = true; // desabilita após marcar
        }
    });
});

// Exemplo para botão de reservar
document.querySelectorAll('.reservarBtn').forEach(btn => {
    btn.addEventListener('click', function() {
        btn.disabled = true; // desabilita após clicar
        btn.textContent = "Reservado!";
    });
});
