// Burger //
//----------------------------------------------------------------------//

const burger = document.querySelector('.burger');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');

const toggleMenu = () => {
  // console.log("click");
  menuBody.classList.toggle('menu-open');
  burger.classList.toggle('active');
  document.body.classList.toggle('lock');

  if (menuBody.classList.contains('menu-open')) {
    burger.setAttribute('aria-label', 'Close menu');
    burger.setAttribute('aria-expanded', 'true');
  } else {
    burger.setAttribute('aria-label', 'Open menu');
    burger.setAttribute('aria-expanded', 'false');
  }
};

burger.addEventListener('click', () => {
  toggleMenu();
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggleMenu();
  });
});


// Slider //
//----------------------------------------------------------------------/

const fraction = document.getElementById("fraction");
const slides = document.querySelectorAll(".swiper-slide");
const slideCount = slides.length;

// Функція, що додає нулі перед номером і повертає рядок
function formatFractionNumber(number) {
  return number.toString().padStart(2, '0');
}

// Оновлення тексту фракцій при завантаженні сторінки
fraction.innerHTML = `<span>${formatFractionNumber(1)}</span><span>${formatFractionNumber(slideCount)}</span>`;

var swiper = new Swiper(".testimonials__slider", {
  slidesPerView: 1,
  slidesPerScroll: 1,
  speed: 300,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination"
  },
  on: {
    slideChange: () => {
      const currentIndex = swiper.realIndex + 1;
      const totalSlides = slideCount;

      const fractionContainer = document.getElementById("fraction"); // Змінено селектор на id
      fractionContainer.innerHTML = `<span>${formatFractionNumber(currentIndex)}</span><span>${formatFractionNumber(totalSlides)}</span>`;
    },
  }
});


// Accordion //
//----------------------------------------------------------------------//


const accordionBtns = document.querySelectorAll('.accordion__button');
accordionBtns.forEach(function (btnItem) {
  btnItem.addEventListener('click', function () {
    const content = btnItem.nextElementSibling; // Отримайте наступний елемент (контент)

    // Закриваємо всі відкриті контенти перед відкриттям поточного
    accordionBtns.forEach(function (otherBtn) {
      const otherContent = otherBtn.nextElementSibling;
      if (otherBtn !== btnItem) {
        otherBtn.classList.remove('accordion__button--active');
        otherContent.style.display = 'none';
      }
    });

    // Перевіряємо, чи контент відкритий і відповідно змінюємо стиль відображення та кнопки
    if (btnItem.classList.contains('accordion__button--active')) {
      btnItem.classList.remove('accordion__button--active');
      content.style.display = 'none';
    } else {
      btnItem.classList.add('accordion__button--active');
      content.style.display = 'block';
    }
  });
});




