function openPostModal(source, description, type = 'image') {
    const container = document.getElementById('modalImageContainer');
    const desc = document.getElementById('modalDescription');
    const modal = document.getElementById('postModal');

    // Limpa o conteúdo anterior
    container.innerHTML = '';

    if (type === 'video') {
        // Cria o player de vídeo para os links do Cloudinary
        container.innerHTML = `
            <video controls autoplay muted style="width: 100%; max-height: 100%;">
                <source src="${source}" type="video/mp4">
                Seu navegador não suporta vídeos.
            </video>`;
    } else {
        // Cria a visualização de imagem
        container.innerHTML = `<img src="${source}" style="max-width: 100%; max-height: 100%; object-fit: contain;">`;
    }

    // Insere a legenda histórica que a gente caprichou
    desc.innerText = description;

    // Exibe o modal
    modal.style.display = 'flex';
}

// Fechar o modal ao clicar no X ou fora da imagem
document.getElementById('closePostModal').onclick = function() {
    document.getElementById('postModal').style.display = 'none';
    // Para o vídeo ao fechar
    document.getElementById('modalImageContainer').innerHTML = '';
};

window.onclick = function(event) {
    const modal = document.getElementById('postModal');
    if (event.target == modal) {
        modal.style.display = 'none';
        document.getElementById('modalImageContainer').innerHTML = '';
    }
};
