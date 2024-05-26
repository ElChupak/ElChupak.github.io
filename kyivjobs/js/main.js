// Slider main

const slider = tns({
    container: '.slider__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    controls: false,
    touch: true,
    mouseDrag: true,
    speed: 800,
    autoplay: true,
    autoplayHoverPause: true
});

document.querySelector('.prev').addEventListener('click', () => {
    slider.goTo('prev')
});

document.querySelector('.next').addEventListener('click', () => {
    slider.goTo('next')
});

// Slider feedback
const sliderFeedback = tns({
    container: '.clients__slider_wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    controls: false,
    touch: true,
    mouseDrag: true,
    speed: 1000,
    autoplay: true,
    autoplayHoverPause: true
});

document.querySelector('.first').addEventListener('click', () => {
    sliderFeedback.goTo('prev')
});

document.querySelector('.second').addEventListener('click', () => {
    sliderFeedback.goTo('next')
});

// Accordeon

// const faqs = document.querySelectorAll('.faq__accordion');

// faqs.forEach((item) => {
//     item.addEventListener('click', () => {
//         item.classList.toggle('active');
//     });
// });

const faqs = document.querySelectorAll(".faq__accordion");

faqs.forEach(faq => {
  const question = faq.querySelector(".faq__question");
  const answer = faq.querySelector(".faq__answer");

  question.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      // Закриття активних блоків
      faqs.forEach(otherBlocks => {
        if (otherBlocks.classList.contains("active")) {
          otherBlocks.classList.remove("active");
          otherBlocks.querySelector(".faq__answer").style.maxHeight = null;
        }
      });

      faq.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// Copy Url

const copyUrl = document.querySelector('#copyurl'),
    copied = document.querySelector('.basement__copied');

function copyURI(evt) {
  evt.preventDefault();
  navigator.clipboard.writeText(evt.target.getAttribute('data-mail')).then(() => {
    copyUrl.addEventListener('click', () => {
      copyUrl.classList.add('hideaway');
      copied.classList.add('copied');
  
    setTimeout(() => {
      copyUrl.classList.remove('hideaway');
      copied.classList.remove('copied');
    }, 5000);
  });
  }, () => {
    alert('Error copying Email to clipboard');
  });
}

// const copyUrl = document.querySelector('#copyurl'),
//     copied = document.querySelector('.basement__copied');
    

// copyUrl.addEventListener('click', () => {
//     copyUrl.classList.add('hideaway');
//     copied.classList.add('copied');

//   setTimeout(() => {
//     copyUrl.classList.remove('hideaway');
//     copied.classList.remove('copied');
//   }, 5000);
// });

