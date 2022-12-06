const cardOverlays = document.querySelectorAll('.cruise-card__overlay');

if (cardOverlays) {

  const checkRetinaDisplay = () => {
    if (window.devicePixelRatio > 1) {
      for (let i = 0; i < cardOverlays.length; i++) {
        cardOverlays[i].style.background = `linear-gradient(180deg, rgba(1, 28, 64, 0) 50%, #011C40 100%), url("../img/cruise-card-${i + 1}@2x.webp")`;
      }
    } else {
      for (let i = 0; i < cardOverlays.length; i++) {
        cardOverlays[i].style.background = `linear-gradient(180deg, rgba(1, 28, 64, 0) 50%, #011C40 100%), url("../img/cruise-card-${i + 1}.webp")`;
      }
    }

    cardOverlays.forEach((el) => {
      el.style.backgroundPosition = 'top 0  right 45%';
      el.style.backgroundSize = 'cover';
    });
  };

  window.addEventListener('load', checkRetinaDisplay);
}
