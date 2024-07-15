function rentCar(carModel) {
    alert(`You have selected to rent the ${carModel}.`);
    // Here you can add functionality to handle the car rental process
}
document.addEventListener('DOMContentLoaded', () => {
    showSection('welcome');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

function rentCar(carModel) {
    alert(`Ви вибрали ${carModel} для оренди!`);
}
document.addEventListener('DOMContentLoaded', () => {
    showSection('welcome');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

function rentCar(carModel) {
    alert(`Ви вибрали ${carModel} для оренди!`);
}


