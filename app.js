const carouselImages = ["images/cpic.jpg", "images/cpic1.jpg", "images/cpic2.jpg", "images/cpic3.jpg", "images/cpic4.jpg", "images/cpic5.jpg", "images/cpic6.jpg",]; // Array of image paths

const carouselIndicators = carouselImages.map((image, index) => {
  const isActive = index === 0 ? 'active' : ''; // Set the first indicator as active
  return `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" class="${isActive}" aria-current="true" aria-label="Slide ${index + 1}"></button>`;
});

const carouselItems = carouselImages.map((image, index) => {
  const isActive = index === 0 ? 'active' : ''; // Set the first item as active
  return `
    <div class="carousel-item ${isActive}">
      <img src="${image}" class="d-block w-100" alt="Slide ${index + 1}">
    </div>
  `;
});

const carouselIndicatorsContainer = document.querySelector('.carousel-indicators');
const carouselItemsContainer = document.querySelector('.carousel-inner');

carouselIndicatorsContainer.innerHTML = carouselIndicators.join('');
carouselItemsContainer.innerHTML = carouselItems.join('');
