const colorFilterButton = document.getElementById('color-filter-button');
colorFilterButton.addEventListener('click', toggleColorFilter);
let currentFilterIndex = 0;
const colorFilters = ['sepia', 'black-and-white', 'vintage'];

function toggleColorFilter() {
  // Obtém o elemento da câmera
  const cameraEl = document.querySelector('a-camera');

  // Atualiza o índice do filtro de cor
  currentFilterIndex = (currentFilterIndex + 1) % colorFilters.length;

  // Obtém o nome do próximo filtro de cor
  const nextFilter = colorFilters[currentFilterIndex];

  // Atualiza o texto do botão com o nome do próximo filtro
  colorFilterButton.textContent = `Aplicar Filtro: ${nextFilter}`;

  // Aplica o próximo filtro de cor
  cameraEl.setAttribute('color-filter', `type: ${nextFilter}`);
}

// Obtém a entidade da imagem 3D
const imageEntity = document.querySelector('#sua-imagem-3d');

// Define os valores iniciais
let brightness = 0;
let contrast = 0;
let saturation = 0;
let lightness = 0;

// Obtém os botões
const btnBrightnessUp = document.querySelector('#btnBrightnessUp');
const btnBrightnessDown = document.querySelector('#btnBrightnessDown');
const btnContrastUp = document.querySelector('#btnContrastUp');
const btnContrastDown = document.querySelector('#btnContrastDown');
const btnSaturationUp = document.querySelector('#btnSaturationUp');
const btnSaturationDown = document.querySelector('#btnSaturationDown');
const btnLightnessUp = document.querySelector('#btnLightnessUp');
const btnLightnessDown = document.querySelector('#btnLightnessDown');

// Função para atualizar os valores de estilo da imagem
function updateImageStyle() {
  imageEntity.setAttribute('material', {
    brightness: brightness,
    contrast: contrast,
    saturation: saturation,
    lightness: lightness
  });
}

// Funções de clique para aumentar/diminuir os valores
btnBrightnessUp.addEventListener('click', () => {
  brightness += 10;
  updateImageStyle();
});

btnBrightnessDown.addEventListener('click', () => {
  brightness -= 10;
  updateImageStyle();
});

btnContrastUp.addEventListener('click', () => {
  contrast += 0.1;
  updateImageStyle();
});

btnContrastDown.addEventListener('click', () => {
  contrast -= 0.1;
  updateImageStyle();
});

btnSaturationUp.addEventListener('click', () => {
  saturation += 0.1;
  updateImageStyle();
});

btnSaturationDown.addEventListener('click', () => {
  saturation -= 0.1;
  updateImageStyle();
});

btnLightnessUp.addEventListener('click', () => {
  lightness += 0.1;
  updateImageStyle();
});

btnLightnessDown.addEventListener('click', () => {
  lightness -= 0.1;
  updateImageStyle();
});
