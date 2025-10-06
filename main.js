var swiper = new Swiper(".swiper", {
    effect: "cube",
    direction: "vertical", // Cambiado para un efecto de scroll vertical
    allowTouchMove: false, // Desactiva el arrastre manual
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: true // Permite la navegación con la rueda del ratón
});

// Función para navegar a un slide específico y actualizar el link activo
function Navigate(indx) {
    // Quita la clase activa de todos los links
    for (let i of document.querySelectorAll(".Links li")) {
        i.classList.remove("activeLink");
    }
    // Añade la clase activa al link clickeado
    document.querySelectorAll(".Links li")[indx].classList.add("activeLink");
    
    // Desliza al slide correspondiente
    swiper.slideTo(indx, 1000, true);
}

// Sincroniza el link activo cuando el slide cambia por scroll
swiper.on('slideChange', function () {
  const currentIndex = swiper.activeIndex;
  for (let i of document.querySelectorAll(".Links li")) {
      i.classList.remove("activeLink");
  }
  document.querySelectorAll(".Links li")[currentIndex].classList.add("activeLink");
});
