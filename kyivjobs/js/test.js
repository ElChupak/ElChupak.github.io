  const menu = document.querySelector('.navigation__bar'),
  menuItem = document.querySelectorAll('.navigation__item'),
  hamburger = document.querySelector('.hamburger');
  if (menu.contains('.navigation__bar_active')) {
    console.log(yes)
  }



function toggleNav() {
    const burgerBtn = document.querySelector('.hamburger');
    if (burgerBtn.style.display == 'flex') {
      burgerBtn.style.display = 'none';
    } else {
      burgerBtn.style.display == 'flex';
    }
  }
    toggleNav();


function burger(trigger, modal,) {
    trigger.addEventListener('click', () => {

    if (modal.style.display == 'flex') {
        modal.style.display = 'none';
        } else {
        modal.style.display == 'flex';
        }
    //   modal.style.display = 'block';
    //   document.body.style.overflow = 'hidden';
    //   document.body.style.marginRight = `${scroll}px`; //Для компенсації зникнення скрола
    });
  

    // close.addEventListener('click', () => {
    //   modal.style.display = 'none';
    //   document.body.style.overflow = '';
    // });
  }
    const burgerBtn = document.querySelector('.hamburger'),
        burgerMenu = document.querySelector('.navigation__bar');

    burger(burgerBtn, burgerMenu,);





  // const menu = document.querySelector('.navigation__bar'),
  // menuItem = document.querySelectorAll('.navigation__item'),
  // hamburger = document.querySelector('.hamburger');

  // hamburger.addEventListener('click', () => {
  //     hamburger.classList.toggle('hamburger_active');
  //     menu.classList.toggle('navigation__bar_active');
  // });

  // menuItem.forEach(item => {
  //     item.addEventListener('click', () => {
  //         hamburger.classList.toggle('hamburger_active');
  //         menu.classList.toggle('navigation__bar_active');
  //     })
  // })
