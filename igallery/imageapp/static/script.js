const galleryImages = document.querySelectorAll('.gallery-img');

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

function openModal(event) {
    modalImg.src = event.target.src;

    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

galleryImages.forEach(image => {
    image.addEventListener('click', openModal);
});

const closeButton = document.querySelector('.close-btn');
closeButton.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
