// Dados dos shows
const shows = {
    brazil: {
        title: "Brazil - Guarda do Embaú - 12/14",
        details: "Capacidade: 5000 pessoas | Tickets disponíveis: 1200 | Tickets VIP: 200"
    },
    paraguay: {
        title: "Paraguay - Ciudad Del Leste - 12/16",
        details: "Capacidade: 3000 pessoas | Tickets disponíveis: 800 | Tickets VIP: 150"
    },
    bolivia: {
        title: "Bolivia - Cochabamba - 12/18",
        details: "Capacidade: 4000 pessoas | Tickets disponíveis: 1000 | Tickets VIP: 250"
    },
    cuba: {
        title: "Cuba - Havana - 12/21",
        details: "Capacidade: 6000 pessoas | Tickets disponíveis: 1500 | Tickets VIP: 300"
    }
};

// Função para abrir o modal e exibir as informações do show
function openModal(show) {
    document.getElementById('ticketModal').style.display = "block";
    document.getElementById('modalTitle').textContent = shows[show].title;
    document.getElementById('modalDetails').textContent = shows[show].details;
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('ticketModal').style.display = "none";
}

// Captura o evento do envio do formulário
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Exibe a mensagem de sucesso
    document.getElementById('successMessage').style.display = "block";

    // Esconde a mensagem de sucesso após 3 segundos
    setTimeout(() => {
        document.getElementById('successMessage').style.display = "none";
        closeModal(); // Fecha o modal
    }, 3000);
});
