import $ from 'jquery';

export default function MenuToggle() {
  $('#menu-btn').click(() => {
    $('.hamburger').toggleClass('close');
    $('.menu__slide').toggleClass('open');
    // $('main').toggleClass('push')
  });
}
