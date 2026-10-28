const dropdownToggle = document.getElementById('dropdownToggle');
const cartCountElement = document.getElementById('cartCount');

dropdownToggle.addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.toggle('active');
});

let itemCount = 0;

const bagContainer = document.querySelector('.image-bag a');

bagContainer.addEventListener('click', function(event) {
    event.preventDefault();
    
    itemCount++;
    cartCountElement.textContent = itemCount;
    
    cartCountElement.classList.add('pulse');
    setTimeout(() => cartCountElement.classList.remove('pulse'), 300);
});

const tabButtons = document.querySelectorAll('.tab-btn');
const productCards = document.querySelectorAll('.product-card');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedCategory = button.getAttribute('data-category');

        productCards.forEach(card => {
            if (card.getAttribute('data-category') === selectedCategory) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

const sliderTrack = document.getElementById('sliderTrack');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Шаг прокрутки: ширина карточки (370px) + отступ gap (30px)
const scrollStep = 400;

if (nextBtn && prevBtn && sliderTrack) {
    // Кнопка ВПРАВО
    nextBtn.addEventListener('click', () => {
        // Проверяем, дошли ли мы до конца прокрутки
        if (sliderTrack.scrollLeft + sliderTrack.clientWidth >= sliderTrack.scrollWidth - 10) {
            // Если дошли до конца — плавно возвращаемся в самое начало
            sliderTrack.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Иначе скроллим на одну карточку вправо
            sliderTrack.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
    });

    // Кнопка ВЛЕВО
    prevBtn.addEventListener('click', () => {
        // Если мы в самом начале — перепрыгиваем в самый конец
        if (sliderTrack.scrollLeft <= 0) {
            sliderTrack.scrollTo({ left: sliderTrack.scrollWidth, behavior: 'smooth' });
        } else {
            // Иначе скроллим на одну карточку влево
            sliderTrack.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        }
    });
}
