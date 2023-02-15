$(document).ready(function () {
  let cursor = $('.cursor');
  let banner = $('.banner');
  let header = $('header');
  let bannerVideo = $('.banner--video');
  let bannerLayer = $('.banner--layer');
  banner.on('mousemove', (e) => {
    let x = e.pageX,
      y = e.pageY;
    cursor.css({
      left: x + 'px',
      top: y + 'px',
    });
  });

  banner.on('click', (e) => {
    bannerVideo.toggleClass('show');
    banner.toggleClass('show');
    bannerVideo.on('click', (e) => {
      e.stopPropagation();
    });
    bannerLayer.toggleClass('show');

    cursor.toggle();
  });

  let y;
  let contentBoxes = document.querySelectorAll('.contentBox .content .box');
  let contentBoxY = [];

  $(contentBoxes).each((index, value) => {
    contentBoxY.push(value.offsetTop);
  });

  let moreBoxTitle = document.querySelectorAll('.contentBox .moreBoxTitle');
  let moreBox = document.querySelectorAll('.contentBox .moreBox');

  let serviceBoxTitle = document.querySelectorAll(
    '.contentBox .serviceBoxTitle'
  );
  let serviceBox = document.querySelectorAll('.contentBox .serviceBox');

  let contact_contact = document.querySelectorAll('.contactBox .contact');
  let contact_title = document.querySelectorAll('.contactBox .title');

  $(window).on('scroll', function () {
    y = scrollY + window.innerHeight;

    $('header').toggleClass('black', y > 110 + window.innerHeight);

    for (let i = 0; i < contentBoxes.length; i++) {
      $(contentBoxes[i]).toggleClass('fade_in', y > contentBoxY[i]);
    }

    $(moreBoxTitle).toggleClass(
      'fade_in',
      y > $(moreBoxTitle).offset().top - 100
    );
    $(moreBox).toggleClass('fade_in', y > $(moreBoxTitle).offset().top - 100);

    $(serviceBoxTitle).toggleClass(
      'fade_in',
      y > $(serviceBoxTitle).offset().top - 100
    );
    $(serviceBox).toggleClass(
      'fade_in',
      y > $(serviceBoxTitle).offset().top - 100
    );

    $(contact_contact).toggleClass(
      'fade_in',
      y > $(contact_contact).offset().top - 100
    );
    $(contact_title).toggleClass(
      'fade_in',
      y > $(contact_contact).offset().top - 100
    );
  });
});
