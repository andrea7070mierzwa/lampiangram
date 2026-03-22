// script.js

// --- LÓGICA DO MODAL DE STORIES ---
const storiesModal = document.getElementById("storiesModal");
const openStoriesBtn = document.getElementById("openStories");
const closeStoriesBtn = document.getElementById("closeStories");

if (openStoriesBtn) {
  openStoriesBtn.addEventListener("click", () => {
    storiesModal.style.display = "flex";
    // Opcional: Aqui você pode criar um carrossel de stories
  });
}

if (closeStoriesBtn) {
  closeStoriesBtn.addEventListener("click", () => {
    storiesModal.style.display = "none";
    // Para vídeos ou áudios que podem estar tocando no Story
    const media = storiesModal.querySelectorAll("video, audio");
    media.forEach((m) => m.pause());
  });
}

// --- LÓGICA DO MODAL DE POST DETALHADO ---
const postModal = document.getElementById("postModal");
const closePostModalBtn = document.getElementById("closePostModal");
const modalDescription = document.getElementById("modalDescription");
const modalImageContainer = document.getElementById("modalImageContainer");
const modalAudio = document.getElementById("modalAudio");

function openPostModal(mediaPath, description, type = "image", audioPath = "") {
  // Reset contents
  modalImageContainer.innerHTML = "";
  modalDescription.textContent = description;
  modalAudio.style.display = "none";
  modalAudio.pause();

  if (type === "video") {
    const video = document.createElement("video");
    video.src = mediaPath;
    video.classList.add("detail-image");
    video.controls = true; // Mostra controles de vídeo
    video.autoplay = true;
    modalImageContainer.appendChild(video);
  } else if (type === "audio") {
    const img = document.createElement("img");
    img.src = mediaPath;
    img.classList.add("detail-image");
    modalImageContainer.appendChild(img);

    modalAudio.src = audioPath;
    modalAudio.style.display = "block"; // Mostra o player de áudio
    modalAudio.play();
  } else {
    const img = document.createElement("img");
    img.src = mediaPath;
    img.classList.add("detail-image");
    modalImageContainer.appendChild(img);
  }

  postModal.style.display = "flex";
}

if (closePostModalBtn) {
  closePostModalBtn.addEventListener("click", () => {
    postModal.style.display = "none";
    // Para vídeos ou áudios que podem estar tocando no modal
    const media = postModal.querySelectorAll("video, audio");
    media.forEach((m) => m.pause());
  });
}

// Fechar modais ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
  if (event.target === storiesModal) {
    storiesModal.style.display = "none";
  }
  if (event.target === postModal) {
    postModal.style.display = "none";
    const media = postModal.querySelectorAll("video, audio");
    media.forEach((m) => m.pause());
  }
});
// Adicione ao final para a foto de perfil expandir
const profileBtn = document.getElementById("openStories");
if (profileBtn) {
  profileBtn.style.cursor = "pointer";
  profileBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita conflito com outros cliques
    openPostModal(
      "assets/images/lampiao_perfil.jpg",
      "PERFIL: Virgulino Ferreira da Silva, o Rei do Cangaço.",
    );
  });
}
function openPostModal(source, description, type = "image") {
  const container = document.getElementById("modalImageContainer");
  const desc = document.getElementById("modalDescription");
  const modal = document.getElementById("postModal");

  container.innerHTML = ""; // Limpa o modal

  if (type === "video") {
    container.innerHTML = `<video src="${source}" controls autoplay style="width:100%; height:100%;"></video>`;
  } else {
    container.innerHTML = `<img src="${source}" style="width:100%; height:100%; object-fit:contain;">`;
  }

  desc.innerText = description;
  modal.style.display = "flex";
}
