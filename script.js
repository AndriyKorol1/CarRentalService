document.addEventListener('DOMContentLoaded', () => {
    showSection('dashboard');
    updateDashboard();
    updateOrders();
    
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    if (isDarkTheme) {
        document.body.classList.add('dark-theme');
    }
    
    // Додаємо кнопку для зміни теми
    const themeToggle = document.createElement('button');
    themeToggle.textContent = 'Змінити тему';
    themeToggle.addEventListener('click', toggleTheme);
    document.querySelector('header .container').appendChild(themeToggle);
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
    const rentalPeriod = prompt(`На скільки днів ви хочете орендувати ${carModel}?`);
    
    if (rentalPeriod === null) {
        // Користувач натиснув "Скасувати"
        return;
    }

    const days = parseInt(rentalPeriod);
    
    if (isNaN(days) || days <= 0) {
        alert("Будь ласка, введіть коректну кількість днів (ціле позитивне число).");
        return;
    }

    // Тут можна додати логіку для розрахунку вартості оренди
    const dailyRate = 100; // Припустимо, що це середня вартість оренди на день
    const totalCost = days * dailyRate;

    const confirmRent = confirm(`Ви хочете орендувати ${carModel} на ${days} днів?\nЗагальна вартість: $${totalCost}`);

    if (confirmRent) {
        alert(`Ви успішно орендували ${carModel} на ${days} днів. Загальна вартість: $${totalCost}. Дякуємо за вибір нашого сервісу!`);
        
        // Тут можна додати логіку для збереження замовлення
        addNewOrder(carModel, new Date().toLocaleDateString(), new Date(Date.now() + days * 24 * 60 * 60 * 1000).toLocaleDateString(), "Активно", totalCost);
        
        // Оновлюємо інформацію на панелі управління
        updateDashboard();
    } else {
        alert("Оренду скасовано.");
    }
}

function filterCars() {
    const carType = document.getElementById('carType').value;
    const priceRange = document.getElementById('priceRange').value;
    
    console.log(`Фільтруємо за типом: ${carType} та ціновим діапазоном: ${priceRange}`);
    
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach(card => {
        card.style.display = 'none';
    });
    
    setTimeout(() => {
        carCards.forEach(card => {
            card.style.display = 'block';
        });
    }, 1000);
}

function updateDashboard() {
    const activeRentals = document.querySelectorAll('.order-item').length;
    document.querySelector('.widget:nth-child(1) .number').textContent = activeRentals;

    // Тут можна додати логіку для оновлення інших віджетів
    // Наприклад, розрахунок бонусних балів та економії
    const bonusPoints = 1500;
    const savings = 350;

    document.querySelector('.widget:nth-child(2) .number').textContent = bonusPoints;
    document.querySelector('.widget:nth-child(3) .number').textContent = `$${savings}`;
}

function editProfile() {
    const name = prompt("Введіть нове ім'я:", "John Doe");
    const email = prompt("Введіть новий email:", "johndoe@example.com");
    const phone = prompt("Введіть новий номер телефону:", "+380 12 345 6789");

    if (name && email && phone) {
        alert("Профіль успішно оновлено!");
        document.querySelector('.profile-info p:nth-child(1)').textContent = `Ім'я: ${name}`;
        document.querySelector('.profile-info p:nth-child(2)').textContent = `Email: ${email}`;
        document.querySelector('.profile-info p:nth-child(3)').textContent = `Телефон: ${phone}`;
    }
}

document.querySelector('.edit-profile').addEventListener('click', editProfile);

function addNewOrder(carModel, startDate, endDate, status, totalCost) {
    const orderList = document.querySelector('.order-list');
    const newOrder = document.createElement('div');
    newOrder.classList.add('order-item');
    newOrder.innerHTML = `
        <img src="images/${carModel.toLowerCase().replace(' ', '')}.jpg" alt="${carModel}">
        <div class="order-details">
            <h3>${carModel}</h3>
            <p>Дата: ${startDate} - ${endDate}</p>
            <p>Статус: ${status}</p>
            <p>Загальна вартість: $${totalCost}</p>
        </div>
    `;
    orderList.prepend(newOrder);
}

function updateOrders() {
    // Функція залишається порожньою після видалення рядка з Mercedes E-Class
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDarkTheme = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDarkTheme);
}