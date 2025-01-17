// Função para gerenciar o carrossel
let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = document.querySelectorAll('.anuncio').length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
    // Configuração automática do carrossel
    setInterval(() => moveSlide(1), 3000); // Carrossel automático a cada 3 segundos

    // Função para carregar vagas dinamicamente
    const vagas = [
        {
            titulo: "Desenvolvedor Web",
            descricao: "Procura-se desenvolvedor com experiência em HTML, CSS e JavaScript.",
            salario: "R$ 3.500,00",
            beneficios: "Vale transporte, Vale refeição, Plano de saúde",
            endereco: "Rua das Flores, 123, São Paulo - SP",
            whatsapp: "https://wa.me/5511999999999",
            logo: "logo_empresa1.jpg"
        },
        {
            titulo: "Analista de Marketing",
            descricao: "Analista com foco em marketing digital e campanhas publicitárias.",
            salario: "R$ 4.200,00",
            beneficios: "Seguro de vida, Auxílio creche, Vale transporte",
            endereco: "Av. Central, 456, Rio de Janeiro - RJ",
            whatsapp: "https://wa.me/5521999999999",
            logo: "logo_empresa2.jpg"
        }
    ];

    const vagasContainer = document.getElementById("vagas-container");

    vagas.forEach(vaga => {
        const vagaElement = `
            <div class="vaga">
                <img src="${vaga.logo}" alt="Logo da Empresa">
                <div class="detalhes">
                    <h3>${vaga.titulo}</h3>
                    <p><strong>Descrição:</strong> ${vaga.descricao}</p>
                    <p><strong>Salário:</strong> ${vaga.salario}</p>
                    <p><strong>Benefícios:</strong> ${vaga.beneficios}</p>
                    <p><strong>Endereço:</strong> ${vaga.endereco}</p>
                    <a class="whatsapp" href="${vaga.whatsapp}" target="_blank">Entre em contato pelo WhatsApp</a>
                </div>
            </div>
        `;
        vagasContainer.insertAdjacentHTML("beforeend", vagaElement);
    });
});
