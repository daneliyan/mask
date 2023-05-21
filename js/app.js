$(document).ready(function () {

  // fix-header
  let header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.scrollY > 0) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }


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
    slidesPerView: 3,
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
  });

  var productThumbsSwiper = new Swiper(".productThumbsSwiper", {
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
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


  // ----------------- Nav onClick Dropdown -------------------
  // const menuBtns = document.querySelectorAll('.nav__dropdown-btn');
  // const drops = document.querySelectorAll('.nav__dropdown-content');
  // menuBtns.forEach(el => {
  //   el.addEventListener('click', (e) => {
  //     let currentBtn = e.currentTarget;
  //     let drop = currentBtn.closest('.nav__list>li').querySelector('.nav__dropdown-content');
  //     searchBar.classList.remove('active');
  //     menuBtns.forEach(el => {
  //       if (el !== currentBtn) {
  //         el.classList.remove('nav__dropdown-btn--active');
  //       }
  //     });
  //     drops.forEach(el => {
  //       if (el !== drop) {
  //         el.classList.remove('nav__dropdown-content--active');
  //       }
  //     });
  //     drop.classList.toggle('nav__dropdown-content--active');
  //     currentBtn.classList.toggle('nav__dropdown-btn--active');
  //   });
  // });
  // document.addEventListener('click', (e) => {
  //   if (!e.target.closest('.nav__list>li')) {
  //     menuBtns.forEach(el => {
  //       el.classList.remove('nav__dropdown-btn--active');
  //     });
  //     drops.forEach(el => {
  //       el.classList.remove('nav__dropdown-content--active');
  //     });
  //   }
  // });


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