function mostrarMensagem() {
    alert(
        "A sucessão rural sustentável garante o futuro da agricultura e a permanência dos jovens no campo."
    );
}

// Animação ao rolar a página
window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const posicao = card.getBoundingClientRect().top;

        if(posicao < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Estado inicial dos cards
document.querySelectorAll(".card").forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
});
