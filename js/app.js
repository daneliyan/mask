$(document).ready(function () {

  // -------------------- burger --------------------------
  const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    body = document.querySelector('body');
  /*===== MENU SHOW =====*/
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
      body.classList.add('dis-scroll');
    })
  }
  /*===== MENU HIDDEN =====*/
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      body.classList.remove('dis-scroll');
    })
  }
  /*=============== REMOVE MENU MOBILE ===============*/
  const navLink = document.querySelectorAll('.nav__link')
  const navdDropdownLink = document.querySelectorAll('.nav__item-dropdown-content li a')
  const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
    body.classList.remove('dis-scroll');
  }
  navLink.forEach(n => n.addEventListener('click', linkAction));
  navdDropdownLink.forEach(n => n.addEventListener('click', linkAction));


  // --------------------- Articles Tabs ---------------------------
  var articlesTab = $('#articlesTabs .tabs-items > div');
  articlesTab.hide().filter(':first').show();
  // Клики по вкладкам.
  $('#articlesTabs .tabs-nav a').click(function () {
    articlesTab.hide();
    articlesTab.filter(this.hash).show();
    $('#articlesTabs .tabs-nav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':first').click();
  // Клики по якорным ссылкам.
  $('.tabs-target').click(function () {
    $('#articlesTabs .tabs-nav a[href=' + $(this).attr('href') + ']').click();
  });

  // --------------------- Product Tabs ---------------------------
  var productTab = $('#productTabs .tabs-items > div');
  productTab.hide().filter(':first').show();
  // Клики по вкладкам.
  $('#productTabs .tabs-nav a').click(function () {
    productTab.hide();
    productTab.filter(this.hash).show();
    $('#productTabs .tabs-nav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':first').click();
  // Клики по якорным ссылкам.
  $('.tabs-target').click(function () {
    $('#productTabs .tabs-nav a[href=' + $(this).attr('href') + ']').click();
  });


  // ---------------------- SWIPER ---------------------
  var heroSwiper = new Swiper(".heroSwiper", {
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var reviewsSwiper = new Swiper(".reviewsSwiper", {
    loop: true,
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 14
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
      }
    },
  });

  var productsSwiper = new Swiper(".productsSwiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  var productThumbsSwiper = new Swiper(".productThumbsSwiper", {
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      480: {
        spaceBetween: 20
      },
      576: {
        slidesPerView: 5,
      }
    },
  });
  var productMainSwiper = new Swiper(".productMainSwiper", {
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: productThumbsSwiper,
    },
  });


  // -------------------- Acordion FAQ -------------------------
  const accordionItems = document.querySelectorAll('.accordion-item')
  accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion-header')
    accordionHeader.addEventListener('click', () => {
      const openItem = document.querySelector('.accordion-open')
      toggleItem(item)
      if (openItem && openItem !== item) {
        toggleItem(openItem)
      }
    })
  })
  const toggleItem = (item) => {
    const accordionContent = item.querySelector('.accordion-content')
    if (item.classList.contains('accordion-open')) {
      accordionContent.removeAttribute('style')
      item.classList.remove('accordion-open')
    } else {
      accordionContent.style.height = accordionContent.scrollHeight + 'px'
      item.classList.add('accordion-open')
    }
  }


	// -------------------------modal----------------------
	$('.to-state').on('click', function (event) {
		event.preventDefault();
		$('div').removeClass('active');
		$('.state').removeClass('active');
		var state = $(this).attr('data-state');
		$('.state[data-state=' + state + ']').addClass('active');
	});
	$('.close').on('click', function (event) {
		$(this).parents().removeClass('active');
	});
	jQuery(function ($) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $(".state-box"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				div.parents().removeClass('active'); // скрываем его
				$('body').removeClass('modal-open');
			}
		});
	});


});