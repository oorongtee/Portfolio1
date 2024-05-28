window.addEventListener('resize', checkSize);
window.addEventListener('scroll', checkSize);
window.addEventListener('load', checkSize);

function checkSize() {
  var leftSide = document.getElementById('leftSide');

  if (window.innerWidth >= 768) {
    leftSide.style.position = 'fixed';
  } else {
    leftSide.style.position = 'static';
  }
}

window.addEventListener('resize', function() {
    var introductionCard = document.getElementById('introductionCard');
    var skillCard = document.getElementById('skillCard');

    if (window.innerWidth < 992) {
      introductionCard.classList.remove('ms-7');
      introductionCard.classList.add('ms-4');
      skillCard.classList.remove('ms-7');
      skillCard.classList.add('ms-4');
    } else {
      introductionCard.classList.remove('ms-4');
      introductionCard.classList.add('ms-7');
      skillCard.classList.remove('ms-4');
      skillCard.classList.add('ms-7');
    }
  });
  window.dispatchEvent(new Event('resize'));





document.addEventListener('mousemove', function(e) {
    const light = document.getElementById('light');
    const x = e.clientX;
    const y = e.clientY;
    light.style.left = `${x}px`;
    light.style.top = `${y}px`;
});

