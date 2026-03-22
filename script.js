function openPostModal(source, description, type = 'image') {
    const container = document.getElementById('modalImageContainer');
    const desc = document.getElementById('modalDescription');
    const modal = document.getElementById('postModal');

    container.innerHTML = ''; // Limpa o que tinha antes

    if (type === 'video') {
        container.innerHTML = `<video src="${source}" controls autoplay style="width:100%"></video>`;
    } else {
        container.innerHTML = `<img src="${source}" style="max-width:100%; max-height:100%">`;
    }

    desc.innerText = description; // Aqui é onde o texto entra!
    modal.style.display = 'flex';
}

document.getElementById('closePostModal').onclick = () => {
    document.getElementById('postModal').style.display = 'none';
    document.getElementById('modalImageContainer').innerHTML = '';
};

// Fechar modal ao clicar fora dele
window.onclick = (event) => {
    const modal = document.getElementById('postModal');
    if (event.target == modal) {
        modal.style.display = 'none';
        document.getElementById('modalImageContainer').innerHTML = '';
    }
};
