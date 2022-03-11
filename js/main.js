navbarToggle();

window.onscroll = function () {
  navbarToggle();
};

function navbarToggle() {
  let topContents = document.querySelector('.topContents.fixed');
  if (window.pageYOffset > window.innerHeight - 50) {
    topContents.classList.remove('hide');
  } else {
    topContents.classList.add('hide');
  }
}
// Accordion and filter
const accordion = document.querySelectorAll('.news-items');
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.opacity == 1) {
      content.style.cssText = `
      height: 0;
      opacity: 0;
      `;
      // content.style.height = '0';
      // content.style.opacity = '0';
    } else {
      content.style.cssText = `
      height: 150px;
      opacity: 1;
      `;
      // content.style.height = '100px';
      // content.style.opacity = '1';
    }
  });
}
// Filter
let newsFilterBtn = document.querySelectorAll('.btn-filter-news');
newsFilterBtn.forEach(e => {
  e.addEventListener('click', function () {
    let filterName = this.innerHTML;
    let newsNotFound = document.querySelector('.news-not-found');
    let newsItemsArray = Array.from(accordion);
    // let newsItemsFilter = newsItemsArray.filter(element => {
    //   if (filterName == 'All') {
    //     newsNotFound.style.display = 'none';
    //     element.style.display = 'block';
    //     return true;
    //   } else if (
    //     element.querySelector('.category').innerText == filterName.toUpperCase()
    //   ) {
    //     newsNotFound.style.display = 'none';
    //     element.style.display = 'block';
    //     return true;
    //   } else {
    //     element.style.display = 'none';
    //     return false;
    //   }
    // });
    // if (!newsItemsFilter.length) {
    //   newsNotFound.style.display = 'block';
    //   newsItemsArray.forEach(element => (element.style.display = 'none'));
    // }
    if (
      newsItemsArray.filter(
        el => el.querySelector('.category').innerText == filterName
      ).length < 1
    )
      newsNotFound.style.display = 'block';
    newsItemsArray.forEach(function (element) {
      if (filterName == 'All') {
        newsNotFound.style.display = 'none';
        element.style.display = 'block';
      } else if (
        element.querySelector('.category').innerText == filterName.toUpperCase()
      ) {
        newsNotFound.style.display = 'none';
        element.style.display = 'block';
      } else {
        element.style.display = 'none';
      }
    });
  });
});

// Add active class to the current control button (highlight it)
let btns = document.querySelectorAll('.btn-filter-news');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active-button-filter');
    current[0].className = current[0].className.replace(
      ' active-button-filter',
      ''
    );
    console.log(this);
    this.className += ' active-button-filter';
  });
}

// Automatic Slideshow
var indexSlideShow = 0;
carousel();

function carousel() {
  var i;
  var x = document.querySelectorAll('#img-header');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  indexSlideShow++;
  if (indexSlideShow > x.length) {
    indexSlideShow = 1;
  }
  x[indexSlideShow - 1].style.display = 'block';
  x[indexSlideShow - 1].style.opacity = 1;

  setTimeout(carousel, 4000); // Change image every 2 seconds
}

// Lightbox
let myModal = document.querySelector('#myModal');
window.addEventListener('click', windowOnClick);

function windowOnClick(event) {
  console.log(event);
  if (
    event.target.className == 'mySlides' ||
    event.target.className == 'modal active'
  ) {
    toggleModal();
  }
}
function toggleModal() {
  myModal.classList.toggle('active');
}
function openModal() {
  myModal.classList.add('active');
}

function closeModal() {
  myModal.classList.remove('active');
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
