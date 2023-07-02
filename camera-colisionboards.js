AFRAME.registerComponent('camera-limits-space', {
    init: function () {
      // Obtém o elemento do modelo GLTF
      const modelEl = document.querySelector('#house');
  
      // Obtém o componente aabb-collider do modelo
      const collider = modelEl.components['aabb-collider'];
  
      if (collider) {
        // Obtém as dimensões do modelo
        const { minX, minY, minZ, maxX, maxY, maxZ } = collider;
  
        // Define os limites de espaço com base nas dimensões do modelo
        this.minX = minX;
        this.minY = minY;
        this.minZ = minZ;
        this.maxX = maxX;
        this.maxY = maxY;
        this.maxZ = maxZ;
  
        // Obtém o elemento da câmera
        this.cameraEl = this.el.querySelector('a-camera');
  
        // Registra o evento 'componentchanged' para verificar a posição da câmera
        this.el.addEventListener('componentchanged', this.checkCameraPosition.bind(this));
      }
    },
  
    checkCameraPosition: function (event) {
      // Verifica se o componente 'position' foi alterado
      if (event.detail.name === 'position') {
        // Obtém a posição atual da câmera
        const position = this.cameraEl.getAttribute('position');
  
        // Verifica se a câmera atingiu os limites de espaço definidos
        if (position.x < this.minX || position.x > this.maxX || position.y < this.minY || position.y > this.maxY || position.z < this.minZ || position.z > this.maxZ) {
          // Empurra a câmera para trás
          this.cameraEl.setAttribute('position', { x: position.x, y: position.y, z: this.minZ });
  
          // Reproduz o som de colisão
          const sound = document.querySelector('#collision-sound');
          sound.components.sound.playSound();
        }
      }
    }
  });
