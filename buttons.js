const volumeButton = document.querySelector('.volume__button');
volumeButton.addEventListener('click', function() {
    volumeButton.classList.toggle('volume__button_active');
});

const choise = document.querySelector('.choise');
const choiseBtn1 = choise.querySelector('#choise__button-1');
const choiseBtn2 = choise.querySelector('#choise__button-2');

function toggleButtons(toActive, toNormal) {
    toActive.classList.add('choise__button_active');
    toActive.querySelector('.choise__text').classList.add('choise__text_active');
    toNormal.classList.remove('choise__button_active');
    toNormal.querySelector('.choise__text').classList.remove('choise__text_active');
}

choiseBtn1.addEventListener('click', function() {
    toggleButtons(choiseBtn1, choiseBtn2);
});

choiseBtn2.addEventListener('click', function() {
    toggleButtons(choiseBtn2, choiseBtn1)
});