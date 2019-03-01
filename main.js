const lightsabers = document.querySelectorAll('.lightsaber input[type="radio"]');
lightsabers.forEach(saber => addEventListener('change', playWhoosh));

function playWhoosh(e) {
    console.log('Yey')
}