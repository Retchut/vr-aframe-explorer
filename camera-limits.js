AFRAME.registerComponent('camera-limits-rotation'', {
    init: function () {
      // Define os limites de rotação da câmera
      this.maxRotationLeftRight = 90; // em graus
      this.maxRotationUpDown = 60; // em graus
  
      // Obtém o elemento da câmera
      this.cameraEl = this.el.querySelector('a-camera');
  
      // Registra o evento 'componentchanged' para verificar a rotação da câmera
      this.el.addEventListener('componentchanged', this.checkCameraRotation.bind(this));
  
      // Obtém o botão de teletransporte
      this.teleportButton = document.querySelector('#teleport-button');
  
      // Adiciona um ouvinte de eventos ao botão de teletransporte
      this.teleportButton.addEventListener('click', this.teleportToInitialPosition.bind(this));
    },
  
    checkCameraRotation: function (event) {
      // Verifica se o componente 'rotation' foi alterado
      if (event.detail.name === 'rotation') {
        // Obtém a rotação atual da câmera
        const rotation = this.cameraEl.getAttribute('rotation');
  
        // Limita a rotação nos eixos X e Y
        rotation.x = Math.max(-this.maxRotationUpDown, Math.min(this.maxRotationUpDown, rotation.x));
        rotation.y = Math.max(-this.maxRotationLeftRight, Math.min(this.maxRotationLeftRight, rotation.y));
  
        // Define a nova rotação da câmera
        this.cameraEl.setAttribute('rotation', rotation);
      }
    },
  
